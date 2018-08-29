//dependencies
import WeekdaysRangeEdit from "./WeekdaysRangeEdit";
import WeekdaysRangeReadOnly from "./WeekdaysRangeReadOnly";

import FloatingActionButton from 'material-ui/FloatingActionButton';
import SvgAdd from 'material-ui/svg-icons/content/add';

export default ({
    openingHours,
    onEditOpeningHoursClick,
    onDeleteOpeningHoursClick,
    onAddOpeningHoursClick,
    onSaveChangesClick,
    onCancelChangesClick
}) => {
    let isSomethingEdited = (openingHours.filter(oh => oh.isBeingEdited === true).length === 1);

    const style = {
        addButtonDiv: {
            marginLeft: 15,
            marginTop: 15
        }
    };

   

    return <div>
        {
            openingHours.map((openingHour,idx) => (openingHour.isBeingEdited ?
                <WeekdaysRangeEdit key={idx} data={openingHour} index={idx}
                    onSaveChangesClick={onSaveChangesClick}
                    onCancelChangesClick={onCancelChangesClick}
                /> :
                <WeekdaysRangeReadOnly key={idx} data={openingHour} index={idx}
                    isSomethingEdited={isSomethingEdited}
                    onEditClick={onEditOpeningHoursClick}
                    onDeleteClick={onDeleteOpeningHoursClick} />))
        }
        {
            !isSomethingEdited &&
            <div style={style.addButtonDiv}>
                <FloatingActionButton tooltip="Add new" mini={true} onClick={onAddOpeningHoursClick}>
                    <SvgAdd />
                </FloatingActionButton>
                </div>
            
        }
    </div>


    
    
}