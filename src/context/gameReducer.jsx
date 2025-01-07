// context/gameReducer.js
export const initialState = {
    numberOfExperiments: 100,
    brelanCount: 0,
};

export function gameReducer(state, action) {
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
