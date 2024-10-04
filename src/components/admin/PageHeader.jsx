import React from 'react'

const PageHeader = ({ title }) => {
  return (
    <div className='h-[100px] w-full'>
      <div className="container mx-auto flex items-center h-full">
        <h1 className='text-2xl font-bold'>{title}</h1>
      </div>
    </div>
  )
}

export default PageHeader
