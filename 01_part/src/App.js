import {useState} from "react";

const Title = ({title}) => {
    return (
        <h1>
            {title}
        </h1>
    )
}

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    return (
        <div>
            <Title title='Give Feedback'/>
        </div>
    )
}

export default App