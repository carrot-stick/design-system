export interface InputRowProps {
    size: "sm" | "md" | "lg"
}

export interface InputBoxProps extends InputRowProps{
    onSubmit: (event: React.FormEvent<HTMLInputElement>) => void;
    disabled: boolean
}