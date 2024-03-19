import styled from "styled-components";

export interface ButtonProps {
    size: "sm" | "md" | "lg";
    variant: "solid" | "outline" | "dotted";
    color: string;
    cursor: "pointer" | "wait" | "not-allowed"
}

const getSize = (size: ButtonProps['size']) => {
    switch (size) {
        case "sm":
            return "15px";
        case "md":
            return "25px";
        case "lg":
            return "35px";
        default:
            return null;
    }
};

const getPadding = (size: ButtonProps['size']) => {
    switch (size) {
        case "sm":
            return "10px 15px";
        case "md":
            return "20px 25px";
        case "lg":
            return "40px 45px";
        default:
            return null;
    }
};

const getBorder = (variant: ButtonProps['variant']) => {
    switch(variant){
        case "solid":
            return "none"
        case "outline":
            return "1px solid gray"
        case "dotted":
            return "5px dotted gray"
        default: 
            return null
    }
}

const getCursor = (cursor: ButtonProps['cursor']) => {
    switch(cursor){
        case "pointer":
            return "pointer"
        case "wait":
            return "wait"
        case "not-allowed":
            return "not-allowed"
        default:
            return null
    }
}

export const Button = styled.button<ButtonProps>`
    color: white;
    font-size: ${({ size }) => getSize(size)};
    border-radius: 5px; 
    padding: ${({ size }) => getPadding(size)};
    background-color: ${({ color }) => color};
    border: ${({ variant }) => getBorder(variant)};
    cursor: ${({ cursor }) => getCursor(cursor)};
`