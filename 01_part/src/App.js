import { useState } from "react";

const History = (props) => {
    if(props.allClicks.length === 0) {
        return(
            <div>
                The app us used by pressing buttons
            </div>
        )
    }
    return (
        <div>
            Button press history: {props.allClicks.join(' ')}
        </div>
    )
}

const Button = ({handleClick, text}) => (
    <button onClick={handleClick}>
        {text}
    </button>
)

const App = () => {
    const [left, setLeft] = useState(0)
    const [right, setRight] = useState(0)
    const [allClicks, setAll] = useState([])

    const handleLeftClick = () => {
        setAll(allClicks.concat('L'))
        setLeft(left + 1)
    }

    const handleRightClick = () => {
        setAll(allClicks.concat('R'))
        setRight(right + 1)
    }

    return(
        <div>
            {left}
            <Button handleClick={handleLeftClick} text='LEFT' />
            <Button handleClick={handleRightClick} text='RIGHT'/>
            {right}
            <History allClicks={allClicks} />
        </div>
    )

    /*
    const [clicks, setClicks] = useState({
        left: 0, right: 0
    })

    return (
        <div>
            {clicks.left}
            <button onClick={handleLeftClick}>LEFT</button>
            <button onClick={handleRightClick}>RIGHT</button>
            {clicks.right}
        </div>
    )*/
}

export default App;
