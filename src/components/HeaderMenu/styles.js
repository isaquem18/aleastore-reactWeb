import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MenuStyled = styled.nav`
    display: flex;
    padding: 16px 0;

`;

export const NavLink = styled(Link)`
    margin-right: 40px;
    font-size: 16px;
    color: #fff;
    font-weight: bolder;
    text-decoration: none;
    letter-spacing: 0.8px;
`;