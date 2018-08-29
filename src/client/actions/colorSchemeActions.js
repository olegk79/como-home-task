const COLOR_SCHEME_ACTIONS = {
    RESET_SCHEME: "RESET_SCHEME",
    UPLOADING_IMAGE: "UPLOADING_IMAGE",
    IMAGE_UPLOADED_OK: "IMAGE_UPLOADED_OK",
    IMAGE_UPLOAD_FAILED:"IMAGE_UPLOAD_FAILED"//,
    //CHANGE_SCHEME:"CHANGE_SCHEME"
}

export const resetScheme = () => ({
    type: COLOR_SCHEME_ACTIONS.RESET_SCHEME
});

export const uploadingImage = () => ({
    type: COLOR_SCHEME_ACTIONS.UPLOADING_IMAGE
});

export const imageUploadedSuccessfully = (data) => ({
    type: COLOR_SCHEME_ACTIONS.IMAGE_UPLOADED_OK,
    data
});

export const imageUploadFailed = (data) => ({
    type: IMAGE_UPLOAD_FAILED,
    data
});

export default COLOR_SCHEME_ACTIONS;