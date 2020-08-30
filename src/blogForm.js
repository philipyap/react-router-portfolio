import React from 'react'
import './App.css'

function BlogForm(props){
    return(
        <div>
            <label>Blog Post</label>
            <input type="text" name="blogContent" id="blogContent"></input>
            <button onClick={(e)=> {props.addBlog(e)}}>add blog post</button>
        </div>
    )
}
export default BlogForm