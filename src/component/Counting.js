import { useState } from "react";


function Counting ({counter}) {
    let [count,setCount] = useState(0)

    const  addCount = () => {  
        setCount(++count);
    }

    const subCount = () => {
        if (count > 0) {
            setCount(--count);
        }
    }

    return (
        <div className="counting">
            <button onClick={addCount}>Add</button>
            <h1>{counter} : {count}</h1>
            <button onClick={subCount}>Sub</button>
        </div>
    )
}
export default Counting;

