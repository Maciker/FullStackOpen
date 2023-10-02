import {Button, Input, Stack} from "@chakra-ui/react";

const PhoneForm = ({addPerson, newPerson, handlePersonChange}) => {

    return (

        <form onSubmit={addPerson}>
            <Stack>
                name: <Input value={newPerson.name} onChange={handlePersonChange} name='name'/>
                number: <Input value={newPerson.number} onChange={handlePersonChange} name='number'/>
                <Button type='submit'>
                    ADD
                </Button>
            </Stack>
        </form>
    )
}

export default PhoneForm

