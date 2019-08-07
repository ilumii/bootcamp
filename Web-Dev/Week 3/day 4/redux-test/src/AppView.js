import React from "react";

const AppView = (props) => {
    const { counter, incrementCounter, decrementCounter, handleChange, amount, students } = props;

    return (
    <div className="App">
        <header className="App-header">
            Counter: {counter}
            <form>
                <label>Type in amount here:</label>
                <input name="amount" type="number" onChange={handleChange}></input>
            </form>
            <button onClick={() => incrementCounter(Number(amount))}>Plus</button>
            <button onClick={() => decrementCounter(Number(amount))}>Minus</button>
            {students.map(student => <div><img src={student.imageUrl} width="100" height="100" ></img></div>)}
        </header>
    </div>
    )
}

export default AppView;