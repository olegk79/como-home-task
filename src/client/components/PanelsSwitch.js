import PANELS from '../const/panels';

import RaisedButton from 'material-ui/RaisedButton';

export default ({
    onButtonClick
}) => {

    const style = {
        button: {
            height: 70,
            width: 145,
            marginLeft: 20
            
        }
    }

    return <div>
        <RaisedButton style={style.button}
            label="About Us"
            backgroundColor="#e29585"
            onClick={() => onButtonClick(PANELS.ABOUT_US)}
        />

        <RaisedButton style={style.button}
            label="Images"
            backgroundColor="#78bab5"
            onClick={() => onButtonClick(PANELS.IMAGES)}
        />

        <RaisedButton style={style.button}
            label="Opening Hours"
            backgroundColor="#41cc84"
            onClick={() => onButtonClick(PANELS.OPENING_HOURS)}
        />

        <RaisedButton style={style.button}
            label="Upload Logo"
            backgroundColor="#4286f4"
            onClick={() => onButtonClick(PANELS.IMAGE_UPLOAD)}
        />

        
        
    </div>
}