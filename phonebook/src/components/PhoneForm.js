const PhoneForm = ({addPerson, newPerson, handlePersonChange}) => {

    return (
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
    )
}

export default PhoneForm

