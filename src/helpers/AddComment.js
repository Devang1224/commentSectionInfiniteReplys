
export const addComment=(input,setCommentData)=>{
    
if(input)
 {
    const newComment = {
        id:Date.now(),
        val:input,
        replys:[]
    }

    setCommentData((prev)=>{
       prev.replys.unshift(newComment);
       return {...prev};
    })
   
 }

}