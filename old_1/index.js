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
  const root = document.getElementById("root");
  const page = (
    <div>
        <NavBar />
        <MainContent />
    </div>
  );
  ReactDOM.render(page, root);
}

function CompareJSXWithJS() {
  const header2 = document.createElement("h1");
  header2.textContent = "JS";
  header2.className = "header";
  console.log(header2)
  const header1 = <h1 className="header">JSX</h1>
  console.log(header1)
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
      <p>Raect uses JSX - It is javasript with html</p>
    </div>
  );
}

function APP1() {
    const root = document.getElementById("root");
    const navbar = (
        <div>
            <nav>
                <h1>website</h1>
                <ul>
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contract</li>
                </ul>
            </nav>
        </div>
    )
    ReactDOM.render(navbar, root);
}

//VanilaAPP();
//CompareJSXWithJS();
//ReactAPP();
APP1();
