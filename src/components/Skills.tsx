import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container pt-32'>
        <div className='grid md:grid-cols-2 gap-20 items-center'>
            <div data-aos="zoom-in">
                <h2 className='text-4xl md:text-5xl'>Technologies I Work With</h2>
                <p className='text-gray-500 pt-2'>
I specialize in modern web development, focusing on technologies such as React and TypeScript for
building dynamic, scalable front-end applications. I am proficient in utilizing React Router for
navigation, Redux and Context API for state management, and React Icons to enhance user interfaces with 
scalable vector icons. My backend expertise includes working with Node.js and Express, and 
I am experienced in setting up RESTful APIs and integrating with databases like MongoDB and MySQL.
I also leverage CSS frameworks like Tailwind CSS and Bootstrap to streamline styling and 
ensure responsive design. I am familiar with version control using Git and collaborating through GitHub.
Additionally, I have hands-on experience with deploying applications to cloud platforms like Heroku and 
Vercel, ensuring smooth and efficient application delivery.
                </p>
            </div>
            <div>
                <div className='grid grid-cols-2 text-3xl sm:text-4xl'>
                    <div className='space-y-2'>
                        <h2 data-aos="zoom-in">Typescript</h2>
                        <h2 data-aos="zoom-in">React.js</h2>
                        <h2 data-aos="zoom-in">Next.js</h2>
                    </div>
                    <div className='space-y-2'>
                        <h2 data-aos="zoom-in">Tailwind</h2>
                        <h2 data-aos="zoom-in">CSS</h2>
                        <h2 data-aos="zoom-in">Node.js</h2>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Skills
