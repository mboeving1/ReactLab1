import "./Header.css";

interface Prop{
    user: string;
}

function Header(prop: Prop) {
    return (
        <header>
            <h1>Ice Cream Wars</h1>
            <h3>Hello, {prop.user}</h3>
        </header>
    )
}

export default Header;