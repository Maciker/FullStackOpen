import { useState } from "react";
const App = () => {
    const [left, setLeft] = useState(0)
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
    )
}

export default App;
