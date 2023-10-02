import { useState, useEffect } from 'react'
import Person from "./components/Person";
import SectionHeader from "./components/SectionHeader";
import PhoneForm from "./components/PhoneForm";
import personsService from "./services/persons"

const App = () => {
    const [persons, setPersons] = useState([])

    useEffect(() => {
        personsService.getAllPersons().then(initialPersons => setPersons(initialPersons))}, [])

    const [newPerson, setNewPerson] = useState({
        id: 999,
        name: '',
        number: 999999999
    })

    const addPerson = (event) => {
        event.preventDefault()
        const addedPerson = {
            id: persons.length + 1,
            name: newPerson.name,
            number: newPerson.number
        }

        personsService.createPerson(addedPerson).then(addedPerson  => {
            setPersons(persons.concat(addedPerson))
            setNewPerson('')
        })
    }

    const handlePersonChange = (event) => {
        const { name, value } = event.target;
        console.log(event.target)
        setNewPerson({
            ...newPerson,
            [name]: value,
        });
    }

    const deletePerson = (id) => {
        console.log('Delete person, ' + id)
    }
    return(
        <div>
            <SectionHeader title='PhoneBook' />
            <PhoneForm addPerson={addPerson} newPerson={newPerson} handlePersonChange={handlePersonChange}/>
            <SectionHeader title='Numbers' />
            <ul>
                {persons.map(person => <Person person={person} key={person.id} deletePerson={() =>deletePerson(person.id)}/>)}
            </ul>
        </div>
    )
}

export default App;