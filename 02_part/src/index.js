import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

const notes = [
    {
        id: 1,
        content: 'Learn React',
        important: true
    },
    {
        id: 2,
        content: 'Learn Python',
        important: false
    },
    {
        id: 3,
        content: 'Learn Node',
        important: true
    }
]

ReactDOM.createRoot(document.getElementById("root")).render(
    <App notes={notes}/>
);