import { useState } from 'react'
import Person from "./components/Person";
import SectionHeader from "./components/SectionHeader";

const App = () => {
    const [persons, setPersons] = useState([{id: 1, name: 'Arto Hellas', number: 123456789}])

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

        setPersons(persons.concat(addedPerson))
        setNewPerson({
            id: 999,
            name: '',
            number: 999999999}
        )
    }

    const handlePersonChange = (event) => {
        const { name, value } = event.target;

        setNewPerson({
            ...newPerson,
            [name]: value,
        });
    }

    return(
        <div>
            <SectionHeader title='PhoneBook' />
            <form onSubmit={addPerson}>
                <div>
                    name: <input value={newPerson.name} onChange={handlePersonChange} name='name'/>
                    number: <input value={newPerson.number} onChange={handlePersonChange} name='number'/>
                </div>
                <div>
                    <button type='submit'>
                        ADD
                    </button>
                </div>
            </form>
            <SectionHeader title='Numbers' />
            <ul>
                {persons.map(person => <Person person={person} key={person.id}/>)}
            </ul>
        </div>
    )
}

export default App;