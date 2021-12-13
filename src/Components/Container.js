
import { Wrapper,Workzone } from "./MicroComponents/Container.styles";


const Container = ({children=<></>, backgroundColor=""}) => {
    return (
        <Wrapper backgroundColor={backgroundColor}>
            <Workzone backgroundColor={backgroundColor}>
                {children}
            </Workzone>
        </Wrapper>
    )
}

export default Container;