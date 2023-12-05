/** @format */

import { Box, Container, HStack, Heading } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Box as="navbar" position={"fixed"} w={"100vw"} top={0} py={"43px"}>
      <Container maxW={"container.xl"} bg={"black"}>
        <HStack alignItems={"center"}>
          <Box pos={"relative"}>
            <Heading color={"white"}>BlogRise</Heading>
          </Box>
        </HStack>
      </Container>
    </Box>
  );
}
