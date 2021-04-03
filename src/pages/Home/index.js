import Header from '../../components/Header';
import { useState } from 'react';
import MainBannerSection from '../../components/MainBannerSection';
import ProductsHomeSection from '../../components/ProductsHomeSection';
import SelectedSection from '../../components/SelectedSection';

import {
    Container,
    TopSectionContainer,
} from './styles';

export default function Home() {
    const [ section, setSection ] = useState('Games');

    function handleClickSection(e) {
        console.log('aaaaaaaaaa');
        setSection(e);
    }

    return (
        <Container>
            <TopSectionContainer>
                <Header />
                <MainBannerSection />
                <ProductsHomeSection handleClickSection={handleClickSection} />
            </TopSectionContainer>
            <SelectedSection propSection={section} />
        </Container>
    )
}