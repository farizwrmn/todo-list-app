import { Box, Heading, Stack } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Checkbox } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import { Card, CardBody } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

function App() {
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
        <br />
        <Checkbox
          colorScheme="green"
          padding="15px"
          borderColor="green"
          paddingLeft="460px"
        >
          Document current CI/CD process
        </Checkbox>
        <IconButton
          aria-label="Delete List"
          colorScheme="red"
          size="sm"
          marginTop="12px"
          marginLeft="120px"
          icon={<DeleteIcon w={4} h={4} />}
        />
        <br />
        <Checkbox
          colorScheme="green"
          padding="15px"
          borderColor="green"
          paddingLeft="460px"
        >
          Perform Code Review for Final Pillow-Talk release
        </Checkbox>
        <IconButton
          aria-label="Delete List"
          colorScheme="red"
          size="sm"
          marginTop="12px"
          marginLeft="2px"
          icon={<DeleteIcon w={4} h={4} />}
        />
        <br />
        <Checkbox
          colorScheme="green"
          padding="15px"
          borderColor="green"
          paddingLeft="460px"
        >
          Implement new Color Palette from Design Team
        </Checkbox>
        <IconButton
          aria-label="Delete List"
          colorScheme="red"
          size="sm"
          marginTop="12px"
          marginLeft="15px"
          icon={<DeleteIcon w={4} h={4} />}
        />
        <br />
        <Checkbox
          colorScheme="green"
          padding="15px"
          borderColor="green"
          paddingLeft="460px"
        >
          Fix image uploading process for guest check-in
        </Checkbox>
        <IconButton
          aria-label="Delete List"
          colorScheme="red"
          size="sm"
          marginTop="12px"
          marginLeft="16px"
          icon={<DeleteIcon w={4} h={4} />}
        />
        <br />
        <Checkbox
          colorScheme="green"
          padding="15px"
          borderColor="green"
          paddingLeft="460px"
        >
          Provide on-boarding documentation
        </Checkbox>
        <IconButton
          aria-label="Delete List"
          colorScheme="red"
          size="sm"
          marginTop="12px"
          marginLeft="97px"
          icon={<DeleteIcon w={4} h={4} />}
        />
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
            />
          </Stack>
          <Button
            colorScheme="green"
            size="md"
            marginLeft="850px"
            marginTop="10px"
          >
            Add Task
          </Button>
        </CardBody>
      </Card>
    </>
  );
}

export default App;
