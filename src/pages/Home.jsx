import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { GameContext } from "../context/GameContext";

const Home = () => {
    const { dispatch } = useContext(GameContext);
    const [experiments, setExperiments] = useState(100);

    const handleLaunch = () => {
        dispatch({ type: "RESET" });
        dispatch({ type: "SET_EXPERIMENTS", payload: experiments });

        for (let i = 0; i < experiments; i++) {
            const dice1 = Math.ceil(Math.random() * 6);
            const dice2 = Math.ceil(Math.random() * 6);
            const dice3 = Math.ceil(Math.random() * 6);

            if (dice1 === 6 && dice2 === 6 && dice3 === 6) {
                dispatch({ type: "ADD_BRELAN" });
            }
        }
    };

    return (
        <div>
            <p>
                <Link to="/description">Description</Link>
            </p>
            <label>
                <strong>Nombre d'expériences :</strong>
                <input
                    type="number"
                    value={experiments}
                    onChange={(e) => setExperiments(parseInt(e.target.value, 10))}
                />
            </label>
            <button onClick={handleLaunch}>Lancer</button>
            <div>
                <Link to="/result" className="button-link">Résultat</Link>
            </div>
        </div>
    );
};

export default Home;
