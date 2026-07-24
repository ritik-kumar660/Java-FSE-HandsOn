import React, { useState } from "react";

function App() {

    const [count, setCount] = useState(0);

    const [amount, setAmount] = useState("");
    const [currency, setCurrency] = useState("");

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    const sayHello = () => {
        alert("Hello! Member");
    };

    const handleIncrement = () => {
        increment();
        sayHello();
    };

    const sayWelcome = (message) => {
        alert(message);
    };

    const handleClick = () => {
        alert("I was clicked");
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (currency.toLowerCase() === "euro") {
            const result = (parseFloat(amount) / 90).toFixed(2);
            alert("Converted Amount: € " + result);
        } else {
            alert("Please enter currency as Euro");
        }
    };

    return (
        <div style={{ margin: "20px" }}>

            <h2>{count}</h2>

            <button onClick={handleIncrement}>
                Increment
            </button>

            <br /><br />

            <button onClick={decrement}>
                Decrement
            </button>

            <br /><br />

            <button onClick={() => sayWelcome("Welcome")}>
                Say Welcome
            </button>

            <br /><br />

            <button onClick={handleClick}>
                Click on me
            </button>

            <br /><br /><br />

            <h1 style={{ color: "green" }}>
                Currency Convertor!!!
            </h1>

            <form onSubmit={handleSubmit}>

                <label>Amount : </label>

                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />

                <br /><br />

                <label>Currency : </label>

                <input
                    type="text"
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                />

                <br /><br />

                <button type="submit">
                    Submit
                </button>

            </form>

        </div>
    );
}

export default App;