import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Cards: React.FC = () => {
  const cardData = [
    {
      title: "Financial",
      text: "Project Profitability, Compliance and Control",
      img: "",
      kpiWt: "5%",
      ratingScore: "2.35",
    },
    {
      title: "Practice",
      text: "Business growth, Improve staff expertise, optimize technology & framework",
      img: "",
      kpiWt: "10%",
      ratingScore: "3.25",
    },
    {
      title: "Culture",
      text: "Embrace and live our culture",
      img: "",
      kpiWt: "4%",
      ratingScore: "2.00",
    },
    {
      title: "Customer",
      text: "Provide excellent customer experience",
      img: "",
      kpiWt: "4%",
      ratingScore: "3.85",
    },
  ];

  return (
    <Container className="pt-5">
      <Row xs={1} md={2} lg={4} className="g-4">
        {cardData.map((card, index) => (
          <Col key={index}>
            <Card
              className="h-100 mx-auto card-hover card-body shadow-sm border-primary"
              style={{ maxWidth: "350px", height: "350px" }}
            >
              <Card.Body className="d-flex flex-column">
                <Card.Title className="fs-3 mb-4 fw-bolder card-title">
                  {card.title}
                </Card.Title>
                <Card.Text className="mb-4 fs-6 text-start fw-light flex-wrap">
                  {card.text}
                </Card.Text>
                <div className="mt-auto w-100 d-flex flex-column">
                  <div className="d-flex justify-content-center card-scores">
                    <div className="d-flex align-items-center fw-bold wt-score">
                      <span>
                        <p className="kpi-titles">KPI Wt:</p>
                        <p className="kpi-results d-flex align-items-center py-3 px-2 fs-4">
                          <i className="bi bi-activity ms-2 me-2 score-icons"></i>
                          {card.kpiWt}
                        </p>
                      </span>
                    </div>
                    <div className="d-flex align-items-center fw-bold rating-core">
                      <span>
                        <p className="kpi-titles">Rating:</p>
                        <p className="kpi-results d-flex align-items-center py-3 px-2 fs-4">
                          <i className="bi bi-star-fill ms-2 me-2 score-icons"></i>
                          {card.ratingScore}
                        </p>
                      </span>
                    </div>
                  </div>
                  <Link
                    to="/upload-timesheet"
                    className="btn btn-outline-primary w-100 py-2 mt-5"
                    id="card-buttons"
                  >
                    Build <i className="bi bi-plus-lg ms-2"></i>
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row className="mb-4 mt-5 pt-5 pb-4">
        <Col md={6}>
          <Card className="h-100 shadow-sm border-light bg-primary-subtle card-with-bg card-projects rounded-5">
            <Card.Body>
              <Card.Title className="fs-4 fw-bold">
                Internal Projects
              </Card.Title>
              <Card.Text className="fw-light">
                Falcorpians contribute to their practices positively.
              </Card.Text>
              <Link
                to="/upload-timesheet"
                className="btn btn-primary pt-3 pb-3 px-4 rounded-5"
                id="btn-pearls"
              >
                Participate
              </Link>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="h-100 shadow-sm border-light bg-primary-subtle card-with-bg card-rewards rounded-5">
            <Card.Body>
              <Card.Title className="fs-4 fw-bold">Falcorp Rewards!</Card.Title>
              <Card.Text className="fw-light">
                View your training progress and earn rewards!
              </Card.Text>
              <Link
                to="/rewards"
                className="btn btn-primary pt-3 pb-3 px-4 rounded-5"
                id="btn-pearls"
              >
                View Rewards
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Cards;
