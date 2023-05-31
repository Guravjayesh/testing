import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";




const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px]
        shadow card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className="bg-tertiary rounded-[20px] py-5
            px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title}
            className='w-16 h-16 object-contain' />
          <h3 className="text-white text-[20px]
              font-bold text-center">{title}</h3>

        </div>

      </motion.div>
    </Tilt>
  )

}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About me.</h2>
      </motion.div>
<div className={`xl:mt-18 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[-17px] 
        max-w-3xl leading-[30px]"
      >

        <ul>
          <li>I am 21 years old, currently in 3rd year (Graduating 2024), pursuing a career in AIML(CSE) from Sahyadri college of engineering Mangalore.
            Born and brought up in Karwar karnataka, India.</li>
          <li>I have a deep interest in various domains of computer science. I have a strong background in Machine Learning and Data Science, and I
            possess the ability to analyze complex data sets and derive meaningful insights from them.In addition,
            I am proficient in web development and Android app development.</li>
          <li>I have worked on projects and have demonstrated my expertise in building good functional and user-friendly applications.My passion for these
            fields is evident from my dedication and commitment to my work. I am always eager to learn and keep myself updated with the latest technologies and trends in the industry
          </li>
        </ul>


      </motion.p>
      <div  className="mt-4 flex flex-wrap gap-8 ">
        <img src="..\src\assets\JAYESH.jpg" alt=""/>
      </div>
      </div>
      {/* <br/>
      <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
        Resume
      </button> */}

      <div className="mt-20 flex flex-wrap gap-10 ">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}

      </div>


    </>
  )
}

export default SectionWrapper(About, "about")