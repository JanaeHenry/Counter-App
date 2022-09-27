import { useState } from "react";

export default (props) => {

    // const countState = useState(0);

    // const count = countState[0];
    // const setCount = countState[1];

    //OR

    const [count, setCount] = useState(0);

    const handleIncrement = () => setCount(count + 1);


    const handleDecrement = () => setCount(count - 1);

    return (
        <>
        <span> Current Count: {count}</span>
        <section>
            <button onClick ={
                () => {
                    setCount(count + 1);
                }
            }>+</button>
            <button onClick = {
                () => {
                    setCount(count - 1);
                }
            }>-</button>
        </section>
        </>
    )

    //OR

    // return (
    //     <>
    //     <span> Current Count: {count}</span>
    //     <section>
    //         <button onClick ={handleIncrement}>+</button>
    //         <button onClick = {handleDecrement}>-</button>
    //     </section>
    //     </>
    // )

}

