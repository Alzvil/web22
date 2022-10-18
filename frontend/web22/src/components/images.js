function Images(props) {
    return (
        <img className={props.className} src={`../assets/images/${props.image}.png`} alt={props.alt}></img>
    );
};

export default Images;