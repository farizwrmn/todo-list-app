import { Box, Heading, Stack } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Card, CardBody } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Checkbox } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

function App() {
  return (
    <>
      <Box bg="black" color="white" textAlign="justify">
        <Heading
          as="h1"
          size="2xl"
          noOfLines={2}
          padding="20px"
          paddingBottom="40px"
          textAlign="center"
        >
          Chores ToDo List
        </Heading>
        <ul id="box">
          <li className="unchecked" id="list">
            <Checkbox
              colorScheme="green"
              padding="15px"
              borderColor="green"
              paddingLeft="460px"
              id="box"
            >
              Create Guest Experience mobile check-in
            </Checkbox>
            <IconButton
              aria-label="Delete List"
              colorScheme="red"
              size="sm"
              marginTop="12px"
              marginLeft="140px"
              icon={<DeleteIcon w={4} h={4} />}
              id="close"
            />
          </li>
          <li className="unchecked" id="list">
            <Checkbox
              colorScheme="green"
              padding="15px"
              borderColor="green"
              paddingLeft="460px"
              id="box"
            >
              Document current CI/CD process
            </Checkbox>
            <IconButton
              aria-label="Delete List"
              colorScheme="red"
              size="sm"
              marginTop="12px"
              marginLeft="200px"
              icon={<DeleteIcon w={4} h={4} />}
              id="close"
            />
          </li>
          <li className="unchecked" id="list">
            <Checkbox
              colorScheme="green"
              padding="15px"
              borderColor="green"
              paddingLeft="460px"
              id="box"
            >
              Perform Code Review for Final Pillow-Talk release
            </Checkbox>
            <IconButton
              aria-label="Delete List"
              colorScheme="red"
              size="sm"
              marginTop="12px"
              marginLeft="83px"
              icon={<DeleteIcon w={4} h={4} />}
              id="close"
            />
          </li>
          <li className="unchecked" id="list">
            <Checkbox
              colorScheme="green"
              padding="15px"
              borderColor="green"
              paddingLeft="460px"
              id="box"
            >
              Implement new Color Palette from Design Team
            </Checkbox>
            <IconButton
              aria-label="Delete List"
              colorScheme="red"
              size="sm"
              marginTop="12px"
              marginLeft="97px"
              icon={<DeleteIcon w={4} h={4} />}
              id="close"
            />
          </li>
          <li className="unchecked" id="list">
            <Checkbox
              colorScheme="green"
              padding="15px"
              borderColor="green"
              paddingLeft="460px"
              id="box"
            >
              Fix image uploading process for guest check-in
            </Checkbox>
            <IconButton
              aria-label="Delete List"
              colorScheme="red"
              size="sm"
              marginTop="12px"
              marginLeft="99px"
              icon={<DeleteIcon w={4} h={4} />}
              id="close"
            />
          </li>
          <li className="unchecked" id="list">
            <Checkbox
              colorScheme="green"
              padding="15px"
              borderColor="green"
              paddingLeft="460px"
              id="box"
            >
              Provide on-boarding documentation
            </Checkbox>
            <IconButton
              aria-label="Delete List"
              colorScheme="red"
              size="sm"
              marginTop="12px"
              marginLeft="180px"
              icon={<DeleteIcon w={4} h={4} />}
              id="close"
            />
          </li>
        </ul>
        <br />
      </Box>
      <Card bg="black" marginTop="-10px">
        <CardBody>
          <Text textAlign="center" textColor="white" marginTop="20px">
            <Text fontSize="20px">DONE : 0</Text>
          </Text>
        </CardBody>
        <CardBody>
          <Text marginLeft="340px" textColor="white" padding="20px">
            Add To Do :
          </Text>
          <Stack>
            <Input
              htmlSize={2}
              width="50%"
              color="white"
              placeholder="Write here..."
              padding="50px"
              marginLeft="340px"
              id="form"
              required
            />
          </Stack>
          <Button
            colorScheme="green"
            size="md"
            marginLeft="920px"
            marginTop="10px"
            id="input"
          >
            Add Task
          </Button>
        </CardBody>
      </Card>
    </>
  );
}

export default App;
