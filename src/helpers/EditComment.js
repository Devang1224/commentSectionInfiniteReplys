

function editNode(id,edit,commentData,setCommentData)
{

if(id===commentData.id)
{
     commentData.val = edit;
     return commentData;
}

commentData.replys.map((item)=>{
    return editNode(id,edit,item,setCommentData);
})

return {...commentData}

}

export const editComment = (singleComment,edit,commentData,setCommentData)=>{
  
 const res = editNode(singleComment.id,edit,commentData,setCommentData);
 setCommentData(res);

}