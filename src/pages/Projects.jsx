import React from 'react'

const Projects = () => {

  const projPics = [
    { name: 'AISeek', imageSrc: 'https://res.cloudinary.com/delscyuhi/image/upload/v1695872659/tvptex45kwu0sluvn7nq.png'},
    { name: 'MRKT', imageSrc: 'https://res.cloudinary.com/delscyuhi/image/upload/v1695871890/qb2hjytc1vxvgxerstal.png'},
    { name: 'Pixels', imageSrc: 'https://res.cloudinary.com/delscyuhi/image/upload/v1695927673/d89mxo4bugoo0sx2lkv6.png '},
    { name: 'Chicken Run', imageSrc: 'https://res.cloudinary.com/delscyuhi/image/upload/v1695871890/t65digbrgsxxjcqllxen.png'},


  ]
  return (
    <div className="p-4">
    <div className="container mx-auto px-4 py-10 items-center flex-wrap">
      <h1 className="text-center mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Projects</h1>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
      {projPics.map((proj, index) => (
        <div key={index} className={`bg-white shadow-lg rounded-lg p-2 md:p-4 w-3/4 mx-auto ${index % 2 === 0 ? 'md:col-start-1 lg:col-start-1' : 'md:col-start-2 lg:col-start-2'}`}>
          <img src={proj.imageSrc} alt={`${proj.name}`} className="w-full h-auto" />
          <h3 className="text-xl font-semibold mt-2">{proj.name}</h3>
        </div>
      ))}
    </div>
  </div>

  )
}

export default Projects