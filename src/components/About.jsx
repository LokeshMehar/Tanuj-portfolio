/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { styles } from '../styles';
import { fadeIn } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import Github from './Github';
import myImg from '../assets/about.png';

const About = () => {
  return (
    <>
      <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-12 ">
        
        <motion.div
          variants={fadeIn('', '', 0.1, 1)}
          className="flex-1 max-w-xl"
        >
          <p className={`${styles.sectionSubText}`}>Introduction</p>
          <h2 className={`${styles.sectionHeadText} mb-4`}>Overview.</h2>
          <p className="text-secondary text-[17px] leading-[30px]">
            I am a passionate Software Developer with hands-on experience across a wide range of development tasks, from building responsive front-end interfaces to designing robust back-end systems. My journey has equipped me with a solid understanding of modern web technologies and best practices. As an aspiring Full Stack Developer, I am eager to contribute to dynamic teams, tackle real-world challenges, and continuously expand my skill set. I thrive on learning new tools and frameworks, and I am committed to delivering high-quality, scalable solutions that make a meaningful impact.
          </p>
        </motion.div>

        
        <Tilt
          glareEnable={true}
          glareMaxOpacity={0.45}
          scale={1.05}
          transitionSpeed={250}
          className="w-[300px] sm:w-[350px] md:w-[400px] lg:w-[450px] rounded-2xl shadow-xl"
        >
          <img
            src={myImg}
            alt="avatar"
            className="rounded-2xl w-full h-auto object-contain"
          />
        </Tilt>
      </div>

      {/* GitHub Section */}
      <div className="mt-16 w-full">
        <Github />
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');
