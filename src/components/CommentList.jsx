import { useVideo } from "../context/VideoContext";

function CommentList() {
  const { comments, seekTo } = useVideo();

  const formatTimestamp = (date) => {
    const now = new Date();
    const diff = now - date;
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) return `${days} day${days > 1 ? "s" : ""} ago`;
    if (hours > 0) return `${hours} hour${hours > 1 ? "s" : ""} ago`;
    if (minutes > 0) return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
    return "Just now";
  };

  const formatVideoTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="space-y-6 overflow-y-auto max-h-[300px]">
      {comments.map((comment) => (
        <div
          key={comment.id}
          className="border-b-2 border-[#DFCCAA] pb-3 last:border-b-0"
        >
          <div className="flex items-start mb-2">
            <img
              src={comment.avatar}
              alt={comment.user}
              className="w-10 h-10 rounded-full mr-4 border-2 border-[#4A2C2A]"
            />
            <div className="flex-grow">
              <h3 className="font-bold text-[#4A2C2A] text-lg">
                {comment.user}
              </h3>
              <div className="flex items-center gap-2 text-sm text-[#4A2C2A] mb-2">
                <span>{formatTimestamp(comment.timestamp)}</span>
                <span>•</span>
                <button
                  onClick={() => seekTo(comment.videoTime)}
                  className="text-[#B85C38] hover:underline font-medium"
                >
                  {formatVideoTime(comment.videoTime)}
                </button>
              </div>
              <p className="text-[#4A2C2A]">{comment.text}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CommentList;
