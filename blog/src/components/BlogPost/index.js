import React, { useState, useEffect } from 'react'
import './style.css'
import Card from '../UI/Card'
import blogPost from '../../data/blog.json'

/**
* @author
* @function BlogPost
**/

const BlogPost = (props) => {

  console.log(props)

  const [post, setPost] = useState({

    id: "",
    blogCategory: "",
    blogTitle: "",
    slug: "",
    postedOn: "",
    author: "",
    blogImage: "",
    blogText: ""

  })
  const [postid, setPostid] = useState('')

  useEffect(() => {

    const postId = props.match.params.postid
    console.log("Post Id", postId)
    console.log("Blog Post Json", blogPost.data)
    const post = blogPost.data.find(post => post.id == postId)
    console.log("Post", post)
    setPost(post)
    setPostid(postId)

  }, [post, props.match.params.postid])


if(post.blogImage=="") return null

  return (
    //style={{width:'70%'}}
    //  <Card width='70%' >
    //      My First Blog post
    //  </Card>

    <div className="blogPostContainer">
      <Card >
        <div className="blogHeader">
          <span className="blogCategory">Featured</span>
          <h1 className="postTitle">{post.blogTitle}</h1>
          <span className="postedBy">posted on {post.postedOn} by {post.author}</span>
        </div>

        <div className="postImageContainer">
          <img src={require(`../../blogPostImages/${post.blogImage}`)} alt="Post Image" />
        </div>

        <div className="postContent">
          <h3>{post.blogTitle}</h3>
          <p>{post.blogText}</p>
        </div>

      </Card>
    </div>
  )

}

export default BlogPost