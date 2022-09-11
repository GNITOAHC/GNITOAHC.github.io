import React from 'react'
import { useState, useEffect } from 'react'
import './posts.css'
import axios from 'axios'
// import Data from '../../../../data/posts.json'

const Posts = () => {
  const [post, setPost] = useState([])

  useEffect(() => {
    axios
      .get(
        'https://raw.githubusercontent.com/GNITOAHC/blog-data/main/data.json'
      )
      .then((response) => {
        setPost(response.data.Posts)
      })
      .catch((error) => {
        console.log(error)
      }, [])
  }, [])

  var postlist = []

  for (let i = 0; i < post.length; ++i) {
    const data = post[i]

    const tags = data.tag.map((tag, index) => <span key={index} className="postCat">{tag}</span>)
    // var tags = [] // Extract all tags
    // for (let j = 0; j < data.tag.length; ++j) {
    //   tags.push(<span className="postCat">{data.tag[j]}</span>)
    // }

    var destination = 'single/' + data.id //Make unique single destination

    postlist.push(
      <div className="post" key={data.id}>
        <img className="post-image" src={data.image} alt={data.image_alt} />
        <div className="postInfo">
          <div className="postCats">{tags}</div>
          <a href={destination} className="post-title" name="hello">
            {data.title}
          </a>
          <span className="post-date">{data.date}</span>
        </div>
        <p className="post-content">{data.preview}</p>
      </div>
    )
  }

  return <div className="posts">{postlist}</div>
}

export default Posts
