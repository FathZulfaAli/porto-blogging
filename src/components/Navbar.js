/** @format */

import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Heading,
  Spacer,
} from "@chakra-ui/react";
import Link from "next/link";

export default function Navbar() {
  return (
    <Box position={"sticky"} w={"100%"}>
      <Container>
        <HStack>
          <Heading>BlogRise</Heading>
          <Spacer />
          <Flex gap={"5px"}>
            <Link href={"/"}>Home</Link>
            <Link href={"/about"}>About Us</Link>
            <Link href={"/archive"}>Archive</Link>
            <Link href={"/contact"}>Contact Us</Link>
          </Flex>
        </HStack>
      </Container>
    </Box>
  );
}
