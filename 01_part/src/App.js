import { useState } from "react";

const App = () => {
    const [left, setLeft] = useState(0)
    const [right, setRight] = useState(0)
    const [allClicks, setAll] = useState([])
    const [total, setTotal] = useState(0)

    const handleLeftClick = () => {
        setAll(allClicks.concat('L'))
        const updatedLeft = left + 1
        setLeft(updatedLeft)
        setTotal(updatedLeft + right)
    }

    const handleRightClick = () => {
        setAll(allClicks.concat('R'))
        const updatedRight = right + 1
        setRight(updatedRight)
        setTotal(left + updatedRight)
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
            <p>Total: {total}</p>
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
