import IMAGES_ACTIONS from "../actions/imagesActions";
import { combineReducers } from "redux";


const keyword = (state = "", action) => {
    switch (action.type) {
        case IMAGES_ACTIONS.KEYWORD_CHANGED:
            return action.keyword;
        default:
            return state;
    }
}

const isLoadingImages = (state = false, action) => {
    switch (action.type) {
        case IMAGES_ACTIONS.SEARCH_IMAGES:
            return true;
        case IMAGES_ACTIONS.IMAGES_SEARCH_FAILED:
            return false;
        case IMAGES_ACTIONS.IMAGES_SEARCH_DONE:
            return false;
        default:
            return state;
    }
}

const imagesList = (state = [], action) => {
    switch (action.type) {
        case IMAGES_ACTIONS.SEARCH_IMAGES:
            return [];
        case IMAGES_ACTIONS.IMAGES_SEARCH_DONE:
            return action.data;
        case IMAGES_ACTIONS.IMAGES_SEARCH_FAILED:
            return [];
        default:
            return state;
    }
}

const errorMessage = (state = "", action) => {
    switch (action.type) {
        case IMAGES_ACTIONS.IMAGES_SEARCH_FAILED:
            return action.data;
        case IMAGES_ACTIONS.IMAGES_SEARCH_DONE:
            return "";
        case IMAGES_ACTIONS.SEARCH_IMAGES:
            return "";
        default:
            return state;
    }
}

const selectedImageUrl = (state = "", action) => {
    switch (action.type) {
        case IMAGES_ACTIONS.SELECTED_IMAGE_CHANGED:
            return action.url;
        default:
            return state;
    }
}





const imagesInfo = combineReducers({
    keyword,
    isLoadingImages,
    imagesList,
    errorMessage,
    selectedImageUrl
});

export default imagesInfo;

///////////////SELECTORS//////////////////////////
export const getSearchKeyword = state => state.keyword;
export const getIsLoadingImages = state => state.isLoadingImages;
export const getImagesList = state => state.imagesList;
export const getImagesErrorMessage = state => state.errorMessage;
export const getSelectedImageUrl = state => state.selectedImageUrl;



