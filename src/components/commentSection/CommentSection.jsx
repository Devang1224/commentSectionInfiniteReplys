import React, { useState } from "react";
import "./comment.css";
import Comment from "../comment/Comment";
import { useComment } from "../../contextapi/CommentsProvider";
import { addComment } from "../../helpers/AddComment";

const CommentSection = () => {
  const [input, setInput] = useState("");
  
  const {commentData,setCommentData} = useComment();


  return (
    <div className="commentContainer">
        <div>
          <input
            type="text"
            placeholder="add comment"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={(e)=>{e.preventDefault();addComment(input,setCommentData);setInput("")}}>Add Comment</button>
        </div>

        <Comment singleComment={commentData} />

    </div>
  );
};

export default CommentSection;

{
}
