import React, { useState } from "react";

const Counter = ({ initial = 0 }) => {
    const [count, setCount] = useState(initial);

    const increment = () => setCount((c) => c + 1);
    const decrement = () => setCount((c) => c - 1);
    const reset = () => setCount(initial);

    return (
        <div style={{ display: "inline-block", padding: 12, border: "1px solid #ddd", borderRadius: 6 }}>
            <div style={{ fontSize: 20, marginBottom: 8, textAlign: "center" }}>
                {count}
            </div>
            <div style={{ display: "flex", gap: 8, justifyContent: "center" }}>
                <button onClick={decrement} aria-label="decrement">-</button>
                <button onClick={reset} aria-label="reset">Reset</button>
                <button onClick={increment} aria-label="increment">+</button>
            </div>
        </div>
    );
};

export default Counter;