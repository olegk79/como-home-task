import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import CircularProgress from "material-ui/CircularProgress";
import { GridList, GridTile } from 'material-ui/GridList';
//import { Component } from "react";

export default ({
    imagesSearchKeyword,
    isLoadingImages,
    imagesList,
    imagesErrorMessage,
    onSearchTextChange,
    onSearchButtonClick,
    onImageClick
}) => {
    

    const style = {
        gridDiv: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around'
        },
        gridList: {
            width: 950,
            height: 600,
            overflowY: 'auto'
        },
        gridTile: {
            width: 150, height: 150
        },
        outerDiv: {
            marginLeft: 10,
            marginTop: 10
        },
        button: {
            marginLeft: 20
        },
        noResultsLabel: {
            marginTop: 15
        },
        errorMessageLabel: {
            color: "red"
        }
    }

    return <div style={style.outerDiv}>
        <div>
            <TextField value={imagesSearchKeyword} hintText="Keyword" onChange={onSearchTextChange} />
            {
                isLoadingImages ? <CircularProgress /> : <RaisedButton label="Search" style={style.button} onClick={onSearchButtonClick} primary={true} />
            }

            
        </div>
        <div>
            
            {
                imagesErrorMessage !== "" && <label style={style.errorMessageLabel}>{imagesErrorMessage}</label>
            }
            {
                !isLoadingImages &&
                imagesSearchKeyword !== "" &&
                imagesErrorMessage === "" &&
                imagesList.length === 0 && <label style={style.noResultsLabel}>No results found</label>
            }
            {
                imagesErrorMessage === "" && imagesList.length > 0 &&

                <div style={style.gridDiv}>
                    <GridList style={style.gridList} cols={5} cellHeight={150}>
                        {
                            imagesList.map((image, idx) => <GridTile style={style.gridTile} key={idx}>
                                <img src={image.previewURL} onClick={() => onImageClick(idx)} />
                            </GridTile>)
                        }
                    </GridList>
                    </div>
                
            }
        </div>
    </div>
}

//style={style.gridTile}

//width={150} height={150}

