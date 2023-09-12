import {useState} from "react";

const Title = ({title}) => {
    return (
        <h1>
            {title}
        </h1>
    )
}

const FeedbackButton = ({handleClick, buttonText}) => {
    return (
        <button onClick={handleClick}>
            {buttonText}
        </button>
    )
}

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const goodFeedbackClick = () => {
        return setGood(good + 1)
    }

    return (
        <div>
            <Title title='Give Feedback'/>
            <br/>
            <FeedbackButton handleClick={goodFeedbackClick} buttonText='GOOD' />
            {good}
        </div>
    )
}

export default App