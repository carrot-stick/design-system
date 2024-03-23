export interface SelectBoxProps {
    visible: "sm" | "md" | "lg"
    size: number
    multiple: boolean
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    disabled: boolean
}