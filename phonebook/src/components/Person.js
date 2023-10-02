import {Button, ListItem, Stack} from "@chakra-ui/react";

const Person = ({person, deletePerson}) => {
    return (
        <Stack>
            <ListItem>{person.name + ' --- ' +person.number}</ListItem>
            <Button colorScheme="red" onClick={deletePerson}>DELETE</Button>
        </Stack>
    )
}

export default Person