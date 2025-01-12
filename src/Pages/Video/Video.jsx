import React from 'react'
import PlayVideo from '../../Components/PlayVideo/PlayVideo'
import Recommmended from '../../Components/Recommended/Recommmended'
import { useParams } from 'react-router-dom'

const video = () => {
  const {videoId,categoryId} = useParams()
  return (
    <div className='bg-[#f9f9f9] ps-[2%] pe-[2%] pt-5 pb-5 flex justify-between flex-wrap'>
      <PlayVideo videoId={videoId}/>
      <Recommmended categoryId={categoryId}/>
    </div>
  )
}

export default video
