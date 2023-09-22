import { useState } from 'react'

const App = () => {
    const [persons, setPersons] = useState([{name: 'Arto Hellas', number: 123456789}])

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
                <li>{persons.map(person => person.name + ' --- ' +person.number)}</li>
            </ul>
        </div>
    )
}

export default App;