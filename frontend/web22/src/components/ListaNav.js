function ListaNav(props) {
    return (
        <li>
            <a className={props.class} href={props.link}>
                {props.text}
            </a>
        </li>
    );
};

export default ListaNav;