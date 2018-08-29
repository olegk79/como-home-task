import IconButton from 'material-ui/IconButton';

import SvgEditButton from "material-ui/svg-icons/image/edit";
import SvgDeleteButton from "material-ui/svg-icons/action/delete";

import daysOfWeek from "../const/weekdays";


export default ({
    index,
    data,
    onEditClick,
    onDeleteClick,
    isSomethingEdited
}) => {

    

    let daysRangeText = data.dayFrom !== data.dayTo ?
        `${daysOfWeek[data.dayFrom]} - ${daysOfWeek[data.dayTo]}` :
        `${daysOfWeek[data.dayFrom]}`;

    const style = {
        label: {
            verticalAlign: "middle",
            display: "inline-block",
            height: 35,
            marginLeft: 15,
            lineHeight: "normal"
        }
    };

    return <div>
        <IconButton tooltip="Edit" onClick={() => onEditClick(index)} disabled={isSomethingEdited}>
            <SvgEditButton />
        </IconButton>
        <IconButton tooltip="Delete" onClick={() => onDeleteClick(index)} disabled={isSomethingEdited}> 
            <SvgDeleteButton />
        </IconButton>
        <label style={style.label}>{daysRangeText} {data.openFrom}:00 - {data.openTo}:00</label>
        
        </div>
}