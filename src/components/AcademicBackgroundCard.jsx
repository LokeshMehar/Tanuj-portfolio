import { VerticalTimelineElement } from 'react-vertical-timeline-component';

const AcademicBackgroundCard = () => (
  <VerticalTimelineElement
    contentStyle={{ 
      background: 'rgba(147, 51, 234, 0.1)', 
      color: '#fff',
      border: '1px solid rgba(147, 51, 234, 0.4)',
      borderRadius: '12px',
      boxShadow: '0 8px 25px rgba(147, 51, 234, 0.3)'
    }}
    contentArrowStyle={{ borderRight: '7px solid #232631' }}
    date="Academic Milestones"
    iconStyle={{ background: '#2c1f3e', color: '#fff', boxShadow: '0 4px 20px rgba(0,0,0,0.3)',border: '1px solid rgba(147, 51, 234, 0.4)' }}
    icon={
      <div className="flex justify-center items-center w-full h-full text-white text-2xl">
        🏅
      </div>
    }
  >
    <div className="flex flex-col gap-4">
      {/* Heading */}
      <div>
        <h3 className="text-white text-[24px] font-bold mb-3 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
          Academic Achievements
        </h3>
        <ul className="list-disc list-inside text-[14px] text-gray-100 space-y-2 pl-2">
          <li className="leading-relaxed">
            Qualified <span className="font-bold text-blue-400">GATE (CS/IT)</span> in 3rd year with 
            <span className="font-bold text-yellow-300 ml-1">All India Rank under 10,000</span>
          </li>
          <li className="leading-relaxed">
            Cleared <span className="font-bold text-green-400">JEE Advanced & JEE Main</span> for undergraduate admission
          </li>
          <li className="leading-relaxed">
            Strong academic foundation: <span className="text-cyan-300 font-bold">10th: 90% | 12th: 91%</span>
          </li>
        </ul>
      </div>

      {/* Achievements */}
      <div className="border-t border-gray-600/50 pt-4 text-[14px] text-gray-200">
        <h4 className="text-white font-bold mb-3 text-[16px]">
          Notable Recognition
        </h4>
        <div className="bg-gray-800/30 p-3 rounded-lg">
          <h5 className="text-red-400 font-semibold mb-1 text-sm">National Television Feature</h5>
          <p className="text-xs leading-relaxed">
            Featured on national TV (Class 6) as a finalist in financial quiz conducted by 
            <span className="font-bold text-blue-300 ml-1">NSE & CNBC Business</span>
          </p>
        </div>
      </div>
    </div>
  </VerticalTimelineElement>
);

export default AcademicBackgroundCard;