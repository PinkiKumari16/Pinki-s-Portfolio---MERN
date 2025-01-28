import React from 'react'
import { TitlesName } from '../../components/TitlesName'
import { SkillButton } from '../../components/SkillButton'

export const AboutSection = () => {
    const skills = [
        'HTML & CSS',
        'Javascript',
        'React',
        'Express',
        'Redux',
        'Mongo DB',
        'ZOHO'
    ]
  return (
    <>
        <div className='px-5'>
            <TitlesName title="About Me"/>
            <div className='flex items-center gap-15 justify-center p-10'>
                <div 
                    className='h-[60vh] w-[30vw] bg-cover bg-center ' 
                    style={{backgroundImage: `url(https://img.freepik.com/free-photo/3d-rendering-cute-girl-with-glasses-working-her-laptop_1057-45909.jpg?t=st=1738050869~exp=1738054469~hmac=caf4424a20edc4d179a6407c2b95e57d6943fe43425524f95836484cee125feb&w=740)`}}>
                </div>
                <div className='flex flex-col gap-10 w-1/2 text-white'>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit saepe officia laudantium quisquam autem rerum molestias provident inventore cum officiis, nihil sed voluptates dicta eligendi voluptate fugiat voluptatibus non atque!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ad nobis, saepe praesentium quam aperiam laborum tempore magni dolores, vitae illum aliquam eligendi fuga, accusamus tenetur in sunt voluptatibus numquam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ad nobis, saepe praesentium quam aperiam laborum tempore magni dolores, vitae illum aliquam eligendi fuga, accusamus tenetur in sunt voluptatibus numquam?Lorem ipsum dolor sit amet consectetur atempore magni dolores, vitae illum aliquam eligendi fuga, accusamus tenetur in sunt voluptatibus numquam?
                    </p>
                </div>
            </div>
            <div className='py-10 ml-20'>
                <h1 className="text-[#54D6BB] text-xl">Here are a few technologies I've been working with recently:</h1>
                <div className='flex flex-wrap gap-5 mt-5'>
                    {skills.map((skill) =>(
                        <SkillButton data={skill} className='text-white' />
                    ))}
                </div>
            </div>

        </div>
    </>
  )
}
