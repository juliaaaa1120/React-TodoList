import { useState } from "react";

function TodoItem(props) {
    const [item, setItem] = useState("");

    return (
        <div>
            <span>{item}</span>
        </div>
    );
}

export default Counter;