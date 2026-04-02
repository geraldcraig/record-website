import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import OldHeader from "./OldHeader";
import {NavLink, Outlet} from "react-router";

function Layout() {
    return (
        <Container>
            <Row>
                <OldHeader/>
            </Row>
            <Row>
                <nav>
                    <table>
                        <thead>
                        <tr>
                            <th><NavLink to="/record" style={{ color: 'blue', textAlign: 'center'}}>Record</NavLink></th>
                        </tr>
                        </thead>
                    </table>
                </nav>
            </Row>
        </Container>
    );
}

export default Layout;