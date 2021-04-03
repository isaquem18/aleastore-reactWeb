import { useEffect, useState } from 'react';
 
import {
    Container,
    Title,
    Product,
    Grid,
} from './styles';

export default function SelectedSection({ propSection }) {
    const [list, setList] = useState([]);

    useEffect(() => {
        
        (async () => {
            const f1 = fetch('https://jsonplaceholder.typicode.com/photos');
            const [p1] = await Promise.all([f1]);
            const json1 = await p1.json();
            setList(json1);
        })();
        
    }, []);

    return (
        <Container>
            <Title>{propSection}</Title>
            <Grid>
                {list.map((item, index) => (
                    <Product>{propSection} {item.title.split(' ')[0]}</Product>
                ))}
            </Grid>
        </Container>
    )
}