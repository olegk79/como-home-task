import OPENING_HOURS_ACTIONS from "../actions/openingHoursActions";

const openingHours = (state = [], action) => {
    switch (action.type) {
        case OPENING_HOURS_ACTIONS.ADD_OPENING_HOURS:
            return [...state.slice(), action.data];
            return newState;
        case OPENING_HOURS_ACTIONS.DELETE_OPENING_HOURS:
            return state.filter((v, idx) => idx !== action.index);
        case OPENING_HOURS_ACTIONS.EDIT_OPENING_HOURS:
            return [...state.slice(0, action.index), action.data, ...state.slice(action.index + 1)];
        default:
            return state;
    }

}

export default openingHours;

