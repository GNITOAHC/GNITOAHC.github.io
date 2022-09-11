import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Test = () => {
  const [post, setPost] = useState([])

  useEffect(() => {
    axios
      .get(
        'https://raw.githubusercontent.com/GNITOAHC/.dotfiles/main/test/test.json'
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
  return <div>{postlist}</div>
}

export default Test
