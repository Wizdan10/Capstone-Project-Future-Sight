import React from "react";
import { Button } from "react-bootstrap";

function LikeButton({ id, unFavorite }) {
  return (
    <Button
      aria-label="like prof"
      id="likeButton"
      className="like"
      onClick={() => {
        unFavorite(id, true);
      }}
    >
      <i className="fa-solid fa-heart" aria-hidden="true"></i>
    </Button>
  );
}

export default LikeButton;
