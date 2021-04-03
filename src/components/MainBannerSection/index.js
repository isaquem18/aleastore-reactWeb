//import HeaderMenu from '../HeaderMenu';
//import Limits from '../WidthLimits';
//import SearchIcon from '../../assets/images/search.svg';
import chair from '../../assets/images/chair.png';

import {
    SectionContainerStyled,
    BannerAlert,
} from './styles';

export default function MainBannerSection() {
    return (
        <SectionContainerStyled>

            <hgroup>
                <BannerAlert>Cooooorre que e so hoje!</BannerAlert>
                <h2>A maior oferta de pascoa do mundo</h2>
                <h3>Varias ofertas com ate 50% de desconto</h3>
            </hgroup>
            <img src={chair} />
        </SectionContainerStyled>
    )
}