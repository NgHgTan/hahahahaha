import { Box, BoxProps } from "@chakra-ui/react";

export const Container = ({ children, ...props }: BoxProps) => (
  <Box
    w="full"
    maxW={["100%", "100%", "700px", "800px", "1000px", "1000px", "1440px"]}
    px={{ base: 4, md: 0 }}
    {...props}
  >
    {children}
  </Box>
);
