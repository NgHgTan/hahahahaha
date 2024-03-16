import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Divider,
  Flex,
  HStack,
  IconButton,  
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { NavLink, NavLinkProps } from "./NavLink";
import { Link } from "react-router-dom";

export type NavBarProps = {
  logo: ReactNode;
  links: any[];
  rightLinks?: ReactNode;
};

export default function NavBar({ logo, links, rightLinks }: NavBarProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box>
        <Flex  alignItems={"center"} justifyContent={"space-between"} width="full" >
          <HStack spacing={8} alignItems={"center"}>
              <Link to='/'>{logo}</Link>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
                    {links.map((link: any, index) => { 
                if (link.href)
                  return (
                    <NavLink key={index} href={link.href}>
                      {link.label}
                
                    </NavLink> 
                  );
                return (
                  <Menu key={index}>
                    <MenuButton fontWeight={500} fontFamily={"heading"}>
                      {link.label}
                    </MenuButton>
                    <MenuList
                      bgColor="#000"
                      borderRadius="8px"
                      border="1px solid #FFF"
                      boxShadow="0px 0px 26px 0px rgba(0, 0, 0, 0.12)"
                    >
                      <HStack alignItems="flex-start" px="30px" py="15px">
                        {link.items.map((item: any, index1: number) => (
                            <VStack key={index1} alignItems="flex-start" px="10px">
                              <Text
                                color="rgba(255, 255, 255, 0.70)"
                                fontSize="14px"
                                fontWeight={500}
                              >
                                {item.section}
                              </Text>
                              <Divider />
                              {item.children.map((c: any, index2: number) => (
                                <MenuItem as="a" key={index2} href={c.href}
                                  px={0}
                                  color="#FFF"
                                  fontSize="14px"
                                  fontWeight={500}
                                  _hover={{
                                    bgColor: "transparent"
                                  }}
                                  _active={{
                                    bgColor: "transparent"
                                  }}
                                  _focus={{
                                    bgColor: "transparent"
                                  }}
                                >
                                  {c.label}
                                </MenuItem>
                              ))}
                            </VStack>
                            ))}
                      </HStack>
                    </MenuList>
                  </Menu>
                );
              })}
            </HStack>
          </HStack>
          <HStack
            spacing={1}
            alignItems={"center"}
            alignContent={"end"}
          >
            <Flex alignItems={"center"}>{rightLinks ? rightLinks : <></>}</Flex>
            <IconButton
              variant="solid"
              // bg="transparent"
              color="black"
              size={"md"}
              bgColor="transparent"
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={"Open Menu"}
              display={{ md: "none" }}
              onClick={isOpen ? onClose : onOpen}
              _active={{
                bgColor: 'transparent'
              }}
              _focus={{
                bgColor: 'transparent'
              }}
              _hover={{
                bgColor: 'transparent'
              }}
            />
          </HStack>
        </Flex>

        {isOpen ? (
          <Box
            w="100%"
            bg="white"
            position={"absolute"}
            boxShadow={"2xl"}
            left={0}
            display={{ md: "none" }}
          >
            <Stack as={"nav"} spacing={4}>
            {links.map((link: any, index) => {
                if (link.href)
                  return (
                  <NavLink key={index} href={link.href}>
                    {link.label}
                  </NavLink>
                  )
                    return (
                      <Menu key={index}>
                        <MenuButton fontWeight={500} fontFamily={"heading"} textAlign="left" px="8px" py="4px">
                          {link.label}
                        </MenuButton>
                        <MenuList bgColor="#000" borderRadius="8px" border="1px solid #FFF" boxShadow="0px 0px 26px 0px rgba(0, 0, 0, 0.12)">
                          <HStack alignItems="flex-start" px="30px" py="15px">
                            {link.items.map((item: any, index1: number) => (
                            <VStack key={index1} alignItems="flex-start" px="10px">
                              <Text
                                color="rgba(255, 255, 255, 0.70)"
                                fontSize="14px"
                                fontWeight={500}
                              >
                                {item.section}
                              </Text>
                              <Divider />
                              {item.children.map((c: any, index2: number) => (
                                <MenuItem as="a" key={index2} href={c.href}
                                  px={0}
                                  color="#FFF"
                                  fontSize="14px"
                                  fontWeight={500}
                                  _hover={{
                                    bgColor: "transparent"
                                  }}
                                  _active={{
                                    bgColor: "transparent"
                                  }}
                                  _focus={{
                                    bgColor: "transparent"
                                  }}
                                >
                                  {c.label}
                                </MenuItem>
                              ))}
                            </VStack>
                            ))}
                          </HStack>
                        </MenuList>
                      </Menu>
                    )
              })}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
