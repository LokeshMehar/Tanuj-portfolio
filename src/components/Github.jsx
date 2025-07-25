import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";
import React from "react";
import { Tooltip } from "react-tooltip"; 
import "react-tooltip/dist/react-tooltip.css"; 

function Github() {
  return (
    <Row
      style={{
        justifyContent: "center",
        padding: "40px 0",
      }}
    >
      <h1
        style={{
          paddingBottom: "24px",
          display: "flex",
          justifyContent: "center",
          fontWeight: 600,
          fontSize: "2rem",
          fontFamily: "var(--font-sans, 'Segoe UI', sans-serif)",
          color:"white"
        }}
        data-aos="fade-right"
      >
        My Year in Code
      </h1>

      <div
        className="gitContainer"
        data-aos="fade-up"
        style={{
          padding: "20px",
          borderRadius: "20px",
          color: "white",
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "1px solid var(--border-dark, #444)",
          overflowX: "auto",
          transition: "background 0.3s ease-in-out",
        }}
      >
        <GitHubCalendar
          username="LokeshMehar"
          blockSize={13}
          blockMargin={4}
          fontSize={14}
          showWeekdayLabels={["mon", "wed", "fri"]}
          transformData={(data) =>
            data.map((activity) => {
              let level = 0;
              if (activity.count > 0) level = 1;
              if (activity.count > 2) level = 2;
              if (activity.count > 5) level = 3;
              if (activity.count > 10) level = 4;
              return { ...activity, level };
            })
          }
          maxLevel={4}
          theme={{
            light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
            dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
          }}
           renderBlock={(block, activity) =>
    React.cloneElement(block, {
      "data-tooltip-id": "github-tooltip",
      "data-tooltip-content": `${activity.count} contribution${activity.count !== 1 ? "s" : ""} on ${activity.date}`,
      className: `${block.props.className} github-block`,
    })
  }
        />
        <Tooltip
  id="github-tooltip"
  place="top"
  style={{ zIndex: 9999 }}
  float={true}
  positionStrategy="absolute"
/>


      </div>
    </Row>
  );
}

export default Github;
