import { Component } from "react";
import TimePicker from "./TimePicker";
import WeekdayPicker from "./WeekdayPicker";
import IconButton from 'material-ui/IconButton';
import SvgSaveButton from "material-ui/svg-icons/content/save";
import SvgCancelButton from "material-ui/svg-icons/content/undo";
import { error } from "util";

export default class WeekdaysRangeEdit extends Component {
    state = Object.assign({error:""}, this.props.data);

    handleSelectedTimeFromChange(value) {
        this.setState({
            openFrom: value
        });
    }

    handleSelectedTimeToChange(value) {
        this.setState({
            openTo: value
        });
    }

    handleSelectedDayFromChange(value) {
        this.setState({
            dayFrom: value
        });
    }

    handleSelectedDayToChange(value) {
        this.setState({
            dayTo: value
        });
    }

    validateInput() {
        const { dayFrom, dayTo, openFrom, openTo } = this.state;
        if (dayFrom === -1) {
            return "Please select 'from' day";
        }
        if (dayTo === -1) {
            return "Please select 'to' day";
        }
        if (openFrom === -1) {
            return "Please select 'from' hour";
        }
        if (openTo === -1) {
            return "Please select 'to' hour";
        }

        if (dayTo < dayFrom && dayTo > 0) {
            return "Invalid days of week range";
        }
        if (openTo < openFrom) {
            return "Invalid opening hours";
        }
        return "";
    }

    handleSaveChangesClick() {
        let error = this.validateInput();
        if (error === "") {
            let index = this.props.index;
            let data = Object.assign({}, this.state);
            this.props.onSaveChangesClick(index, data);
            this.setState({
                error:""
            });
        } else {
            this.setState({
                error
            });
        }

        
    }

    render() {

        const style = {
            errorLabel: {
                verticalAlign: "middle",
                display: "inline-block",
                height: 70,
                marginLeft: 15,             
                lineHeight: "normal",
                fontWeight: "bold",
                color: "red",
                fontSize: 14
            },
            label: {
                verticalAlign: "middle",
                display:"inline-block",
                height: 70,
                marginLeft: 15,
                marginRight: 15,
                lineHeight: "normal"
            },
            button: {
                verticalAlign: "middle",
                display: "inline-block",
                marginTop: -52             
            }
        };
        

        const { dayFrom, dayTo, openFrom, openTo, error } = this.state;
        
        return <div>
            
            <label style={style.label}>Days: </label>
            <WeekdayPicker selectedDay={dayFrom} onSelectedDayChange={(event, index, value) => this.handleSelectedDayFromChange(value)} />

            <label style={style.label}>-</label>
           
            <WeekdayPicker selectedDay={dayTo} onSelectedDayChange={(event, index, value) => this.handleSelectedDayToChange(value)} />{" "}
            <label style={style.label}>Hours: </label>

            <TimePicker selectedTime={openFrom} 
                onSelectedTimeChange={(event, index, value) => this.handleSelectedTimeFromChange(value)} />
            <label style={style.label}>-</label>
            <TimePicker selectedTime={openTo} 
                onSelectedTimeChange={(event, index, value) => this.handleSelectedTimeToChange(value)} />
            <IconButton tooltip="Save" style={style.button}>
                <SvgSaveButton onClick={() => this.handleSaveChangesClick()} />
            </IconButton>
            <IconButton tooltip="Cancel" style={style.button}>
                <SvgCancelButton onClick={() => this.props.onCancelChangesClick(this.props.index)} />
            </IconButton>
            {
                error !== "" && <label style={style.errorLabel}>{error}</label>
            }
        </div>
    }
}

