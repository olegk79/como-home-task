import RaisedButton from "material-ui/RaisedButton";

import ReactUploadFile from "react-upload-file";

const allowedExtensions = ["gif", "jpg", "jpeg", "png", "svg"];

const ImageUploader = ({
    onUploadImageClick,
    onUploadImageSuccess,
    onUploadImageFailed,
    onResetClick
}) => {
    const uploadOptions = {
        dataType: "json",
        baseUrl: "/api/image_upload",
        fileFieldName: (file) => {
            return "file";
        },
        beforeUpload: (files) => {
            //Supports GIF, JPG, PNG, and even SVG!
            let ext = files[0].name.toLowerCase().split('.')[1];
            if (allowedExtensions.indexOf(ext) >= 0) {
                let url = URL.createObjectURL(files[0]);
                onUploadImageClick(url);
                return true;
            }
            
            alert("Wrong file type, please select image file!");
            return false;
        },
        uploadSuccess: (resp) => {
            onUploadImageSuccess(JSON.parse(resp));
        },
        uploadError: (err) => {
            onUploadImageFailed(err);
            alert(err.message);
        },
        multiple: false
    };

    const style = {
        button: {
            marginLeft : 20
        }
    };

    return <div>
        Upload business logo:
        <ReactUploadFile options={uploadOptions} chooseFileButton={<RaisedButton style={style.button} label="Upload" primary={true} />} />
        <RaisedButton label="Reset" style={style.button} secondary={true} onClick={onResetClick} />
    </div>
}

module.exports = ImageUploader;