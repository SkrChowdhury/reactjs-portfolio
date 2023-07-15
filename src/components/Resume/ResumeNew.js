import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

import { Container, Row } from 'react-bootstrap';
import { Document, Page, pdfjs } from 'react-pdf';
import React, { useEffect, useState } from 'react';

import { AiOutlineDownload } from 'react-icons/ai';
import Button from 'react-bootstrap/Button';
import Particle from '../Particle';
import pdf from '../../Assets/../Assets/Sakkar_Chowdhury_Resume.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink =
  'https://raw.githubusercontent.com/SkrChowdhury/reactjs-portfolio/25bbe00b5bae0b935f4156823f169ea680e95d93/src/Assets/Sakkar_Chowdhury_Resume.pdf';

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: 'center', position: 'relative' }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: '250px' }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          <Document file={resumeLink} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
          <Document file={resumeLink} className="d-flex justify-content-center">
            <Page pageNumber={2} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        <Row style={{ justifyContent: 'center', position: 'relative' }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: '250px' }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
