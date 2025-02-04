import React, { useState } from 'react'
import { TitlesName } from '../../components/TitlesName'
import { projectsData } from '../../resources/projectData'


export const Projects = () => {
    const [projectIndex, setProjectIndex] = useState(0);
  return (
    <div className='sm:mt-10 px-5'>
        <TitlesName title="Projects" />
        <div className='flex flex-col lg:flex-row items-center justify-around gap-20'>
            <div className='flex sm:flex-row lg:flex-col py-5 gap-8 overflow-x-scroll lg:overflow-x-hidden lg:border-l-2 text-[#044150] lg:w-2/5 ml-35 sm:ml-0 lg:ml-10'>{
                projectsData.map((data, index)=>(
                    <h1 className={`px-3 text-[12px] lg:text-xl lg:px-8 cursor-pointer py-1
                    ${(projectIndex === index)? "border-l-4 text-tertiary bg-[#1a7f5a31]" : "text-white"}`}
                    onClick={()=>setProjectIndex(index)}>
                        {data.title}
                    </h1>
                ))}
            </div>
            <div className='flex flex-col md:flex-row gap-10 justify-around'>
                <img src={projectsData[projectIndex].image} alt="project image" className='h-[45vh] md:w-[50vw] lg:w-[20vw] bg-cover bg-center' />
                {/* <div
                    className='h-[45vh] md:w-[50vw] lg:w-[20vw] bg-cover bg-center'
                    style={{backgroundImage: `url(${projectsData[projectIndex].image})`}}
                ></div> */}
                <div className='md:w-3/5'>
                    <h1 className='text-secondry text-3xl font-semibold py-5'>{projectsData[projectIndex].title}</h1>
                    <p className='text-white'>{projectsData[projectIndex].technologies}</p><br />
                    <p className='text-white'>{projectsData[projectIndex].description}</p>
                </div>
            </div>
        </div>
    </div>
  )
}
