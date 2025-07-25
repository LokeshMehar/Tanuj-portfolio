import { useState } from 'react'

const size = 200
const stroke = 14
const radius = (size - stroke) / 2
const circumference = 2 * Math.PI * radius

const data = [
  {
    label: 'Easy',
    solved: 209,
    total: 876,
    color: '#00C49F',
    bgColor: '#b2dfd4',
    beats: 97.95,
    padding: 40,
  },
  {
    label: 'Medium',
    solved: 470,
    total: 1840,
    color: '#FFBB28',
    bgColor: '#ffe7b2',
    beats: 98.97,
    padding: 120,
  },
  {
    label: 'Hard',
    solved: 54,
    total: 832,
    color: '#FF4C4C',
    bgColor: '#ffb2b2',
    beats: 92.03,
    padding: 40,
  },
]

const DSAStatCircle = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const total = data.reduce((acc, d) => acc + d.total, 0)

  // Precompute offset array for reuse in both maps
  const offsets = data.reduce((acc, d, i) => {
    const prevOffset = acc[i - 1] || 0
    const portion = d.total / total
    acc.push(prevOffset + portion)
    return acc
  }, [])

  return (
    <div className="relative w-[200px] h-[200px] text-black">
      <svg width={size} height={size}>
        {/* Background Arcs */}
        {data.map((d, i) => {
          const portion = d.total / total
          const segmentLength = circumference * portion
          const startOffset = circumference * (offsets[i] - portion)

          return (
            <circle
              key={`bg-${i}`}
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke={d.bgColor}
              strokeWidth={stroke}
              strokeOpacity={0.75}
              strokeDasharray={`${segmentLength} ${circumference}`}
              strokeDashoffset={-startOffset}
              transform={`rotate(-90 ${size / 2} ${size / 2})`}
              strokeLinecap="butt"
            />
          )
        })}

        {/* Foreground (Solved) Arcs */}
        {data.map((d, i) => {
          const portion = d.total / total
          const segmentLength = circumference * portion
          const startOffset = circumference * (offsets[i] - portion)
          const solvedPortion = d.solved / d.total
          const solvedLength = segmentLength * solvedPortion + d.padding

          return (
            <circle
              key={`fg-${i}`}
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke={d.color}
              strokeWidth={stroke}
              strokeOpacity={1}
              strokeDasharray={`${solvedLength} ${circumference}`}
              strokeDashoffset={-startOffset}
              transform={`rotate(-90 ${size / 2} ${size / 2})`}
              strokeLinecap="round"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{ cursor: 'pointer' }}
            />
          )
        })}
      </svg>

      {/* Tooltip Info */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white pointer-events-none">
        {hoveredIndex === null ? (
          <>
            <div>
              <span className="text-2xl font-bold">733</span>
              <span className="text-sm font-extralight">/3548</span>
            </div>
            <span className="text-lg font-semibold">Solved</span>
            <span className="text-sm">2.2K submissions</span>
          </>
        ) : (
          <>
            <span className="font-semibold text-base">
              {data[hoveredIndex].label}
            </span>
            <span className="text-sm font-semibold mb-1">
              {data[hoveredIndex].solved}
              <span className="text-xs font-thin mb-1">/733</span>
            </span>

            <div className="flex flex-col items-center space-y-1">
              <span className="text-xs text-gray-500">Beats</span>
              <span className="inline-flex items-baseline text-xs">
                <span className="text-xl font-bold leading-none">
                  {Math.floor(data[hoveredIndex].beats)}
                </span>
                <span className="text-sm relative -top-[2px] ml-0.5">
                  .{(data[hoveredIndex].beats % 1).toFixed(2).split('.')[1]}%
                </span>
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default DSAStatCircle
