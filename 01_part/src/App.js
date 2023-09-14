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
    if (feedback.totalVotes === 0) {
        return (
            <div>
                <p>Vote and show th statistics</p>
            </div>
        )
    }
    return (
        <div>
            <p>Good: {feedback.good}</p>
            <p>Neutral: {feedback.neutral}</p>
            <p>Bad: {feedback.bad}</p>
            <p>Total Votes: {feedback.totalVotes}</p>
            <p>Total Points: {feedback.totalPoints}</p>
            <p>Average: {feedback.average} %</p>
            <p>Positive: {feedback.positive} %</p>
        </div>
    )
}

const App = () => {
    const [feedback, setFeedback] = useState({
        good: 0,
        neutral: 0,
        bad: 0,
        totalVotes: 0,
        totalPoints: 0,
        average: 0,
        positive: 0
    })

    const feedbackAverage = (totalPoints, totalVotes) => {
        return (totalPoints / totalVotes) * 100
    }

    const positiveAverage = (totalPositive, totalVotes) => {
        return (totalPositive / totalVotes) * 100
    }

    const goodFeedbackClick = () => {
        const totalVotes = feedback.totalVotes + 1
        const totalPoints = feedback.totalPoints + 1
        const totalPositive = feedback.good + 1

        return setFeedback({
            ...feedback,
            good: totalPositive,
            totalVotes: totalVotes,
            totalPoints: totalPoints,
            average: feedbackAverage(totalPoints, totalVotes),
            positive: positiveAverage(totalPositive, totalVotes)
        })
    }

    const neutralFeedbackClick = () => {
        const totalVotes = feedback.totalVotes + 1

        return setFeedback({
            ...feedback,
            neutral: feedback.neutral  + 1,
            totalVotes: totalVotes,
            average: feedbackAverage(feedback.totalPoints, totalVotes),
            positive: positiveAverage(feedback.good, totalVotes)

        })
    }

    const badFeedbackClick = () => {
        const totalVotes = feedback.totalVotes + 1
        const totalPoints = feedback.totalPoints - 1

        return setFeedback({
            ...feedback,
            bad: feedback.bad + 1,
            totalVotes: totalVotes,
            totalPoints: totalPoints,
            average: feedbackAverage(totalPoints, totalVotes),
            positive: positiveAverage(feedback.good, totalVotes)
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