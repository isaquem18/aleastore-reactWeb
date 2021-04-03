import styled from 'styled-components';

export const ListItems = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    min-height: 180px;
    padding-top: 50px;
    position: relative;

    h3 {
        position: absolute;
        top: 10px;
    }
`;

export const ProductItem = styled.div`
    width: 15%;
    border: 2px solid #00000010;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 70%;
    min-height: 130px;
    cursor: pointer;
    margin: 0 5px;

    img {
        height: 40px;
        margin: 20px 0;
    }

    h4 {
        margin: 20px 0;
    }
`;