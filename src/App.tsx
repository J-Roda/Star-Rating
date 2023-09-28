import "./App.css";
import { useState } from "react";
import StarRating from "./components/StarRating";

function Test() {
    const [rating, setRating] = useState(0);
    return (
        <div>
            <StarRating color="green" onSetRating={setRating} maxRating={10} />
            <p>This movie was rated as {rating} stars</p>
        </div>
    );
}

function App() {
    return (
        <>
            <StarRating maxRating={5} />
            <Test />
        </>
    );
}

export default App;
