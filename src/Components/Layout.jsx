import { Outlet, Link } from "react-router-dom";
import { Nav, Navbar, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

const Layout = () => {
  return (
    <>
        <div className="App">
            <header className="App-header">
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand>
                            <Link to={"/"}
                                className="nav-link">
                                User Data
                            </Link>
                        </Navbar.Brand>
                        <Navbar.Brand>
                            <Link to={"/simple-notes"}
                                className="nav-link">
                                Simple Notes
                            </Link>
                        </Navbar.Brand>
                        <Navbar.Brand>
                            <Link to={"/articles"}
                                className="nav-link">
                                Strapi Articles
                            </Link>
                        </Navbar.Brand>
                    </Container>
                </Navbar>
            </header>
        </div>

      <Outlet />
    </>
  )
};

export default Layout;
