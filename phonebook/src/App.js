import { useState } from 'react'
import Person from "./components/Person";
import SectionHeader from "./components/SectionHeader";

const App = () => {
    const [persons, setPersons] = useState([{id: 1, name: 'Arto Hellas', number: 123456789}])

    const [newName, setNewName] = useState('')

    return(
        <div>
            <SectionHeader title='PhoneBook' />
            <form>
                <div>
                    name: <input />
                    number: <input />
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