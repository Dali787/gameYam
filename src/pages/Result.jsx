import { useContext } from "react";
import { GameContext } from "../context/GameContext.jsx";
import { Link } from "react-router-dom";

const Result = () => {
    const { state } = useContext(GameContext);

    return (
        <div>
            <h2>Résultats</h2>
            <p>Nombre d'expériences : {state.numberOfExperiments}</p>
            <p>Nombre de brelans de 6 : {state.brelanCount}</p>
            <Link to="/">Recommencer</Link>
        </div>
    );
};

export default Result;
