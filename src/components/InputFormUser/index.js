//import { useState } from "react";
import "./InputFormUser.css";

export default function InputFormUser({ userName }) {
    /* const [inputState, setInputState] = useState(null);

    const handleOnChange = (event) => {
        setInputState(() => event.target.value);
    }; */

    const handleOnSubmit = (event) => {
        event.preventDefault();
        const username = event.target.text.value;
        userName(username);

    };

    return (
        <div className="InputFormUser">
            <form onSubmit={handleOnSubmit}>
                <label for="text">GitHub username:</label>
                <input
                    name="text"
                    type="text"
                    placeholder="e.g. facebook"
                //  onChange={handleOnChange}
                />
                <button type="submit">GO!</button>
            </form>
        </div>
    );
}