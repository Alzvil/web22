function Boton(props) {
    return (
        <button className={props.className} id={props.id} onClick={props.onClick}>
            <a href={props.link}>
                {props.text}
            </a>
        </button>
    );
};

export default Boton;