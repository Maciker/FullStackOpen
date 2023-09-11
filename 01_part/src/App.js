import { useState } from "react";
const App = () => {
    const [clicks, setClicks] = useState({
        left: 0, right: 0
    })

    const handleLeftClick = () => {
        setClicks({...clicks, left: clicks.left + 1})
    }

    const handleRightClick = () => {
        setClicks({...clicks, right: clicks.right + 1})
    }

    return (
        <div>
            {clicks.left}
            <button onClick={handleLeftClick}>LEFT</button>
            <button onClick={handleRightClick}>RIGHT</button>
            {clicks.right}
        </div>
    )

/*    const [left, setLeft] = useState(0)
    const [right, setRight] = useState(0)

    return(
        <div>
            {left}
            <button onClick={() => setLeft(left + 1)}>
                LEFT
            </button>
            {right}
            <button onClick={() => setRight(right + 1)}>
                RIGHT
            </button>
        </div>
    )*/
}

export default App;
