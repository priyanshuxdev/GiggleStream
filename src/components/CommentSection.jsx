import React, { useState } from "react";
import { useVideo } from "../context/VideoContext";
import CommentList from "./CommentList";

function CommentSection() {
  const { addComment, currentTime } = useVideo();
  const [newComment, setNewComment] = useState("");
  const [userName, setUserName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newComment.trim() || !userName.trim()) return;

    addComment({
      user: userName,
      text: newComment,
      timestamp: new Date(),
      videoTime: Math.floor(currentTime),
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${userName}`,
    });

    setNewComment("");
  };

  return (
    <div className="bg-white border-4 border-[#4A2C2A] rounded-2xl shadow-[6px_6px_0px_0px_rgba(74,44,42,0.8)] p-6">
      <h2 className="text-2xl font-black mb-6 text-[#4A2C2A]">Comments</h2>

      {/* Comment Input Form */}
      <form onSubmit={handleSubmit} className="mb-6 space-y-4">
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Your name"
          className="w-full p-3 border-2 border-[#4A2C2A] rounded-md focus:outline-none focus:ring-2 focus:ring-[#B85C38] bg-white text-[#4A2C2A] font-medium"
          required
        />
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="w-full p-3 border-2 border-[#4A2C2A] rounded-md focus:outline-none focus:ring-2 focus:ring-[#B85C38] bg-white text-[#4A2C2A] font-medium"
          placeholder="Add a comment..."
          rows="3"
          required
        />

        <button
          type="submit"
          className="px-6 py-2 text-lg font-bold text-white bg-[#B85C38] border-4 border-[#4A2C2A] rounded-xl shadow-[4px_4px_0px_0px_rgba(74,44,42,0.8)] transition-all duration-300 hover:shadow-[2px_2px_0px_0px_rgba(74,44,42,0.8)] hover:translate-x-0.5 hover:translate-y-0.5 hover:bg-[#4A2C2A]"
        >
          Post Comment
        </button>
      </form>

      {/* Comments List */}
      <CommentList />
    </div>
  );
}

export default CommentSection;
