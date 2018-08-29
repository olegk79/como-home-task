//dependencies
import { Component } from "react";
import { connect } from "react-redux";

import PANELS from "../const/panels";

import PanelsSwitch from "./PanelsSwitch";
import AboutUs from "./AboutUs";
import Images from "./Images";
import OpeningHours from "./OpeningHours";
import UploadBusinessLogo from "./UploadBusinessLogo";

// action
import {
    changeSelectedPanel
} from "../actions/selectedPanelActions";

import {
    addOpeningHours,
    editOpeningHours,
    deleteOpeningHours
} from "../actions/openingHoursActions";

import {
    changeBusinessName,
    changeBusinessDesc,
    changeWebsiteUrl
} from "../actions/aboutUsActions";

import {
    searchKeywordChanged,
    handleSearchImages,
    selectedImageChanged
} from "../actions/imagesActions";

import {
    uploadingImage,
    imageUploadedSuccessfully,
    imageUploadFailed,
    resetScheme
} from "../actions/colorSchemeActions";


//State Selectors
import {
    getSelectedPanel,
    getBusinessDesc,
    getWebsiteUrl,
    getBusinessName,
    getOpeningHours,
    getSearchKeyword,
    getIsLoadingImages,
    getImagesList,
    getImagesErrorMessage,
    getIsUploadingImage,
    getUploadErrorMessage
} from "../reducers";



class AppCreator extends Component {


    handleSelectedPanelButtonClick(selectedPanel) {
        this.props.changeSelectedPanel(selectedPanel);
    }

    handleBusinessNameChange(businessName) {
        this.props.changeBusinessName(businessName);
    }

    handleBusinessDescChange(businessDesc) {
        this.props.changeBusinessDesc(businessDesc);
    }

    handleWebsiteUrlChange(websiteUrl) {
        this.props.changeWebsiteUrl(websiteUrl);
    }

    handleEditOpeningHoursClick(index) {
        
        let newOpeningHours = Object.assign({}, this.props.openingHours[index], { isBeingEdited: true });
        
        this.props.editOpeningHours(newOpeningHours, index);
    }

    handleDeleteOpeningHoursClick(index) {
        this.props.deleteOpeningHours(index);
    }

    handleAddOpeningHoursClick() {
        this.props.addOpeningHours({
            dayFrom: -1,
            dayTo: -1,
            openFrom: -1,
            openTo: -1,
            isBeingEdited: true
        });
    }

    handleSaveChangesOpeningHoursClick(index, data) {
        delete data["error"];
        data.isBeingEdited = false;
        this.props.editOpeningHours(data, index);

    }

    handleCancelChangesOpeningHoursClick(index) {
        let newOpeningHours = Object.assign({}, this.props.openingHours[index], { isBeingEdited: false });
        this.props.editOpeningHours(newOpeningHours, index);
    }

    handleImagesSearchTextChange(event) {
        this.props.searchKeywordChanged(event.target.value);
    }

    handleSearchImagesButtonClick() {
        this.props.handleSearchImages(this.props.imagesSearchKeyword);
    }

    handleUploadImageClick(url) {
        
        this.props.uploadingImage();
        this.props.selectedImageChanged(url);
    }

    handleUploadImageSuccess(response) {
        if (response.success === true) {
            this.props.imageUploadedSuccessfully(response.colors.slice(0, 2));
        } else {
            this.props.imageUploadFailed(response.error);
        }
    }

    handleUploadImageFailed() {
        
        this.props.imageUploadFailed("failed to upload");
        
    }

    handleImageClick(idx) {
        
        this.props.selectedImageChanged(this.props.imagesList[idx].previewURL);
    }

    handleResetSchemeClick() {
        this.props.resetScheme();
    }


    render() {
        const style = {
            leftDiv: {
                float: "left"
            }
        }

        const {
            selectedPanel,
            businessName,
            businessDesc,
            websiteUrl,
            openingHours,
            imagesSearchKeyword,
            isLoadingImages,
            imagesList,
            imagesErrorMessage,
            isUploadingImage,
            uploadErrorMessage

        } = this.props;

        return <div style={style.leftDiv}>
            <PanelsSwitch
                selectedPanel={selectedPanel}
                onButtonClick={(selectedPanel) => this.handleSelectedPanelButtonClick(selectedPanel)}
            />
            {
                selectedPanel === PANELS.ABOUT_US && <AboutUs
                    businessName={businessName}
                    onBusinessNameChange={event => this.handleBusinessNameChange(event.target.value)}
                    desc={businessDesc}
                    onDescChange={event => this.handleBusinessDescChange(event.target.value)}
                    websiteUrl={websiteUrl}
                    onUrlChange={event => this.handleWebsiteUrlChange(event.target.value)}

                />
            }
            {
                selectedPanel === PANELS.IMAGES && <Images
                    imagesSearchKeyword={imagesSearchKeyword}
                    isLoadingImages={isLoadingImages}
                    imagesList={imagesList}
                    imagesErrorMessage={imagesErrorMessage}
                    onSearchTextChange={(event) => this.handleImagesSearchTextChange(event)}
                    onSearchButtonClick={() => this.handleSearchImagesButtonClick()}
                    onImageClick={(idx) => this.handleImageClick(idx)}
                />
            }
            {
                selectedPanel === PANELS.OPENING_HOURS && <OpeningHours
                    openingHours={openingHours}
                    onEditOpeningHoursClick={index => this.handleEditOpeningHoursClick(index)}
                    onDeleteOpeningHoursClick={index => this.handleDeleteOpeningHoursClick(index)}
                    onAddOpeningHoursClick={() => this.handleAddOpeningHoursClick()}
                    onSaveChangesClick={(index, data) => this.handleSaveChangesOpeningHoursClick(index, data)}
                    onCancelChangesClick={index => this.handleCancelChangesOpeningHoursClick(index)}
                />

            }
            {
                selectedPanel === PANELS.IMAGE_UPLOAD && <UploadBusinessLogo
                    onUploadImageClick={(url) => this.handleUploadImageClick(url)}
                    isUploadingImage={isUploadingImage}
                    uploadErrorMessage={uploadErrorMessage}
                    onResetClick={() => this.handleResetSchemeClick()}
                    onUploadImageSuccess={(response) => this.handleUploadImageSuccess(response)}
                    onUploadImageFailed={() => this.handleUploadImageFailed()} />
            }
            
        </div>

    }
}

const mapStateToProps = state => ({
    selectedPanel: getSelectedPanel(state),
    businessName: getBusinessName(state),
    businessDesc: getBusinessDesc(state),
    websiteUrl: getWebsiteUrl(state),
    openingHours: getOpeningHours(state),
    imagesSearchKeyword: getSearchKeyword(state),
    isLoadingImages: getIsLoadingImages(state),
    imagesList: getImagesList(state),
    imagesErrorMessage: getImagesErrorMessage(state),
    isUploadingImage: getIsUploadingImage(state),
    uploadErrorMessage: getUploadErrorMessage(state)
    

});

export default connect(mapStateToProps, {
    changeSelectedPanel,
    changeBusinessName,
    changeBusinessDesc,
    changeWebsiteUrl,
    addOpeningHours,
    editOpeningHours,
    deleteOpeningHours,
    searchKeywordChanged,
    handleSearchImages,
    selectedImageChanged,
    uploadingImage,
    imageUploadedSuccessfully,
    imageUploadFailed,
    resetScheme
})(AppCreator);



