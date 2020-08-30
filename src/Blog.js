import React, { Component} from 'react'


class Blog extends Component {
    render(){
        const blogList = this.props.blog.map((b, idx)=>{
        return <li key={idx}>{b}</li>
        })
        return(
            <>
                <h1>Blog Post:</h1>
                {blogList}
                
            </>
        )
    }
}
export default Blog