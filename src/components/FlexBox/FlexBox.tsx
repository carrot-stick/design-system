import * as SC from "./FlexBox.styles"
import { FlexBoxProps } from "./Flexbox.types"

const FlexBox:React.FC<FlexBoxProps> = ({
    children,
    justify,
    align,
    ...rest
}) => {

    return(
        <SC.FlexBox
            justify={justify}
            align={align}
            {...rest}
        >{children}</SC.FlexBox>
    )
}

export default FlexBox