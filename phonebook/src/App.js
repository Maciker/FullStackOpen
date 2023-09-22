import { useState } from 'react'
import Person from "./components/Person";

const App = () => {
    const [persons, setPersons] = useState([{id: 1, name: 'Arto Hellas', number: 123456789}])

    const [newName, setNewName] = useState('')

    return(
        <div>
            <h2>PhoneBook</h2>
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
            <h2>Numbers</h2>
            <ul>
                {persons.map(person => <Person person={person} key={person.id}/>)}
            </ul>
        </div>
    )
}

export default App;