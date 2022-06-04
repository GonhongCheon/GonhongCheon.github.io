import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Navigation = styled.nav``;
const NavItem = styled.li`
    display: inline-block;
    margin: 0 10px;

    a {
        color: #000;
        text-decoration: none;
    }
`;

const Menu = () => {
    return (
        <Navigation>
            <NavItem>
                <Link to="/">Home</Link>
            </NavItem>
            <NavItem>
                <Link to="/resume">Resume</Link>
            </NavItem>
            <NavItem>
                <Link to="/contact">Contact</Link>
            </NavItem>
            <NavItem className="float-right">
                <a href="https://github.com/gonhongcheon" target="_blank" rel="noreferrer">
                    Github
                </a>
            </NavItem>
        </Navigation>
    );
};

export default Menu;
