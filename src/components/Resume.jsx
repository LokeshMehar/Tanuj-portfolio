import { Container, Row } from "react-bootstrap";
import Particle from "../components/Particle";
import pdf from "../assets/resume/LokeshResume.pdf";

import { Worker } from "@react-pdf-viewer/core";
import { Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

function Resume() {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <div
      style={{
        overflowX: "hidden",
        overflowY: "auto",
        paddingBottom: "2rem",
      }}
    >
      <Container fluid className="resume-section" style={{ padding: "2rem 0" }}>
        <Particle />

        {/* Stylish Download button */}
        

        {/* PDF Viewer */}
        <Row className="justify-content-center">
          <div
            style={{
              width: "100%",
              maxWidth: "900px",
              minHeight: "800px",
              boxShadow: "0 0 10px rgba(0,0,0,0.2)",
              borderRadius: "1rem",
              overflowY: "auto",
            }}
          >
            <Worker workerUrl={`https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js`}>
              <Viewer fileUrl={pdf} plugins={[defaultLayoutPluginInstance]} />
            </Worker>
          </div>
        </Row>

        
      </Container>
    </div>
  );
}

export default Resume;
