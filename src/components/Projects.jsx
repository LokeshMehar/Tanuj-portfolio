import SlideIn from "./SlideIn";
import { projectData } from "../constants/projectData";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { SectionWrapper } from "../hoc";
import { useState } from 'react';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <>
      <SlideIn direction="left" >
        <div className="font-sans" >
          <div className="text-center mb-7 mx-4">
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Featured <span className="text-purple-600">Projects</span>
            </p>
            <p className="mt-3 font-light text-gray-500">
              Check out my selected projects to see my work in action.
            </p>
          </div>

          <div className="hover:cursor-pointer grid grid-cols-1 gap-8 px-4 py-8 mx-auto max-w-6xl rounded-3xl">
            {projectData.map((project, index) => (
              <div
                key={index}
                className="relative rounded-3xl bg-gradient-to-r from-gray-900/60 via-gray-800/40 to-gray-900/60 backdrop-blur-2xl sticky shadow-lg overflow-hidden transition-all duration-300"
                style={{
                  top: `calc(96px + ${index * 40}px)`,
                  height: "auto",
                  border: hoveredProject === index 
                    ? '2px solid rgba(147, 51, 234, 0.6)' 
                    : '1px solid rgba(147, 51, 234, 0.2)',
                  boxShadow: hoveredProject === index
                    ? '0 25px 50px -12px rgba(147, 51, 234, 0.4), 0 0 0 1px rgba(147, 51, 234, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                    : '0 10px 25px -5px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.05)',
                  transform: hoveredProject === index ? 'scale(1.02)' : 'scale(1)',
                  willChange: 'transform, box-shadow, border',
                }}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Animated gradient overlay */}
                <div 
                  className="absolute inset-0 opacity-0 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(168, 85, 247, 0.05), rgba(147, 51, 234, 0.1))',
                    opacity: hoveredProject === index ? 1 : 0,
                  }}
                />

                {/* Card Header */}
                <div className="relative flex items-center justify-between p-6 border-b transition-all duration-300"
                  style={{
                    borderColor: hoveredProject === index 
                      ? 'rgba(147, 51, 234, 0.4)' 
                      : 'rgba(147, 51, 234, 0.2)',
                  }}
                >
                  <span 
                    className="text-sm font-medium transition-colors duration-300"
                    style={{
                      color: hoveredProject === index 
                        ? 'rgba(196, 181, 253, 1)' 
                        : 'rgba(196, 181, 253, 0.8)',
                    }}
                  >
                    {String(index + 1).padStart(2, '0')} | {project.type}
                  </span>
                  <a
                    href={project.sourceCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full transition-all duration-300"
                    style={{
                      border: hoveredProject === index 
                        ? '2px solid rgba(147, 51, 234, 0.6)' 
                        : '1px solid rgba(147, 51, 234, 0.3)',
                      background: hoveredProject === index 
                        ? 'rgba(147, 51, 234, 0.2)' 
                        : 'transparent',
                      transform: hoveredProject === index ? 'scale(1.1)' : 'scale(1)',
                    }}
                  >
                    <GitHubLogoIcon 
                      className="h-6 w-6 transition-colors duration-300" 
                      style={{
                        color: hoveredProject === index ? '#ffffff' : 'rgba(147, 51, 234, 0.8)',
                      }}
                    />
                  </a>
                </div>

                {/* Card Content */}
                <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                  {/* Image Section */}
                  <div className="relative overflow-hidden rounded-xl border-2 transition-all duration-300 lg:order-1"
                    style={{
                      borderColor: hoveredProject === index 
                        ? 'rgba(147, 51, 234, 0.6)' 
                        : 'rgba(147, 51, 234, 0.3)',
                      boxShadow: hoveredProject === index
                        ? '0 15px 35px rgba(147, 51, 234, 0.3)'
                        : '0 5px 15px rgba(0, 0, 0, 0.2)',
                    }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover aspect-video transition-transform duration-300"
                      style={{
                        transform: hoveredProject === index ? 'scale(1.05)' : 'scale(1)',
                      }}
                    />
                    <div 
                      className="absolute inset-0 bg-gradient-to-t transition-opacity duration-300"
                      style={{
                        background: hoveredProject === index
                          ? 'linear-gradient(to top, rgba(26, 18, 39, 0.7), rgba(147, 51, 234, 0.1))'
                          : 'linear-gradient(to top, rgba(26, 18, 39, 0.6), transparent)',
                      }}
                    />
                  </div>

                  {/* Text Content */}
                  <div className="flex flex-col justify-between lg:order-2">
                    <div>
                      <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                        <span 
                          className="p-3 rounded-full transition-all duration-300"
                          style={{
                            background: hoveredProject === index
                              ? 'linear-gradient(135deg, rgba(147, 51, 234, 0.4), rgba(168, 85, 247, 0.3))'
                              : 'rgba(147, 51, 234, 0.3)',
                            border: hoveredProject === index
                              ? '2px solid rgba(147, 51, 234, 0.6)'
                              : '1px solid rgba(147, 51, 234, 0.5)',
                            transform: hoveredProject === index ? 'scale(1.1)' : 'scale(1)',
                            boxShadow: hoveredProject === index
                              ? '0 8px 25px rgba(147, 51, 234, 0.3)'
                              : 'none',
                          }}
                        >
                          {project.icon}
                        </span>
                        {project.title}
                      </h2>
                      <p 
                        className="leading-relaxed mb-8 transition-colors duration-300"
                        style={{
                          color: hoveredProject === index 
                            ? 'rgba(196, 181, 253, 0.9)' 
                            : 'rgba(196, 181, 253, 0.8)',
                        }}
                      >
                        {project.description}
                      </p>
                      
                      {/* Technology Stack */}
                      <div className="flex flex-wrap gap-4 mb-8">
                        {project.technologies.map((tech, techIndex) => (
                          <div
                            key={tech}
                            className="relative p-2 rounded-lg transition-all duration-300"
                            style={{
                              background: hoveredProject === index
                                ? 'rgba(147, 51, 234, 0.2)'
                                : 'rgba(147, 51, 234, 0.1)',
                              border: hoveredProject === index
                                ? '1px solid rgba(147, 51, 234, 0.4)'
                                : '1px solid rgba(147, 51, 234, 0.2)',
                              transform: hoveredProject === index ? 'scale(1.05)' : 'scale(1)',
                              transitionDelay: `${techIndex * 50}ms`,
                            }}
                          >
                            <img
                              src={`/tech-icons/${tech}.svg`}
                              alt={tech}
                              className="h-8 w-8 object-contain transition-all duration-300"
                              title={tech}
                              style={{
                                filter: hoveredProject === index 
                                  ? 'brightness(1.2) saturate(1.1)' 
                                  : 'brightness(1)',
                              }}
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Live Preview */}
                    <a
                      href={project.livePreview}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 w-fit no-underline transition-all duration-300 group"
                      style={{
                        color: hoveredProject === index ? '#ffffff' : 'rgba(196, 181, 253, 1)',
                      }}
                    >
                      <span 
                        className="text-xl transition-transform duration-300"
                        style={{
                          transform: hoveredProject === index ? 'scale(1.2)' : 'scale(1)',
                        }}
                      >
                        🌍
                      </span>
                      <span 
                        className="border-b transition-all duration-300"
                        style={{
                          borderColor: hoveredProject === index 
                            ? 'rgba(255, 255, 255, 0.8)' 
                            : 'transparent',
                          textShadow: hoveredProject === index 
                            ? '0 0 10px rgba(147, 51, 234, 0.5)' 
                            : 'none',
                        }}
                      >
                        Live Preview →
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SlideIn>
    </>
  );
};

export default SectionWrapper(Projects, 'projects');