import { createContext, useReducer } from "react";

const initialState = {
    numberOfExperiments: 100,
    brelanCount: 0,
};

function gameReducer(state, action) {
    switch (action.type) {
        case "SET_EXPERIMENTS":
            return { ...state, numberOfExperiments: action.payload };
        case "ADD_BRELAN":
            return { ...state, brelanCount: state.brelanCount + 1 };
        case "RESET":
            return initialState;
        default:
            return state;
    }
}

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
    const [state, dispatch] = useReducer(gameReducer, initialState);

    return (
        <GameContext.Provider value={{ state, dispatch }}>
            {children}
        </GameContext.Provider>
    );
};
