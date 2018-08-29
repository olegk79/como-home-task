const SELECTED_PANEL_ACTIONS = {
    CHANGE_SELECTED_PANEL:"CHANGE_SELECTED_PANEL"
}

export const changeSelectedPanel = (selectedPanel) => ({
    type: SELECTED_PANEL_ACTIONS.CHANGE_SELECTED_PANEL,
    selectedPanel
});

export default SELECTED_PANEL_ACTIONS;