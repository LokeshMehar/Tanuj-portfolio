/* eslint-disable react/prop-types */
import { VerticalTimelineElement } from 'react-vertical-timeline-component';

const GitHubCard = ({ contributionCount = 702 }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: 'rgba(147, 51, 234, 0.1)',
      color: '#fff',
      border: '1px solid rgba(147, 51, 234, 0.4)',
      borderRadius: '12px',
      boxShadow: '0 8px 25px rgba(147, 51, 234, 0.3)',
    }}
    contentArrowStyle={{ borderRight: '7px solid #232631' }}
    date="GitHub & Version Control"
    iconStyle={{
      background: '#2c1f3e',
      color: '#fff',
      boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
      border: '1px solid rgba(147, 51, 234, 0.4)',
    }}
    icon={
      <div className="flex justify-center items-center w-full h-full text-white text-xl">
        <img
          src="./github.svg"
          alt="GitHub Icon"
          className="w-[80%] h-[80%] object-contain"
        />
      </div>
    }
  >
    <div className="flex flex-col gap-4">
      {/* Summary Section */}
      <section>
        <h3 className="text-white text-[24px] font-bold mb-3 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
          GitHub & Version Control
        </h3>
        <ul className="list-disc list-inside text-[14px] text-gray-100 space-y-2 pl-2">
          <li>
            <span className="font-bold text-green-400">{contributionCount}+</span> contributions in the past year across multiple repositories
          </li>
          <li>
            Proficient Git user with expertise in <span className="text-blue-300 font-medium">CLI-based workflows</span>
          </li>
          <li>
            Extensive use of GitHub in <span className="text-purple-300">full-stack application development</span>
          </li>
        </ul>
      </section>

      {/* Feature Highlights */}
      <section className="border-t border-gray-600/50 pt-4 text-[14px] text-gray-200">
        <h4 className="text-white font-bold mb-3 text-[16px]">
          Key Practices & Tools
        </h4>
        <ul className="list-disc list-inside text-[14px] text-gray-100 space-y-2 pl-2">
          <li>
            Advanced command line operations: <span className="text-cyan-300 font-semibold">git rebase, cherry-pick, stash</span>
          </li>
          <li>
            Implemented <span className="text-yellow-300 font-medium">CI/CD pipelines with GitHub Actions</span> for automation
          </li>
          <li>
            Adheres to <span className="text-purple-300">conventional commit standards</span> and thorough pull request reviews
          </li>
          <li>
            Leverages <span className="text-blue-300">repository analytics</span> for project optimization
          </li>
        </ul>
      </section>
    </div>
  </VerticalTimelineElement>
);

export default GitHubCard;