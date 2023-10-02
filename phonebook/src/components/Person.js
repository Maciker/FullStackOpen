import {Button, ListItem, Stack} from "@chakra-ui/react";
import { DeleteIcon } from '@chakra-ui/icons'

const Person = ({person, deletePerson}) => {
    return (
        <Stack>
            <ListItem>{person.name + ' --- ' +person.number}</ListItem>
            <Button colorScheme="red" onClick={deletePerson}><DeleteIcon /></Button>
        </Stack>
    )
}

export default Person