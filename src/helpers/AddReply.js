import { useComment } from "../contextapi/CommentsProvider"


function addNewReply(id,reply,commentData,setCommentData)
{
  
  if(id===commentData.id)
  {
       commentData.replys.unshift({
        id:Date.now(),
        val:reply,
        replys:[]
       })

       return commentData;
  }


  let temp =[];

  temp=commentData.replys.map((item)=>{
    return addNewReply(id,reply,item,setCommentData)
  })



  return {...commentData,replys:temp};

}


export const AddReply = (comment,reply,commentData,setCommentData)=>{

if(reply)
{
  const res =  addNewReply(comment.id,reply,commentData,setCommentData);
  setCommentData(res);
}

}