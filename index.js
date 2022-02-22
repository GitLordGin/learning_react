function VanilaAPP() {
  // This is imperative aproach
  // ReactDOM.render(
  //     <h1 className="header">Hello, React!</h1>,
  //     document.getElementById("root")
  // );
  const root = document.getElementById("root");
  const header = document.createElement("h1");
  const text = document.createTextNode("Hello, React!");
  header.appendChild(text);
  root.appendChild(header);

  const header2 = document.createElement("h1");
  header2.textContent = "Hello, React!2";
  header2.className = "header";
  root.appendChild(header2);
}

function ReactAPP() {
  // This is declarative aproach
  ReactDOM.render(
    <div>
      <NavBar />
      <MainContent />
    </div>,
    document.getElementById("root")
  );
}

function NavBar() {
  return (
    <div>
      <ul>
        <li>Main</li>
        <li>About</li>
      </ul>
    </div>
  );
}

function MainContent() {
  return (
    <div>
      <p>This is main content!</p>
      <p>React is component based (Basicly you solve a puzle)</p>
      <p>React is declarative (What should be done?)</p>
      <p>Imperative - how it should be done?</p>
    </div>
  );
}

//VanilaAPP();
ReactAPP();