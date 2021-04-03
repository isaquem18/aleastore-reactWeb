import styled from 'styled-components';

export const HeaderStyled = styled.header`
    width: 100%;
`;

export const HeaderTopBox = styled.div`
    h1 {
        color: #fff;
        font-size: 40px;
    }

    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;
`;

export const HeaderBottomBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const SearchBox = styled.div`
    display: flex;
    width: 45%;
    height: 42px;
`;

export const SearchInput = styled.div`
    display: flex;
    align-items: center;
    border: 2px solid #fff;
    border-radius: 4px;
    font-size: 16px;
    width: 100%;

    img {
        width: 20px;
        fill: #fff;
        stroke: #fff;
        margin: 0 8px;
    }
    
    input {
        background-color: transparent;
        border: none;
        padding: 6px 8px;
        color: #fff;
        width: 100%;
        height: 100%;
    }

`;

export const LoginButton = styled.button`
    background-color: transparent;
    color: #fff;
    border: 2px solid #fff;
    border-radius: 4px;
    min-width: 100px;
    font-weight: bolder;
    margin: 0 10px;
    

`;

export const CartProducts = styled.button`
    background-color: #fff;
    color: #660000;
    border: 2px solid #fff;
    border-radius: 4px;
    min-width: 100px;
    font-weight: bolder;

`;

export const BorderLine = styled.div`
    width: 100%;
    height: 1px;
    background-color: #ffffff90;
`;