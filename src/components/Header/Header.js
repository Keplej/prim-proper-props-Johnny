function Header(props) {
    console.log('My props are:', props);
    return (
        <header>
            <h1>{props.text}</h1>
        </header>
    )
}

export default Header;