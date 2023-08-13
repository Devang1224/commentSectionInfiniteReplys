import React, { useState } from "react";
import "./comment.css";
import { AddReply } from "../../helpers/AddReply";
import { useComment } from "../../contextapi/CommentsProvider";
import { editComment } from "../../helpers/EditComment";
import { deleteComment } from "../../helpers/DeleteComment";

const Comment = ({ singleComment }) => {


  const [reply, setReply] = useState("");
  const[edit,setEdit] = useState(singleComment.val);
  const[editBox,setEditBox] = useState(false)
  const [replyBox, setReplyBox] = useState(false);
  const{commentData,setCommentData} = useComment();

  return (
    <>

{  singleComment.id!==0 && (<>

       
         <div className="comment">   {/* single comment */}
          <p>{singleComment.val}</p>
          <div className="controls">
            <button
              onClick={() => {
                setReplyBox((prev) => !prev);
                setEditBox(false);
              }}
            >
              reply
            </button>
            <button onClick={()=>{
              setEditBox((prev)=>!prev);
              setReplyBox(false);
            }}>edit</button>
            <button onClick={()=>{deleteComment(commentData,setCommentData,singleComment)}}>delete</button>
          </div>
        </div>

        {/* reply box */}

        <div className={replyBox ? "replyContainer" : "hideReplyContainer"}>
          <input
            type="text"
            placeholder="add reply"
            value={reply}
            onChange={(e) => setReply(e.target.value)}
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              AddReply(singleComment,reply,commentData,setCommentData);
              setReply("");
              setReplyBox(false);
            }}
          >
            Add Reply
          </button>
        </div> 
        

        <div className={editBox ? "editContainer" : "hideEditContainer"}>
          <input
            type="text"
            placeholder="update comment"
            value={edit}
            onChange={(e) => setEdit(e.target.value)}
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              editComment(singleComment,edit,commentData,setCommentData);
              setEdit("");
              setEditBox(false);
            }}
          >
            Edit Comment
          </button>
        </div>
        
        </>)

}


        {singleComment?.replys?.map((item) => {
        return <div key={item.id} className="singleCommentContainer">
                 <Comment key={item.id} singleComment={item} />
               </div>;
      })}
    </>
  );
};

export default Comment;
