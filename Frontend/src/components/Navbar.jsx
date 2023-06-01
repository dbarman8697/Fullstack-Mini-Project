import { ReactNode } from "react";

import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Wrap,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Logout } from "../redux/auth.actions";

export default function Navbar() {
  const { auth, token, role, username: user } = useSelector((state) => state);
  const dispatch = useDispatch();

  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <NavLink to={"/"}>HomePage</NavLink>
          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <NavLink to={"/login"}>{!auth && "Login"}</NavLink>
              <NavLink to={"/signup"}>{!auth && "Signup"}</NavLink>
              <Button
                display={auth ? "block" : "none"}
                onClick={() => {
                  dispatch(Logout());
                }}
              >
                Logout
              </Button>
              <Wrap display={role=="admin"?"block":"none"}>
              <NavLink  to="/admin">Admin</NavLink>
              </Wrap>
              
              <NavLink to={"/about"}>About</NavLink>

              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
