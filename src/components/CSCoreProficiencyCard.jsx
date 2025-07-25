import { VerticalTimelineElement } from 'react-vertical-timeline-component';

const CSCoreProficiencyCard = () => (
  <VerticalTimelineElement
    contentStyle={{
      background: 'rgba(147, 51, 234, 0.12)',
      color: '#fff',
      border: '1px solid rgba(147, 51, 234, 0.35)',
      borderRadius: 12,
      boxShadow: '0 8px 24px rgba(147, 51, 234, 0.22)',
      padding: '24px 20px'
    }}
    contentArrowStyle={{ borderRight: '7px solid #232631' }}
    date="Academics & Core Technical Foundation"
    iconStyle={{
      background: '#2c1f3e',
      color: '#fff',
      boxShadow: '0 4px 20px rgba(0,0,0,0.25)',
      border: '1px solid rgba(147, 51, 234, 0.35)'
    }}
    icon={
      <div className="flex justify-center items-center w-full h-full text-white text-2xl">
        🎓
      </div>
    }
  >
    <div className="flex flex-col gap-5">
      {/* Education Summary */}
      <section>
        <h3 className="text-[24px] font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Technical Education
        </h3>
        <ul className="list-disc list-inside text-[14px] text-gray-100 space-y-2 pl-2">
          <li>
            <span className="text-blue-300">2022–2027 Batch</span> | Integrated B.Tech + M.Tech in IT
          </li>
          <li>
            <span className="font-bold text-yellow-400">ABV-IIITM Gwalior</span>
            <span className="text-green-400 font-semibold ml-1">CGPA: 8.00</span>
          </li>
          <li>
            Core subjects: <span className="text-cyan-300 font-medium">DSA, OOP, DBMS, OS, Networks, COA</span>
          </li>
        </ul>
      </section>

      {/* Research & Applied Work */}
      <section className="border-t border-gray-600/50 pt-4 text-[14px] text-gray-200">
        <h4 className="font-bold mb-2 text-[16px] text-white">
          Applied Learning & Research
        </h4>
        <div className="grid gap-3">
          <div>
            <h5 className="text-green-300 font-semibold mb-1 text-sm">Medical AI Research</h5>
            <p className="text-xs leading-relaxed">
              Implemented research papers on skin cancer & brain tumor detection using DNNs and hybrid segmentation techniques.
            </p>
          </div>
          <div>
            <h5 className="text-blue-300 font-semibold mb-1 text-sm">Production Development</h5>
            <p className="text-xs leading-relaxed">
              Developed production-grade applications based on research insights, following industry-standard software engineering practices.
            </p>
          </div>
        </div>
      </section>
    </div>
  </VerticalTimelineElement>
);

export default CSCoreProficiencyCard;