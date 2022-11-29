import React from "react";
import { Button } from "react-bootstrap";

function UnlikeButton({id, onFavorite}) {
    return (
        <Button aria-label="unlike prof" id="likeButton" className="unlike" onClick={
            ()=>{
                onFavorite(id, false)
            }
        }>
            <i className="fa-regular fa-heart" aria-hidden="true"></i>
        </Button>
    )
}

export default UnlikeButton;