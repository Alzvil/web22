function TextInput(props) {
    return (
        <div>
            <br></br>
            <label htmlFor={props.id}> {`${props.text}:`}
                <input type="text" id={props.id} name={props.id} placeholder={props.text}></input>
            </label>
        </div>
    );
};

function CheckboxInput(props) {
    return (
        <div className="checkbox-rect">
            <br></br>
            <input type="checkbox" id={props.id} name={props.id}></input>
            <label htmlFor={props.id}> {props.text}</label>
            <br></br>
        </div>
    );
};

export { TextInput, CheckboxInput };