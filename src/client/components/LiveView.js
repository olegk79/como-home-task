//dependencies
import { Component } from "react";
import { connect } from "react-redux";

//State Selectors
import {
    getBusinessDesc,
    getWebsiteUrl,
    getBusinessName,
    getOpeningHours,
    getSelectedImageUrl,
    getColorScheme
} from "../reducers";

import daysOfWeek from "../const/weekdays";
import "./App.css";

class LiveView extends Component {

    render() {
        const {
            businessName,
            businessDesc,
            websiteUrl,
            openingHours,
            selectedImageUrl,
            colorScheme } = this.props;

        

        let opHoursList = openingHours.filter(oh=>!oh.isBeingEdited).map((oh,idx) => {
            let daysRangeText = oh.dayFrom !== oh.dayTo ?
                `${daysOfWeek[oh.dayFrom]} - ${daysOfWeek[oh.dayTo]}` :
                `${daysOfWeek[oh.dayFrom]}`;
            let labeltext = `${daysRangeText} ${oh.openFrom}:00 - ${oh.openTo}:00`;
            return <p key={idx}>{labeltext}</p>;
        });

        let colorStyle = {};
        if (colorScheme) {
            colorStyle.background = colorScheme[0];
            colorStyle.color = colorScheme[1];
        }

        const style = {
            upperDiv: {
                marginTop: 5,
                textAlign: "center"
            },
            businessNameLabel: {
                verticalAlign: "middle",
                display: "inline-block",
                height: 85,
                marginLeft: 15,
                lineHeight: "normal",
                fontWeight: "bold"
            },
            businessNameH3: {
                textAlign: "center"
            },
            innerContentDiv: {
                marginLeft: 5,
                marginTop: 10,
                marginRight: 5
            }
        }

        return <div className="smartphone">
            <div className="content" style={colorStyle}>
                

                {
                    selectedImageUrl !== "" && <div style={style.upperDiv}>
                        <img width={70} height={70} src={selectedImageUrl} />
                        <h3 style={style.businessNameLabel}>{businessName}</h3>
                    </div>
                }
                {
                    selectedImageUrl === "" && <div style={style.upperDiv}><h3>{businessName}</h3></div>
                }
                <div style={style.innerContentDiv}>
                    <p>{businessDesc}</p>
                    {
                        opHoursList.length > 0 && <div>
                            <label style={{ fontWeight:"bold" }}>Opening hours:</label>
                            <br />
                            {
                                opHoursList
                            }
                        </div>
                    }
                    {
                        websiteUrl !== "" && <p>Join us on:<br />
                            <a href={websiteUrl}>{websiteUrl}</a>
                        </p>
                    }
                    </div>
                
                
            </div>
        </div>                 
    }
}


const mapStateToProps = state => ({
    businessName: getBusinessName(state),
    businessDesc: getBusinessDesc(state),
    websiteUrl: getWebsiteUrl(state),
    openingHours: getOpeningHours(state),
    selectedImageUrl: getSelectedImageUrl(state),
    colorScheme: getColorScheme(state)
});

export default connect(mapStateToProps, {})(LiveView);


