import { useState } from "react";
import ViewUser from "../ViewUser";
import "./InputFormUser.css";

export default function InputFormUser(props) {
    const [inputState, setInputState] = useState(null);

    const handleOnChange = (event) => {
        setInputState(() => event.target.value);
    };
    console.log(inputState);

    const handleOnSubmit = (event) => {
        event.preventDefault();
        ViewUser(inputState);
    };

    return (
        <div className="InputFormUser">
            <form onSubmit={handleOnSubmit}>
                <label for="text">GitHub username:</label>
                <input
                    name="text"
                    type="text"
                    placeholder="e.g. facebook"
                    onChange={handleOnChange}
                //value={}
                />
                <button type="submit">GO!</button>
            </form>
        </div>
    );
}