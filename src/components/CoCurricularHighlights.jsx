import { VerticalTimelineElement } from 'react-vertical-timeline-component';

const CoCurricularHighlightsCard = () => (
  <VerticalTimelineElement
    contentStyle={{ 
      background: 'rgba(147, 51, 234, 0.1)', 
      color: '#fff',
      border: '1px solid rgba(147, 51, 234, 0.4)',
      borderRadius: '12px',
      boxShadow: '0 8px 25px rgba(147, 51, 234, 0.3)'
    }}
    contentArrowStyle={{ borderRight: '7px solid #232631' }}
    date="Beyond the Classroom"
    iconStyle={{ background: '#2c1f3e', color: '#fff', boxShadow: '0 4px 20px rgba(0,0,0,0.3)',border: '1px solid rgba(147, 51, 234, 0.4)' }}
    icon={
      <div className="flex justify-center items-center w-full h-full text-white text-2xl">
        🧑‍💼
      </div>
    }
  >
    <div className="flex flex-col gap-4">
      {/* Main Heading */}
      <div>
        <h3 className="text-white text-[24px] font-bold mb-3 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
          Leadership & Activities
        </h3>
        <ul className="list-disc list-inside text-[14px] text-gray-100 space-y-2 pl-2">
          <li className="leading-relaxed">
            <span className="text-yellow-400 font-semibold">Core Team Member</span> - Inter-IIIT Sports Meet (25 IIITs), represented college in cricket
          </li>
          <li className="leading-relaxed">
            <span className="text-purple-400 font-semibold">Event Head</span> - Aurora (5-year flagship fest), led Rang Manch execution
          </li>
          <li className="leading-relaxed">
            <span className="text-blue-400 font-semibold">Lead Organizer</span> - Urja sports fest, won cricket gold medal
          </li>
        </ul>
      </div>

      {/* Section 2: Soft Skills & Learnings */}
      <div className="border-t border-gray-600/50 pt-4 text-[14px] text-gray-200">
        <h4 className="text-white font-bold mb-3 text-[16px]">
          Key Skills Developed
        </h4>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="text-center">
            <div className="text-blue-300 font-semibold text-sm">Team Management</div>
            <div className="text-xs text-gray-400 mt-1">Large-scale event logistics</div>
          </div>
          <div className="text-center">
            <div className="text-green-300 font-semibold text-sm">Communication</div>
            <div className="text-xs text-gray-400 mt-1">Adaptability & decision-making</div>
          </div>
          <div className="text-center">
            <div className="text-yellow-300 font-semibold text-sm">Result-Oriented</div>
            <div className="text-xs text-gray-400 mt-1">Competitive mindset</div>
          </div>
          
        </div>
      </div>
    </div>
  </VerticalTimelineElement>
);

export default CoCurricularHighlightsCard;