import React, { useState, useEffect } from 'react'
import './style.css'
import Card from '../UI/Card'

import blogPost from '../../data/blog.json'

import { NavLink } from 'react-router-dom';
/**
* @author
* @function Sidebar
**/

const Sidebar = (props) => {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    const posts = blogPost.data
    console.log("Side barPost", posts)
    setPosts(posts)

  }, [posts])

  return (
    //style={{width:'27%'}}
    // <Card width='27%'>
    //   Sidebar
    // </Card>
    <div className="sidebarContainer" >
      <Card style={{ marginBottom: '20px', padding: '20px', boxSizing: 'border-box' }}>
        <div className="cardHeader">
          <span>About Us</span>

        </div>
        <div className="profileImage">
          <img src="https://thebambooshoots.files.wordpress.com/2012/07/kuroko-no-basket-kuroko-no-basuke-30918594-550-600.jpg" alt="Person Image" />
        </div>
        <div className="cardBody">
          <p className="personalBio">My name is Siddharth Tiwari</p>
        </div>
      </Card>

      <Card style={{ marginBottom: '20px', padding: '20px', boxSizing: 'border-box' }}>
        <div className="cardHeader">
          <span>Social Network</span>

        </div>
      </Card>

      <Card style={{ marginBottom: '20px', padding: '20px', boxSizing: 'border-box' }}>
        <div className="cardHeader">
          <span>Recent Posts</span>
        </div>

        <div className="recentPosts">

          {
            posts.map(post => {
              return (
                <NavLink key={post.id} to={`/post/${post.id}`}>
                  <div className="recentPost">
                    <h3 className="recentPostTitle">
                      {post.blogTitle}
                    </h3 >
                    <span>{post.postedOn}</span>
                  </div>
                </NavLink>
              )
            })
          }
        </div>
      </Card>
    </div>
  )

}

export default Sidebar