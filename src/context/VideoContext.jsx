import React, { createContext, useContext, useState } from "react";

const VideoContext = createContext();

export function VideoProvider({ children }) {
  const [player, setPlayer] = useState(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [comments, setComments] = useState([]);

  const addComment = (comment) => {
    setComments((prev) => [...prev, { ...comment, id: Date.now() }]);
  };

  const seekTo = (time) => {
    if (player) {
      player.currentTime(time);
    }
  };

  return (
    <VideoContext.Provider
      value={{
        player,
        setPlayer,
        currentTime,
        setCurrentTime,
        comments,
        addComment,
        seekTo,
      }}
    >
      {children}
    </VideoContext.Provider>
  );
}

export function useVideo() {
  return useContext(VideoContext);
}
