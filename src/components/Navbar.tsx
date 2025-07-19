import React, { useState, useRef, useEffect } from "react";
import {
  Container,
  Nav,
  Navbar,
  Dropdown,
  Image,
  Modal,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

import logo from "../assets/flowdexd_logo.svg";
import profilePic2 from "../assets/ipad_small_2x_DSC_0005.jpg";

const person = {
  name: "Sithembiso",
  surname: "Mahlangu",
  roles: ["Sithembiso", "Front End Developer", "Digital Designer", "Animator"],
};

const Navigation: React.FC = () => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const dropdownMenuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) =>
        prevIndex === person.roles.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const welcomeMsg = `Welcome, ${person.roles[currentRoleIndex]}`;

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;
      if (
        dropdownMenuRef.current &&
        !dropdownMenuRef.current.contains(target) &&
        triggerRef.current &&
        !triggerRef.current.contains(target)
      ) {
        setShowProfileMenu(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <Navbar bg="black" expand="lg" className="fixed-top shadow-sm py-2">
        <Container>
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
            <img
              src={logo}
              alt="Flowdexd Logo"
              height="30"
              className="d-inline-block align-top"
            />
            <span className="ms-5 text-white fs-5">{welcomeMsg}</span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="main-navbar-nav" />
          <Navbar.Collapse id="main-navbar-nav">
            <Nav className="ms-auto column-gap-4 py-2">
              {[
                {
                  icon: "https://cdn.lordicon.com/ahxaipjb.json",
                  title: "Notifications",
                },
                {
                  icon: "https://cdn.lordicon.com/uoljexdg.json",
                  title: "View Week",
                },
              ].map((item, idx) => (
                <div key={idx} className="d-flex align-items-center">
                  <lord-icon
                    src={item.icon}
                    trigger="hover"
                    colors="primary:#fff"
                    style={{ width: "24px", height: "24px" }}
                    title={item.title}
                  ></lord-icon>
                </div>
              ))}

              <div ref={triggerRef}>
                <Dropdown show={showProfileMenu}>
                  <Dropdown.Toggle
                    as="div"
                    id="profile-dropdown"
                    className="d-flex align-items-center"
                    style={{ cursor: "pointer" }}
                    onClick={() => setShowProfileMenu(!showProfileMenu)}
                    role="button"
                  >
                    <Image
                      src={profilePic2}
                      alt="Profile"
                      roundedCircle
                      width="40"
                      height="40"
                      className="border border-primary border-3"
                    />
                    <i className="bi bi-chevron-down text-white ms-2"></i>
                  </Dropdown.Toggle>

                  <CSSTransition
                    in={showProfileMenu}
                    timeout={300}
                    classNames="fade-menu"
                    unmountOnExit
                    nodeRef={dropdownMenuRef}
                  >
                    <Dropdown.Menu
                      ref={dropdownMenuRef}
                      align="end"
                      className="shadow-sm custom-dropdown-menu mt-2"
                    >
                      <Dropdown.Item
                        as={Link}
                        to="/profile-details"
                        className="fw-bold fs-4 text-start text-wrap"
                        onClick={() => setShowProfileMenu(false)}
                      >
                        <div className="d-flex align-items-center">
                          <Image
                            src={profilePic2}
                            alt="Profile"
                            roundedCircle
                            width="70"
                            height="70"
                            className="me-3 ms-3"
                          />
                          <span
                            className="avi-edit d-flex align-items-center justify-content-center rounded-circle shadow-sm position-fixed bg-white"
                            style={{ width: "30px", height: "30px" }}
                          >
                            <i
                              className="bi bi-pencil-fill avi-pencil"
                              style={{ fontSize: "0.80rem" }}
                            ></i>
                          </span>
                          <span>Sithembiso Stevens Mahlangu</span>
                        </div>
                      </Dropdown.Item>

                      <Dropdown.Item
                        as={Link}
                        to="/email"
                        className="border-bottom"
                        onClick={() => setShowProfileMenu(false)}
                      >
                        <p className="text-decoration-underline mb-2">
                          <span>sithembiso@falcorp.co.za</span>
                        </p>
                      </Dropdown.Item>

                      <Dropdown.Item
                        as={Link}
                        to="/profile"
                        onClick={() => setShowProfileMenu(false)}
                      >
                        <i className="bi bi-person me-2"></i> View Profile
                      </Dropdown.Item>

                      <Dropdown.Item
                        as={Link}
                        to="/settings"
                        onClick={() => setShowProfileMenu(false)}
                      >
                        <i className="bi bi-gear me-2"></i> Settings
                      </Dropdown.Item>

                      <Dropdown.Item
                        as="button"
                        onClick={() => {
                          setShowProfileMenu(false);
                          setShowLogoutModal(true);
                        }}
                        className="text-danger"
                      >
                        <i className="bi bi-box-arrow-in-right me-2"></i> Log out
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </CSSTransition>
                </Dropdown>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal
        show={showLogoutModal}
        onHide={() => setShowLogoutModal(false)}
        centered
      >
        <Modal.Header closeButton className="border-0"></Modal.Header>
        <Modal.Body className="d-flex flex-column pb-2">
          <i className="bi bi-question-circle display-1 text-primary text-center pb-3"></i>
          <p className="text-center fs-5 pt-2 pb-2">
            Are you sure you want to log out?
          </p>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center border-0 pb-4 gap-3">
          <button
            className="btn btn-outline-dark rounded-pill px-4"
            onClick={() => setShowLogoutModal(false)}
          >
            Cancel
          </button>
          <Link
            to="https://www.google.com"
            className="btn btn-primary rounded-pill px-4 text-white"
          >
            Yes, Log out
          </Link>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Navigation;
