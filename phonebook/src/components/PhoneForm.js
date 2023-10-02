import {Button, Input, Stack} from "@chakra-ui/react";
import { AddIcon } from '@chakra-ui/icons'

const PhoneForm = ({addPerson, newPerson, handlePersonChange}) => {

    return (

        <form onSubmit={addPerson}>
            <Stack>
                name: <Input value={newPerson.name} onChange={handlePersonChange} name='name'/>
                number: <Input value={newPerson.number} onChange={handlePersonChange} name='number'/>
                <Button colorScheme="purple" type='submit'>
                    <AddIcon />
                </Button>
            </Stack>
        </form>
    )
}

export default PhoneForm

