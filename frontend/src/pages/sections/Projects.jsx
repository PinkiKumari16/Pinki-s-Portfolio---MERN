import React, { useState } from 'react'
import { TitlesName } from '../../components/TitlesName'
import { projectsData } from '../../resources/projectData'


export const Projects = () => {
    const [projectIndex, setProjectIndex] = useState(0);
  return (
    <div className='sm:mt-10 px-5'>
        <TitlesName title="Projects" />
        <div className='flex flex-col lg:flex-row items-center justify-around gap-20'>
            <div className='flex sm:flex-row lg:flex-col text--300 py-5 gap-8 border-l-2 text-[#044150] w-2/5'>{
                projectsData.map((data, index)=>(
                    <h1 className={`sm:px-8 cursor-pointer sm:-ml-1 sm:py-1
                    ${(projectIndex === index)? "sm:border-l-5 text-tertiary rounded" : "text-white"}`}
                    onClick={()=>setProjectIndex(index)}>
                        
                        {data.title}</h1>
                ))}
            </div>
            <div className='flex gap-10'>
                <div
                    className='h-[45vh] w-[50vw] bg-cover bg-center'
                    style={{backgroundImage: `url(${projectsData[projectIndex].image})`}}
                >project image</div>
                <div>
                    <h1 className='text-secondry text-3xl font-semibold py-5'>{projectsData[projectIndex].title}</h1>
                    <p className='text-white'>{projectsData[projectIndex].technologies}</p><br />
                    <p className='text-white'>{projectsData[projectIndex].description}</p>
                </div>
            </div>
        </div>
    </div>
  )
}
