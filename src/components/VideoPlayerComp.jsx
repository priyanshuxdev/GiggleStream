import React, { useEffect, useRef } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import { useVideo } from "../context/VideoContext";

function VideoPlayerComp() {
  const videoRef = useRef(null);
  const playerRef = useRef(null);
  const { setPlayer, setCurrentTime, comments } = useVideo();
  const commentMarkersRef = useRef([]);

  useEffect(() => {
    if (!playerRef.current) {
      const videoElement = videoRef.current;
      if (!videoElement) return;

      const timer = setTimeout(() => {
        const player = videojs(videoElement, {
          controls: true,
          fluid: true,
          resize: true,
          responsive: true,
          aspectRatio: "16:9",
          playbackRates: [0.5, 1, 1.5, 2],
          sources: [
            {
              src: "https://vjs.zencdn.net/v/oceans.mp4",
              type: "video/mp4",
            },
          ],
          controlBar: {
            children: [
              "playToggle",
              "volumePanel",
              "progressControl",
              "currentTimeDisplay",
              "timeDivider",
              "durationDisplay",
              "playbackRateMenuButton",
              "fullscreenToggle",
            ],
          },
        });

        setPlayer(player);

        // Update current time
        player.on("timeupdate", () => {
          setCurrentTime(player.currentTime());
        });

        playerRef.current = player;

        // Add custom styles to video.js elements
        const style = document.createElement("style");
        style.textContent = `
          .video-js .vjs-control-bar {
            background-color: rgba(74, 44, 42, 0.9) !important;
            border-radius: 10px !important;
          }

          .video-js .vjs-play-progress {
            background-color: #B85C38 !important;
          }

          .video-js .vjs-slider {
            background-color: rgba(223, 204, 170, 0.3) !important;
          }

          .video-js .vjs-button > .vjs-icon-placeholder:before {
            color: #DFCCAA !important;
          }

          .video-js .vjs-playback-rate .vjs-playback-rate-value {
            color: #DFCCAA !important;
          }

          .video-js .vjs-time-control {
            color: #DFCCAA !important;
          }

          .video-js .vjs-volume-level {
            background-color: #B85C38 !important;
          }

          .comment-marker {
            position: absolute;
            width: 12px;
            height: 12px;
            background-color: #B85C38;
            border: 2px solid #4A2C2A;
            border-radius: 50%;
            transform: translate(-50%, -50%);
            cursor: pointer;
            transition: all 0.3s ease;
            z-index: 1;
          }

          .comment-marker:hover {
            transform: translate(-50%, -50%) scale(1.2);
            background-color: #4A2C2A;
          }
        `;
        document.head.appendChild(style);
      }, 100);

      return () => {
        clearTimeout(timer);
        if (playerRef.current) {
          playerRef.current.dispose();
          playerRef.current = null;
        }
      };
    }
  }, [setPlayer, setCurrentTime]);

  // Update comment markers when comments change
  useEffect(() => {
    if (!playerRef.current) return;

    // Remove old markers
    commentMarkersRef.current.forEach((marker) => marker.remove());
    commentMarkersRef.current = [];

    // Add new markers
    const progressControl = playerRef.current.controlBar.progressControl;
    const seekBar = progressControl.seekBar.el();

    comments.forEach((comment) => {
      const marker = document.createElement("div");
      marker.className = "comment-marker";
      marker.title = `${comment.user}: ${comment.text}`;

      const position = (comment.videoTime / playerRef.current.duration()) * 100;
      marker.style.left = `${position}%`;

      marker.addEventListener("click", () => {
        playerRef.current.currentTime(comment.videoTime);
      });

      seekBar.appendChild(marker);
      commentMarkersRef.current.push(marker);
    });
  }, [comments]);

  return (
    <div className="video-player-container max-w-5xl mx-auto p-4">
      <div className="h-full p-4 border-4 border-[#4A2C2A] rounded-3xl bg-gradient-to-tr from-[#DFCCAA] via-[#B85C38] to-[#4A2C2A] shadow-[8px_8px_0px_0px_rgba(74,44,42,0.8)]">
        <div data-vjs-player className="h-full">
          <video
            ref={videoRef}
            className="video-js vjs-big-play-centered rounded-xl h-full w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default VideoPlayerComp;
