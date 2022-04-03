import React from "react";

const AppHeader = ({allLiked, allPosts})=>{
    return (
        <div className="app-header d-flex">
            <h1>Jmishenko</h1>
            <h2>{allPosts} всего, понравилось - {allLiked}</h2>
        </div>
    )
}

export default AppHeader