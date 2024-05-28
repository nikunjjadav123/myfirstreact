import { Outlet, Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';

function Layout() {
   return (
      <>
         <Nav
            variant="pills" 
            activeKey="/"
            onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
         >
            <Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link href="/greet">Greet</Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link href="/unknown">404 Not Found</Nav.Link>
            </Nav.Item>
           
         </Nav>
         <Outlet />
      </>
   )
}
export default Layout;