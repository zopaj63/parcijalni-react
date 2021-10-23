import { useState, useEffect } from "react";
import "./ViewUser.css";

export default function ViewUser(props) {
    const [userData, setUserData] = useState(null);
    const [userError, setUserError] = useState(null);

    const [repoData, setRepoData] = useState(null);
    const [repoError, setRepoError] = useState(null);

    useEffect(() => {
        fetch(`https://api.github.com/users/${props.user}`)
            .then((response) => response.json())
            .then((json) => setUserData(json))
            .catch((error) => setUserError(error));

        fetch(`https://api.github.com/users/${props.user}/repos`)
            .then((response) => response.json())
            .then((json) => setRepoData(json))
            .catch((error) => setRepoError(error));
    }, [props.user]);

    if (userError !== null || repoError !== null) {
        return <div>Error!(</div>;
    }
    if (userData === null || repoData === null) {
        return <div>Loading...</div>;
    }

    return (
        <div className="ViewUser">
            <img src={userData.avatar_url} alt={userData.name} />
            <p><b>User name: </b>{userData.name}</p>
            <p><b>Location: </b>{userData.location}</p>
            <p><b>Details: </b>{userData.bio}</p>
            <div>
                <b>Repositories: </b>
                <ul>
                    {repoData.map((item) => (
                        <li id={item.id}>{item.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
