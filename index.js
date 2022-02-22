function NavBar() {
    return(<div>
        <ul>
            <li>Main</li>
            <li>About</li>
        </ul>
    </div>)
}

function MainContent() {
    return(<div>
        <p>This is main content!</p>
        <p>React is component based (Basicly you solve a puzle)</p>
        <p>React is declarative (What should be done?)</p>
        <p>Imperative - how it should be done?</p>
    </div>)
}

ReactDOM.render(
    <div>
        <NavBar />
        <MainContent />
    </div>,
    document.getElementById("root")
);