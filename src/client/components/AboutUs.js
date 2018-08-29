import TextField from 'material-ui/TextField';


export default ({
    businessName,
    onBusinessNameChange,
    desc,
    onDescChange,
    websiteUrl,
    onUrlChange
}) => {

    const style = {
        textField: {
            width: 300,
            marginLeft: 10
        }
    }

    return <div>
        <TextField style={style.textField}
            hintText="Business Name"
            floatingLabelText="Business Name"
            onChange={onBusinessNameChange}
            value={businessName}
        /> 

        <br/>

        

        <TextField style={style.textField}
            hintText="Description"
            floatingLabelText="Description"
            multiLine={true}
            rowsMax={5}
            value={desc}
            onChange={onDescChange}
        />
        <br/>

        

        <TextField style={style.textField}
            hintText="Website Url"
            floatingLabelText="Website Url"
            value={websiteUrl}
            onChange={onUrlChange}
        />
        <br />

        

    </div>
}