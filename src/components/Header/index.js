import HeaderMenu from '../HeaderMenu';
import Limits from '../WidthLimits';
import SearchIcon from '../../assets/images/search.svg';

import {
    HeaderStyled,
    HeaderTopBox,
    HeaderBottomBox,
    SearchBox,
    SearchInput,
    LoginButton,
    CartProducts,
    BorderLine,
} from './styles';

export default function Header() {
    return (
        <HeaderStyled>
                <Limits>
                    <HeaderTopBox>
                        <h1>Aleastore</h1>
                        <SearchBox>
                            <SearchInput>
                                <img src={SearchIcon} alt="search icon" />
                                <input type="text" placeholder="O que voce esta procurando ?"/>
                            </SearchInput>
                            <LoginButton>Fazer login</LoginButton>
                            <CartProducts>Carrinho</CartProducts>
                        </SearchBox>
                    </HeaderTopBox>
                </Limits>
            <BorderLine />
            <Limits>
                <HeaderBottomBox>
                    <HeaderMenu />
                </HeaderBottomBox>
            </Limits>
            <BorderLine />
        </HeaderStyled>
    )
}