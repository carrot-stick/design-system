import { Stack, Box, Button } from "@chakra-ui/react";

interface ButtonProps {
  size?: "xs" | "sm" | "md" | "lg";
  variant?: "solid" | "outline" | "ghost" | "link";
  colorScheme?: string;
  label: string;
}

export const CommonButton = ({ label, size, variant, colorScheme }: ButtonProps) => {
  return (
    <Stack direction="row">
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        width="100%"
      >
        <Button size={size} variant={variant} colorScheme={colorScheme}>
          {label}
        </Button>
      </Box>
    </Stack>
  );
};
