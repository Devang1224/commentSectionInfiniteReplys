import React from 'react'
import { useState } from 'react';
import { Children } from 'react';
import { createContext } from 'react';
import { useContext } from 'react'


export const commentContext = createContext();

export const useComment = ()=>{
  return useContext(commentContext);
}

const CommentsProvider = ({children}) => {

    const[commentData,setCommentData] = useState(
        {
            id: 0,
            val: "parent",
            replys: []
          
        }
        
        )


  return (
    <commentContext.Provider value={{commentData,setCommentData}}>
        {children}
    </commentContext.Provider>
  )
}

export default CommentsProvider