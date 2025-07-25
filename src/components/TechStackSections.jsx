/* eslint-disable react/prop-types */

import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { fadeIn } from '../utils/motion';
import { frameworksAndLibraries, programmingLanguages, toolsAndPlatforms } from '../constants/techStack';
import TechCarousel from './TechCarousel';

const TechStack = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <motion.div variants={fadeIn('', '', 0.1, 1)} className="flex-1">
        <p className={styles.sectionSubText}>Technical Expertise</p>
        <h2 className={styles.sectionHeadText}>Tech Stack</h2>

        <div className="mt-10 space-y-6 md:space-y-10">
          <TechCarousel title="Programming Languages" items={programmingLanguages} />
          <TechCarousel title="Frameworks & Libraries" items={frameworksAndLibraries} />
          <TechCarousel title="Tools & Platforms" items={toolsAndPlatforms} />
        </div>
      </motion.div>
      <div id="contact"></div>
    </div>
  );
};

export default SectionWrapper(TechStack, 'tech');