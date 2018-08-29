import searchImagesSvc from "../services/search-images";

const IMAGES_ACTIONS = {
    SEARCH_IMAGES: "SEARCH_IMAGES",
    IMAGES_SEARCH_DONE: "IMAGES_SEARCH_DONE",
    IMAGES_SEARCH_FAILED:"IMAGES_SEARCH_FAILED",
    KEYWORD_CHANGED: "KEYWORD_CHANGED",
    SELECTED_IMAGE_CHANGED:"SELECTED_IMAGE_CHANGED"

}

export const searchKeywordChanged = (keyword) => ({
    type: IMAGES_ACTIONS.KEYWORD_CHANGED,
    keyword
});

export const selectedImageChanged = (url) => ({
    type: IMAGES_ACTIONS.SELECTED_IMAGE_CHANGED,
    url
});

export const searchImages = () => ({
    type: IMAGES_ACTIONS.SEARCH_IMAGES
});

export const imagesSearchDone = (data) => ({
    type: IMAGES_ACTIONS.IMAGES_SEARCH_DONE,
    data
});

export const imagesSearchFailed = (data) => ({
    type: IMAGES_ACTIONS.IMAGES_SEARCH_FAILED,
    data
});

export const handleSearchImages = (q) => {
    return (dispatch) => {
        dispatch(searchImages());
        return searchImagesSvc(q)
            .then(res => {
                
                if (res.status === 200) {
                    dispatch(imagesSearchDone(res.data));
                } else {
                    dispatch(imagesSearchFailed(res.data));
                }
            })
    }
}

export default IMAGES_ACTIONS;