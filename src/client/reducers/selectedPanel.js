import PANELS from "../const/panels";
import SELECTED_PANEL_ACTIONS from "../actions/selectedPanelActions";

const selectedPanel = (state = PANELS.ABOUT_US, action) => {
    switch (action.type) {
        case SELECTED_PANEL_ACTIONS.CHANGE_SELECTED_PANEL:
            return action.selectedPanel;
        default:
            return state;
    }

}

export default selectedPanel;

