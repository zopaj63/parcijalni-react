import { useState } from "react";
import "./InputFormUser.css";

export default function InputFormUser() {

    const [formState, setFormState] = useState({ text: "" });
    const [submitState, setSubmitState] = useState([]);

    const handleOnChange = (event) => {
        event.preventDefault();
        setFormState((state) => ({
            ...state,
            [event.target.name]: event.target.value,
        })
        );
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();
        setSubmitState(state => [...state, formState]);
    }

    fetch("https://api.github.com/users/facebook")
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(error => console.error(error));

    return (
        <div className="InputFormUser">
            <form onSubmit={handleOnSubmit}>
                <label for="text">GitHub username:</label>
                <input
                    name="text"
                    type="text"
                    placeholder="e.g. facebook"
                    onChange={handleOnChange}
                    value={formState.text}
                />
                <button type="submit">GO!</button>
            </form>
        </div>
    );
}