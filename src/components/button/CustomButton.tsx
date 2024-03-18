import styled from "styled-components";
import {ButtonSizeType} from "./style";

interface MyButtonProps {
    label: string;
    size:  'small' | 'medium' | 'large';
    color: string;
    variant: 'default' | 'outline' | 'link';
    disabled: boolean;
    onClick: () => void;
}

const CustomButton = ({label, size, color, variant, disabled, onClick}: MyButtonProps) => {
    const sizeStyle = ButtonSizeType[size];

    return (
        <ButtonContainer color={color} size={sizeStyle} variant={variant} disabled={disabled} onClick={disabled ? undefined : onClick} >
            {label}
        </ButtonContainer>
    )
}

const setBackgroundStyle = (variant: string, color: string) => {
    switch (variant) {
        case 'default':
            return color;
        default:
            return 'none';
    }
}

const setBorderStyle = (variant: string, color: string) => {
    switch (variant) {
        case 'outline':
            return `0.125rem solid ${color}`;
        default:
            return 'none';
    }
}

const setTextStyle = (variant: string) => {
    switch (variant) {
        case 'link':
            return 'underline';
        default:
            return null;
    }
}

const setColorStyle = (variant: string, color: string) => {
    switch (variant) {
        case 'link':
            return color;
        case 'outline':
            return color;
        default:
            return 'white';
    }
}

const setCursorStyle = (disabled: boolean) => {
    switch (disabled) {
        case true:
            return 'not-allowed';
        default:
            return 'pointer';
    }
}

type ButtonContainerStyleProps = {
    color?: any | null;
    size?: any | null;
    variant: any;
    disabled: boolean;
}

const ButtonContainer = styled.div<ButtonContainerStyleProps>`
    ${(props) => props.size};
    
    color: ${(props) => setColorStyle(props.variant, props.color)};
    background: ${(props) => setBackgroundStyle(props.variant, props.color)};
    border: ${(props) => setBorderStyle(props.variant, props.color)};
    text-decoration: ${(props) => setTextStyle(props.variant)};
    cursor: ${(props) => setCursorStyle(props.disabled)};
    
    font-weight: 600;
    display: inline-block;
`;

export default CustomButton;
