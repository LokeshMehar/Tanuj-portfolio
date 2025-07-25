/* eslint-disable react/prop-types */
import {
  VerticalTimeline,
} from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';

import 'react-vertical-timeline-component/style.min.css';

import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';
import ExperienceCardDSA from './ExperienceCardDSA';
import GitHubCard from './GithubCard';
import CSCoreProficiencyCard from './CSCoreProficiencyCard';
import AcademicBackgroundCard from './AcademicBackgroundCard';
import CoCurricularHighlightsCard from './CoCurricularHighlights';



const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Notable Experience</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          <ExperienceCardDSA />
          <GitHubCard contributionCount={681} />
          <CSCoreProficiencyCard />
          <AcademicBackgroundCard />
          <CoCurricularHighlightsCard />
          {/* {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))} */}
        </VerticalTimeline>
      </div>
      <div id="project"></div>
    </>
  );
};

export default SectionWrapper(Experience, 'work');
