export interface FlexBoxProps {
    justify: "initial"| "center" | "flex-start" | "flex-end"| "space-between"| "space-around"| "inherit" 
    align: "initial"| "center"| "flex-start"| "flex-end"| "baseline"| "stretch"| "inherit" 
    direction: "row"| "row-reverse"| "column"| "column-reverse"
    wrap: "nowrap"| "wrap"| "wrap-reverse"
    gap: number
    children?: React.ReactElement
}
