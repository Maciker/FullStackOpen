import {useState} from "react";

const Title = ({title}) => {
    return (
        <h1>
            {title}
        </h1>
    )
}

const App = () => {
    return (
        <div>
            <Title title='Give Feedback'/>
            Hello Mac
        </div>
    )
}

export default App