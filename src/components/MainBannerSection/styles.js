import styled from 'styled-components';

export const SectionContainerStyled = styled.header`
    width: 96%;
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 1;
    

    img {
        width: 280px;
    }

    h2 {
        color: #fff;
        font-size: 76px;
        padding-right: 10%;
        max-width: 80%;
        margin-bottom: 20px;
     
    }
`;

export const BannerAlert = styled.div`
    transform: translateY(-70px);
    position: relative;
    display: inline-block;
    top: 0;
    color: #fff;
    background-color: #000;
    padding: 10px 30px;
    letter-spacing: 2px;
    border-radius: 6px;

`;