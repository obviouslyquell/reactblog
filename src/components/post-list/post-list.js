import React ,{Component} from "react";
import PostListItem from "../post-list-item";

const PostList = ({posts, onDelete, onToggleImportant, onToggleLiked}) => {


const elements = posts.map((item)=>{
    const {id, ...text} = item;
    return(
        <li key={id} className="list-group-item">
            <PostListItem 
            {...text}
            onDelete={()=>onDelete(id)}
            onToggleImportant={()=>onToggleImportant(id)}
            onToggleLiked={()=>onToggleLiked(id)}/>   
        </li>
    )
})


    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default PostList