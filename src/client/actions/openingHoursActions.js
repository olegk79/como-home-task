const OPENING_HOURS_ACTIONS = {
    ADD_OPENING_HOURS: "ADD_OPENING_HOURS",
    DELETE_OPENING_HOURS: "DELETE_OPENING_HOURS",
    EDIT_OPENING_HOURS:"EDIT_OPENING_HOURS"
};

export const addOpeningHours = (data) => ({
    type: OPENING_HOURS_ACTIONS.ADD_OPENING_HOURS,
    data
});

export const editOpeningHours = (data, index) => ({
    type: OPENING_HOURS_ACTIONS.EDIT_OPENING_HOURS,
    index,
    data
});

export const deleteOpeningHours = (index) => ({
    type: OPENING_HOURS_ACTIONS.DELETE_OPENING_HOURS,
    index
});

export default OPENING_HOURS_ACTIONS;