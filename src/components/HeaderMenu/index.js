import { 
    MenuStyled,
    NavLink,
} from './styles';

export default function HeaderMenu() {
    return (
        <MenuStyled>
            <NavLink to="#">Itens 1</NavLink>
            <NavLink to="#">Itens 2</NavLink>
            <NavLink to="#">Itens 3</NavLink>
            <NavLink to="#">Itens 4</NavLink>
            <NavLink to="#">Itens 5</NavLink>
            <NavLink to="#">Itens 6</NavLink>
            <NavLink to="#">Itens 7</NavLink>
        </MenuStyled>
    )
}