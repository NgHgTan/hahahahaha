import {
  Button,
  Center,
  color,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { Container } from "./Container";
import NavBar from "../nav/NavBar";

export type HeaderProps = {};

export function Header(props: HeaderProps) {
  const [scrollY, setScrollY] = React.useState(0);

  const handleScroll = React.useCallback(() => {
    setScrollY(window.scrollY);
  }, []);

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const buttonLabel = "Get Product";
  return (
    <Center
      w="full"
      backgroundColor={scrollY > 0 ? "rgba(255, 255, 255, 0.985)" : "white"}
      top="0"
      as="header"
      position="sticky"
      boxShadow={scrollY > 0 ? "sm" : "none"}
      zIndex="banner"
      height={{ base: "73px", md: "60px" }}
    >
      <Container>
        <NavBar
          logo={
            <Image
              src="https://www.presight.io/images/PresightLogoBlack.svg"
              width={116}
            />
          }
          links={[
            {
              label: "Page 1",
              href: "/page1",
              items: [],
            },
            {
              label: "Page 2",
              href: "/page2",
              items: [],
            },
            { label: "Page 1", href: "page1" },
            { label: "Page 2", href: "page2" },
          ]}
          rightLinks={
            <Button
              fontSize={{ base: "sm", md: "sm" }}
              fontWeight="400"
              colorScheme="blue"
              //   disabled={!subscribeEnabled}
              //   onClick={openSubscribeDialog}
            >
              {buttonLabel}
            </Button>
          }
        />
      </Container>
    </Center>
  );
}
