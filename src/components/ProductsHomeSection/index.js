import ProductItems from '../ProductItems';

import { Container, ContainerLimits } from './styles';

export default function ProductsHomeSection({ handleClickSection }) {
    return (
        <Container>
            <ContainerLimits>
                <ProductItems handleClickSection={handleClickSection} />
            </ContainerLimits>
        </Container>
    )
}