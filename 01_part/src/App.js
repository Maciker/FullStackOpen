import { useState } from "react";

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
            <button onClick={handleLeftClick}>
                LEFT
            </button>
            {right}
            <button onClick={handleRightClick}>
                RIGHT
            </button>
            <p>{allClicks.join(' ')}</p>
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
