const ABOUT_US_ACTIONS = {
    CHANGE_BUSINESS_NAME: "CHANGE_BUSINESS_NAME",
    CHANGE_BUSINESS_DESC: "CHANGE_BUSINESS_DESC",
    CHANGE_WEBSITE_URL:"CHANGE_WEBSITE_URL"
};

export const changeBusinessName = (businessName) => ({
    type: ABOUT_US_ACTIONS.CHANGE_BUSINESS_NAME,
    businessName
});

export const changeBusinessDesc = (businessDesc) => ({
    type: ABOUT_US_ACTIONS.CHANGE_BUSINESS_DESC,
    businessDesc
});

export const changeWebsiteUrl = (websiteUrl) => ({
    type: ABOUT_US_ACTIONS.CHANGE_WEBSITE_URL,
    websiteUrl
});

export default ABOUT_US_ACTIONS;