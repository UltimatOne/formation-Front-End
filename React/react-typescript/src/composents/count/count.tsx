import { useEffect, useState } from "react"

const Count: React.FC = () => {
    const [count, setCount] = useState<number>(0);
    
    useEffect(() => {
        console.log(count);
    }, [count]);
    

    return (
        <div  className="count">
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>+</button>
        </div>
    );
}
export default Count;