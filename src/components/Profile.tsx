import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Image,
  Card,
  Tabs,
  Tab,
  Accordion,
} from "react-bootstrap";
import defaultProfilePic from "../assets/ipad_small_2x_DSC_0005.jpg";

const ProfilePage: React.FC = () => {
  const user = {
    fullName: "Sithembiso Mahlangu",
    email: "sithembiso.mahlangu@falcorp.co.za",
    roles: ["Front End Developer", "Digital Designer", "Animator"],
    department: "CME, Digital Experience",
    level: "L2",
    url: "https://teamtreehouse.com",
  };

  const pdfCompletion = 72;
  const [pdfCount, setPdfCount] = useState(0);
  const [profilePic, setProfilePic] = useState(defaultProfilePic);
  const [activeKey, setActiveKey] = useState<string | null>("0");

  useEffect(() => {
    let start = 0;
    const end = pdfCompletion;
    const duration = 500;
    const increment = end / (duration / 20);

    const counter = setInterval(() => {
      start += Math.ceil(increment);
      if (start >= end) {
        setPdfCount(end);
        clearInterval(counter);
      } else {
        setPdfCount(start);
      }
    }, 20);

    return () => clearInterval(counter);
  }, []);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const getIcon = (filename: string) => {
    const ext = filename.split(".").pop()?.toLowerCase();
    switch (ext) {
      case "pdf":
        return <i className="bi bi-file-earmark-pdf text-danger fs-3 me-2" />;
      case "doc":
      case "docx":
        return <i className="bi bi-file-earmark-word text-primary fs-3 me-2" />;
      case "png":
      case "jpg":
      case "jpeg":
        return <i className="bi bi-file-earmark-image text-info fs-3 me-2" />;
      default:
        return <i className="bi bi-file-earmark fs-3 me-2" />;
    }
  };

  const renderTabContent = (tabKey: string) => {
    const items = [
      {
        id: "0",
        title: `Item A - ${tabKey}`,
        status: "Met",
        percentage: "60%",
        color: "text-success",
        attachments: ["Report.pdf", "Chart.png"],
      },
      {
        id: "1",
        title: `Item B - ${tabKey}`,
        status: "Not met",
        percentage: "20%",
        color: "text-danger",
        attachments: ["Summary.docx", "Image.jpeg"],
      },
      {
        id: "2",
        title: `Item C - ${tabKey}`,
        status: "Exceeded",
        percentage: "100%",
        color: "text-success",
        attachments: ["Summary.docx", "Report.pdf", "Image.jpeg"],
      },
      {
        id: "3",
        title: `Item D - ${tabKey}`,
        status: "Exceeded",
        percentage: "100%",
        color: "text-success",
        attachments: ["Summary.docx", "Report.pdf", "Image.jpeg"],
      },
    ];

    return (
      <>
        <div className="d-flex align-items-center pt-3 mb-3">
          <Row className="w-100 my-2 pb-1">
            <Col md={4}>
              <strong className="fs-4 fw-bold">Title</strong>
            </Col>
            <Col md={3}>
              <strong className="fs-4 fw-bold">Score</strong>
            </Col>
            <Col md={3}>
              <strong className="fs-4 fw-bold">Percentages</strong>
            </Col>
            <Col md={2}></Col>
          </Row>
        </div>

        <Accordion activeKey={activeKey} onSelect={(key) => setActiveKey(key)}>
          {items.map((item) => (
            <div key={item.id} className="mt-4 mb-4 border-0 rounded">
              <Accordion.Item eventKey={item.id}>
                <Accordion.Header>
                  <Row className="w-100 align-items-center">
                    <Col md={4}>{item.title}</Col>
                    <Col md={3}>
                      <span className={item.color}>{item.status}</span>
                    </Col>
                    <Col md={3}>{item.percentage}</Col>
                    <Col md={2} className="text-end">
                      <i
                        className={`bi fs-4 transition-icon ${
                          activeKey === item.id ? "bi-dash" : "bi-plus"
                        }`}
                      />
                    </Col>
                  </Row>
                </Accordion.Header>

                <Accordion.Body>
                  <p>
                    Details for <strong>{item.title}</strong> in{" "}
                    <strong>{tabKey}</strong> tab.
                  </p>

                  <h6 className="mt-4 mb-2">Attachments:</h6>
                  <div className="d-flex flex-wrap gap-3">
                    {item.attachments.map((file, index) => (
                      <div
                        key={index}
                        className="d-flex align-items-center bg-white border rounded px-3 py-2 shadow-sm"
                        style={{ minWidth: 180 }}
                      >
                        {getIcon(file)}
                        <span className="text-truncate">{file}</span>
                      </div>
                    ))}
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </div>
          ))}
        </Accordion>
      </>
    );
  };

  return (
    <div
      style={{
        backgroundColor: "#f0f0f0",
        minHeight: "100vh",
        padding: "8rem 1rem 4rem",
      }}
    >
      <Container>
        <Row className="g-4 align-items-stretch">
          <Col md={4}>
            <Card className="d-flex align-items-center justify-content-center text-center p-4 h-100">
              <div
                className="avatar-wrapper"
                onClick={() =>
                  document.getElementById("profileUpload")?.click()
                }
              >
                <Image
                  src={profilePic}
                  roundedCircle
                  width={170}
                  height={170}
                  className="border border-3 border-light shadow-sm"
                  alt="Profile"
                  style={{ objectFit: "cover" }}
                />
                <div className="overlay text-white">
                  <i className="bi bi-camera fs-3 mb-1" />
                  <span className="small">Change Photo</span>
                </div>
                <input
                  id="profileUpload"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  style={{ display: "none" }}
                />
              </div>
            </Card>
          </Col>

          <Col md={8}>
            <Card className="p-4 h-100">
              <Card.Body>
                <h2 className="fw-bold mb-4">{user.fullName}</h2>
                <p className="d-flex align-items-center">
                  <i className="bi bi-envelope me-2 fs-5"></i>
                  {user.email}
                </p>
                <p className="d-flex align-items-center">
                  <i className="bi bi-collection me-2 fs-5"></i>{" "}
                  {user.department}
                </p>
                <p className="d-flex align-items-center">
                  <i className="bi bi-person-rolodex me-2 fs-5"></i> {user.level}
                </p>
                <p className="d-flex align-items-center">
                  <a
                    href={user.url}
                    className="text-decoration-underline text-danger"
                    target="_blank"
                  >
                    <i className="bi bi-trophy me-2 fs-5 text-danger"></i>
                    Certifications
                  </a>
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Card className="p-5 mt-4">
          <div className="d-flex align-items-center justify-content-left mt-2 mb-5">
            <span className="fs-2 fw-bold text-primary ms-2 me-3">
              PDF Completion
            </span>
            <span className="fs-2 fw-bold text-white bg-primary px-4 py-2 rounded-pill">
              {pdfCount}%
            </span>
          </div>

          <Tabs
            defaultActiveKey="financial"
            id="profile-tabs"
            className="mb-3 custom-tabs"
            transition={false}
          >
            <Tab eventKey="financial" title="Financial">
              {renderTabContent("Financial")}
            </Tab>
            <Tab eventKey="practice" title="Practice">
              {renderTabContent("Practice")}
            </Tab>
            <Tab eventKey="customer" title="Customer">
              {renderTabContent("Customer")}
            </Tab>
            <Tab eventKey="culture" title="Culture">
              {renderTabContent("Culture")}
            </Tab>
          </Tabs>
        </Card>
      </Container>
    </div>
  );
};

export default ProfilePage;
