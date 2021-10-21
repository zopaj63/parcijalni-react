import { useState } from "react";
import "./InputFormUser.css";

export default function InputFormUser() {

    const [formState, setFormState] = useState({ text: "" });

    const handleOnChange = (event) => {
        event.preventDefault();
        setFormState((state) => ({
            ...state,
            [event.target.name]: event.target.value,
        })
        );
    }

    fetch("https://api.github.com/users/facebook")
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(error => console.error(error));

    return (
        <div className="InputFormUser">
            <form>
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