import game from '../../assets/images/game.svg';
import chair from '../../assets/images/chair.svg';
import laptop from '../../assets/images/laptop.svg';
import mobile from '../../assets/images/mobile.svg';
import tv from '../../assets/images/tv.svg';
import headphones from '../../assets/images/headphones.svg';

import { ListItems, ProductItem } from './styles';

export default function ProductItems({ handleClickSection }) {
    return (
        <ListItems>
            <h3>o que tem de novo e já conquistou muita gente:</h3>
            <ProductItem onClick={() => handleClickSection('Games')}>
                <img src={game} alt=""/><h4>Games</h4>
            </ProductItem>
            <ProductItem onClick={() => handleClickSection('Cadeiras')}>
                <img src={chair} alt=""/><h4>Cadeiras</h4>
            </ProductItem>
            <ProductItem onClick={() => handleClickSection('Notebooks')}>
                <img src={laptop} alt=""/><h4>Notebooks</h4>
            </ProductItem>
            <ProductItem onClick={() => handleClickSection('Smartphones')}>
                <img src={mobile} alt=""/><h4>Smartphones</h4>
            </ProductItem>
            <ProductItem onClick={() => handleClickSection('Televisores')}>
                <img src={tv} alt=""/><h4>Televisores</h4>
            </ProductItem>
            <ProductItem onClick={() => handleClickSection('Headsets')}>
                <img src={headphones} alt=""/><h4>Headsets</h4>
            </ProductItem>
        </ListItems>
    )
}