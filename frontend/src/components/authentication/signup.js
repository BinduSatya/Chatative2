import {
  VStack,
  FormControl,
  InputGroup,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import { FormLabel, FormErrorMessage, FormHelperText } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { useState } from "react";

const Signup = () => {
  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [confirmpass, setconfirmpass] = useState();
  const [show, setShow] = useState(false);
  const [Cshow, setCShow] = useState(false);
  const [password, setpassword] = useState();
  const [pic, setpic] = useState();
  const isError = email === "";
  const handleClick = () => setShow(!show);
  const chandleClick = () => setCShow(!Cshow);

  const postDetails = (pics) => {};
  const submitHandler = () => {};
  return (
    <VStack spacing={"1px"}>
      <FormControl id="name" isRequired>
        <FormLabel>Name</FormLabel>
        <Input placeholder="Name" onChange={(e) => setname(e.target.value)} />
      </FormControl>
      <FormControl id="email" isInvalid={isError} isRequired>
        <FormLabel>Email</FormLabel>
        <Input type="email" onChange={(e) => setname(e.target.value)} />
        {!isError ? (
          <FormHelperText> </FormHelperText>
        ) : (
          <FormErrorMessage>Email is required.</FormErrorMessage>
        )}
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={show ? "text" : "password"}
            placeholder="Enter password"
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <FormControl id="confirm-password" isRequired>
        <FormLabel>Confirm Password</FormLabel>
        <InputGroup size="md">
          <Input
            pr=".5rem"
            type={show ? "text" : "password"}
            placeholder="Enter password"
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={chandleClick}>
              {Cshow ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <FormControl id="pic" isRequired>
        <FormLabel>Upload your Picture</FormLabel>
        <Input
          type="file"
          p={"1.5"}
          accept="image/*"
          placeholder="Name"
          onChange={(e) => postDetails(e.target.files[0])}
        />
      </FormControl>
      <Button colorScheme="teal" mt="6%" size="lg" onClick={submitHandler}>
        Button
      </Button>
    </VStack>
  );
};

export default Signup;
