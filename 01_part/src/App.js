import {useState} from "react";

const Title = ({title}) => {
    return (
        <h1>
            {title}
        </h1>
    )
}

const Subtitle = ({title}) => {
    return (
        <h3>
            {title}
        </h3>
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

    const neutralFeedbackClick = () => {
        return setNeutral(neutral + 1)
    }

    const badFeedbackClick = () => {
        return setBad(bad + 1)
    }

    return (
        <div>
            <Title title='Give Feedback'/>
            <FeedbackButton handleClick={goodFeedbackClick} buttonText='GOOD' />
            <FeedbackButton handleClick={neutralFeedbackClick} buttonText='NEUTRAL' />
            <FeedbackButton handleClick={badFeedbackClick} buttonText='BAD' />
            <br/>
            <Subtitle title='Statistics' />
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
        </div>
    )
}

export default App