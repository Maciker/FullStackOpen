const Person = ({person, deletePerson}) => {
    return (
        <div>
            <li>{person.name + ' --- ' +person.number}</li>
            <button onClick={deletePerson}>DELETE</button>
        </div>
    )
}

export default Person