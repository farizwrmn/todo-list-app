import * as React from "react";
import { Checkbox } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import "./index.css";

class TodoItem extends React.Component {
  render() {
    return (
      <li className="unchecked" id="list">
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
    );
  }
}

export default TodoItem;
