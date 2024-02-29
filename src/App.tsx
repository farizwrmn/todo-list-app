import { Box, Heading, Stack } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Card, CardBody } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Checkbox } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import TodoItem from ".";

function App() {
  const checked = function () {
    let element = document.getElementById("list");
    element?.classList.remove("unchecked");
    element?.classList.add("checked");
  };
  return (
    <>
      <Box bg="black" color="white" textAlign="justify">
        <Heading
          as="h1"
          size="2xl"
          noOfLines={2}
          padding="20px"
          paddingLeft="490px"
          paddingBottom="40px"
        >
          Chores ToDo List
        </Heading>
        <ul>
          <li className="unchecked" id="list" onClick={checked}>
            <Checkbox
              colorScheme="green"
              padding="15px"
              borderColor="green"
              paddingLeft="460px"
            >
              Create Guest Experience
            </Checkbox>
            <IconButton
              aria-label="Delete List"
              colorScheme="red"
              size="sm"
              marginTop="12px"
              marginLeft="180px"
              icon={<DeleteIcon w={4} h={4} />}
            />
          </li>
          <TodoItem />
        </ul>
        <br />
      </Box>
      <Card bg="black" marginTop="-10px">
        <CardBody>
          <Text textAlign="center" textColor="white" marginTop="20px">
            <em>DONE : 0</em>
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
            />
          </Stack>
          <Button
            colorScheme="green"
            size="md"
            marginLeft="850px"
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
