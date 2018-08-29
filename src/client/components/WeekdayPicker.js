import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import daysOfWeek from "../const/weekdays";

export default ({
    selectedDay,
    onSelectedDayChange
}) => {

    const style = {
        selectField: {
            width: 150
        }
    }

    

    let items = [];
    for (var i = 0; i <= 6; i++) {
        items.push(<MenuItem key={i} primaryText={daysOfWeek[i]} value={i} />);
    }

    return <SelectField style={style.selectField} value={selectedDay} onChange={onSelectedDayChange}>
        {items}
    </SelectField>;
}