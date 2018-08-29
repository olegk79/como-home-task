import COLOR_SCHEME_ACTIONS from "../actions/colorSchemeActions";
import { combineReducers } from "redux";




const isUploadingImage = (state = false, action) => {
    switch (action.type) {
        case COLOR_SCHEME_ACTIONS.UPLOADING_IMAGE:
            return true;
        case COLOR_SCHEME_ACTIONS.IMAGE_UPLOADED_OK:
            return false;
        case COLOR_SCHEME_ACTIONS.IMAGE_UPLOAD_FAILED:
            return false;
        default:
            return state;
    }
}

const colorScheme = (state = null, action) => {
    switch (action.type) {
        case COLOR_SCHEME_ACTIONS.IMAGE_UPLOADED_OK:
            return action.data;
        case COLOR_SCHEME_ACTIONS.RESET_SCHEME:
            return null;
        default:
            return state;
    }
}



const errorMessage = (state = "", action) => {
    switch (action.type) {
        case COLOR_SCHEME_ACTIONS.IMAGE_UPLOAD_FAILED:
            return action.data;
        case COLOR_SCHEME_ACTIONS.IMAGE_UPLOADED_OK:
            return "";
        
        default:
            return state;
    }
}







const colorSchemeInfo = combineReducers({
    isUploadingImage,
    errorMessage,
    colorScheme
});

export default colorSchemeInfo;

///////////////SELECTORS//////////////////////////
export const getIsUploadingImage = state => state.isUploadingImage;
export const getUploadErrorMessage = state => state.errorMessage;
export const getColorScheme = state => state.colorScheme;



