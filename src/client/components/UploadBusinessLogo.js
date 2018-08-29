import ImageUploader from "./ImageUploader";
import CircularProgress from "material-ui/CircularProgress";


export default ({
    isUploadingImage,
    uploadErrorMessage,
    onUploadImageClick,
    onUploadImageSuccess,
    onUploadImageFailed,
    onResetClick
}) => {

    const style = {
        div: {
            marginTop: 10,
            marginLeft: 10
        },
        resetButton: {
            marginLeft: 10
        }
    }

    return <div style={style.div}>
        {
            isUploadingImage ? <CircularProgress /> : <ImageUploader onUploadImageClick={onUploadImageClick}
                onUploadImageSuccess={onUploadImageSuccess}
                onResetClick={onResetClick}
                onUploadImageFailed={onUploadImageFailed} />
        }
        {
            uploadErrorMessage !== "" && <label>{uploadErrorMessage}</label>
        }
        
        
    </div>
}