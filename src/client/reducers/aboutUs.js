import ABOUT_US_ACTIONS from "../actions/aboutUsActions";
import { combineReducers } from "redux";

const businessName = (state = "", action) => {
    switch (action.type) {
        case ABOUT_US_ACTIONS.CHANGE_BUSINESS_NAME:
            return action.businessName;
        default:
            return state;
    }
}

const businessDesc = (state = "", action) => {
    switch (action.type) {
        case ABOUT_US_ACTIONS.CHANGE_BUSINESS_DESC:
            return action.businessDesc;
        default:
            return state;
    }
}

const webSiteUrl = (state = "", action) => {
    switch (action.type) {
        case ABOUT_US_ACTIONS.CHANGE_WEBSITE_URL:
            return action.websiteUrl;
        default:
            return state;
    }
}



const aboutUsInfo = combineReducers({
    businessName,
    businessDesc,
    webSiteUrl
});

export default aboutUsInfo;

///////////////SELECTORS//////////////////////////
export const getBusinessName = state => state.businessName;
export const getBusinessDesc = state => state.businessDesc;
export const getWebsiteUrl = state => state.webSiteUrl;

