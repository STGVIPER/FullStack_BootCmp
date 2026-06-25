import { useState } from "react";

const LikeButton = () => {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
      setLiked(false);
    } else {
      setLikes(likes + 1);
      setLiked(true);
    }
  };

  return (
    <div className="card">
      <h2>5. Like Button</h2>
      <button
        onClick={handleLike}
        style={{ fontSize: "1.5rem", background: liked ? "#fde68a" : "" }}
      >
        {liked ? "❤️" : "🤍"} {likes} {likes === 1 ? "Like" : "Likes"}
      </button>
    </div>
  );
};

export default LikeButton;
