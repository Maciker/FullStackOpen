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

const FeedbackStatistics = ({feedback}) => {
    return (
        <div>
            <p>Good: {feedback.good}</p>
            <p>Neutral: {feedback.neutral}</p>
            <p>Bad: {feedback.bad}</p>
        </div>
    )
}

const App = () => {
    const [feedback, setFeedback] = useState({
        good: 0,
        neutral: 0,
        bad: 0
    })

    const goodFeedbackClick = () => {
        return setFeedback({
            ...feedback,
            good: feedback.good + 1
        })
    }

    const neutralFeedbackClick = () => {
        return setFeedback({
            ...feedback,
            neutral: feedback.neutral  + 1
        })
    }

    const badFeedbackClick = () => {
        return setFeedback({
            ...feedback,
            bad: feedback.bad + 1
        })
    }

    return (
        <div>
            <Title title='Give Feedback'/>
            <FeedbackButton handleClick={goodFeedbackClick} buttonText='GOOD' />
            <FeedbackButton handleClick={neutralFeedbackClick} buttonText='NEUTRAL' />
            <FeedbackButton handleClick={badFeedbackClick} buttonText='BAD' />
            <br/>
            <Subtitle title='Statistics' />
            <FeedbackStatistics feedback={feedback} />
        </div>
    )
}

export default App