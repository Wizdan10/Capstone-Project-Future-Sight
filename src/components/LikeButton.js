import React from "react";
import { Button } from "react-bootstrap";

function LikeButton({id, onFavorite}) {
    return (
        <Button aria-label="like prof" id="likeButton" className="like" onClick={
            ()=>{
                onFavorite(id)}
            }>
            <i className="fa-solid fa-heart" aria-hidden="true"></i>
        </Button>
    )
}

export default LikeButton;
