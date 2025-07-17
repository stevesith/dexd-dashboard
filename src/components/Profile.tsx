import React from "react";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import profilePic2 from "../assets/ipad_small_2x_DSC_0005.jpg";

const ProfilePage: React.FC = () => {
  const user = {
    fullName: "Sithembiso Stevens Mahlangu",
    email: "sithembiso.mahlangu@falcorp.co.za",
    roles: ["Front End Developer", "Digital Designer", "Animator"],
    department: "CME",
    location: "Centurion, South Africa",
  };

  return (
    <Container className="pt-5 mt-5">
      <Row className="align-items-center">
        <Col md={4} className="text-center">
          <Image
            src={profilePic2}
            roundedCircle
            width={150}
            height={150}
            className="border border-3 border-subtle shadow-sm"
            alt="Profile"
          />
        </Col>
        <Col md={8}>
          <Card className="shadow-sm p-4 border-light">
            <Card.Body>
              <h5 className="fw-bold mb-3">Profile Information</h5>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              <p>
                <strong>Department:</strong> {user.department}
              </p>
              <p>
                <strong>Location:</strong> {user.location}
              </p>
              <p>
                <strong>Roles:</strong>{" "}
                {user.roles.map((role, i) => (
                  <span key={i} className="badge bg-primary me-2 py-2 px-3">
                    {role}
                  </span>
                ))}
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProfilePage;
