import React from 'react'
import { useState, useEffect } from 'react'
import './singlePost.css'
// import Data from '../../../data/posts.json'

import axios from 'axios'
import 'zero-md'

const SinglePost = (props) => {
  const [post, setPost] = useState([])
  const { id } = props

  useEffect(() => {
    axios
      .get(
        'https://raw.githubusercontent.com/GNITOAHC/blog-data/main/data.json'
      )
      .then((response) => {
        setPost(response.data.Posts)
        console.log(`id: ${id}`)
      })
      .catch((error) => {
        console.log(error)
      }, [])
  }, [id])

  // var curPost
  // for (let i = 0; i < Data.Posts.length; ++i) {
  //   if (Data.Posts[i].id === id) {
  //     // console.log(Data.Posts[i].title)
  //     curPost = Data.Posts[i]
  //   }
  // }

  const RenderPost = (index, post) => {
    return (
      <div key={index} className="singlePost">
        <div className="singlePostWrapper">
          <img className="singlePostImg" src={post.image} alt="HAHA" />
          <h1 className="singlePostTitle">{post.title}</h1>
          <div className="singlePostInfo">
            <span className="singlePostInfo-date">DATE: {post.date}</span>
            <span className="singlePostInfo-author">AUTHOR: {post.author}</span>
          </div>
          {/* <zero-md src="https://raw.githubusercontent.com/GNITOAHC/Basic-Terminal/main/Lesson1-CommandLine/README.md"></zero-md> */}
          <zero-md className="singlePost-content" src={post.content} />
          {/* <footer>Author: {curPost.author}</footer> */}
        </div>
      </div>
    )
  }

  return (
    <>
      {post.map((post, index) => {
        if (post.id === id) return RenderPost(index, post)
        else return null
      })}
    </>
  )
}

export default SinglePost
