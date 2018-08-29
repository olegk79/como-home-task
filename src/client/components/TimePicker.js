import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

export default ({
    selectedTime,
    onSelectedTimeChange }) => {

    
    const style = {
        selectField: {
            width: 95
        }
    }

    let items = [];
    for (var hour = 0; hour <= 23; hour++) {
        items.push(<MenuItem key={hour} primaryText={`${hour}:00`} value={hour} />);
    }
    return <SelectField style={style.selectField} value={selectedTime} onChange={onSelectedTimeChange}>
        {items}
    </SelectField>;
}

