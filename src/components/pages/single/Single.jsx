import React from 'react'
import './single.css'
import SinglePost from '../singlePost/SinglePost'
import Sidebar from '../../sidebar/Sidebar'
import { useParams } from 'react-router-dom'

const Single = () => {
  const { id } = useParams()
  // const {id} = props

  // return <div>test {id}</div>
  return (
    <div className="single">
      {/* <h2>test {id}</h2> */}
      <SinglePost id={id} />
      <Sidebar />
    </div>
  )
}

export default Single
