import React from "react";
import {
  Box,
  Text,
  Tabs,
  Tab,
  TabIndicator,
  TabPanels,
  TabPanel,
  TabList,
  Container,
} from "@chakra-ui/react";
import Login from "../components/authentication/login";
import Signup from "../components/authentication/signup";

const HomePage = () => {
  return (
    <Container
      fontFamily={"Work Sans"}
      w={"100vw"}
      h={"100vh"}
      backgroundColor={"#353"}
      centerContent
    >
      <Box
        maxW={"xl"}
        d="flex"
        m={"4"}
        p={"3"}
        justifyContent="center"
        backgroundColor={"#273"}
      >
        <Text fontSize={"2xl"} fontFamily={"Work Sans"} color={"white"}>
          Hello Chatative
        </Text>
      </Box>
      <Box backgroundColor={"#ff3"} p={"4"} borderRadius={"lg"} w={"100%"}>
        <Tabs position="relative" variant="soft-rounded" color={"blue"}>
          <TabList mb="10px">
            <Tab>Login</Tab>
            <Tab>Sign Up</Tab>
          </TabList>
          <TabIndicator
            mt="-1.5px"
            height="2px"
            bg="skyblue"
            borderRadius="1px"
          />
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default HomePage;
