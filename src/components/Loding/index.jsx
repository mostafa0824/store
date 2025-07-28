import {BounceLoader} from 'react-spinners'

import React from 'react'

export default function Loading() {
  return (
    <div className='flex justify-center items-center h-[100vh] w-[100vw] fixed top-0 left-0'>
      <BounceLoader size={70} color='#3a4b5c'/>
    </div>
  )
}
