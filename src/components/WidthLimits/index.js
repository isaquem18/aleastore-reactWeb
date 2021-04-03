import { Limits } from './styles';

export default function WidthLimits({children, border}) {

    console.log(children)
    return (
        <Limits>
            {children}
        </Limits>
    )
}