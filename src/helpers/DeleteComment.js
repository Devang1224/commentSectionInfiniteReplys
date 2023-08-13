
function deleteSelectedComment(commentData,prevCommentData,setCommentData,id,i){

if(id===commentData.id)
{
 
prevCommentData.replys.splice(i,1);
return prevCommentData;

}

commentData.replys.map((item,index)=>{
    return deleteSelectedComment(item,commentData,setCommentData,id,index);
})


return {...prevCommentData}   


}


export const deleteComment = (commentData,setCommentData,singleComment)=>{

let prevCommentData = commentData;

//using a prev index like we do in linkedlist
const res = deleteSelectedComment(commentData,prevCommentData,setCommentData,singleComment.id,0);  

setCommentData(res);

}