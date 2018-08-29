import { combineReducers } from "redux";

//reducers
import selectedPanel from "./selectedPanel";
import aboutUsInfo from "./aboutUs";
import openingHours from "./openingHours";
import imagesInfo from "./images";
import colorSchemeInfo from "./colorScheme";

//reducer selectors
import * as fromAboutUsInfo from "./aboutUs";
import * as fromImagesInfo from "./images";
import * as fromColorSchemeInfo from "./colorScheme";


const rootReducer = combineReducers({
    selectedPanel,
    aboutUsInfo,
    openingHours,
    imagesInfo,
    colorSchemeInfo
});

export default rootReducer;

///////////////////////////////////SELECTORS/////////////////////////////////////////////////////////////
export const getSelectedPanel = state => state.selectedPanel;
export const getOpeningHours = state => state.openingHours;

export const getBusinessName = state => fromAboutUsInfo.getBusinessName(state.aboutUsInfo);
export const getBusinessDesc = state => fromAboutUsInfo.getBusinessDesc(state.aboutUsInfo);
export const getWebsiteUrl = state => fromAboutUsInfo.getWebsiteUrl(state.aboutUsInfo);


export const getSearchKeyword = state => fromImagesInfo.getSearchKeyword(state.imagesInfo);
export const getIsLoadingImages = state => fromImagesInfo.getIsLoadingImages(state.imagesInfo);
export const getImagesList = state => fromImagesInfo.getImagesList(state.imagesInfo);
export const getImagesErrorMessage = state => fromImagesInfo.getImagesErrorMessage(state.imagesInfo);
export const getSelectedImageUrl = state => fromImagesInfo.getSelectedImageUrl(state.imagesInfo);

export const getIsUploadingImage = state => fromColorSchemeInfo.getIsUploadingImage(state.colorSchemeInfo);
export const getUploadErrorMessage = state => fromColorSchemeInfo.getUploadErrorMessage(state.colorSchemeInfo);
export const getColorScheme = state => fromColorSchemeInfo.getColorScheme(state.colorSchemeInfo);

