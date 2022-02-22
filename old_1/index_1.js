function APP1() {
  // Adding JSX to root with append (regural js)
  const jsx = (
    <div>
      <h1>This is JSX with 4 elements</h1>
      <ul>
        <li>One</li>
        <li>Two</li>
      </ul>
      <p>Hello, my name is Gin</p>
      <p>What's next?</p>
    </div>
  );

  const root = document.getElementById("root");

  //root.append(JSON.stringify(jsx));
  console.log(jsx);

  ReactDOM.render(jsx, root);
}

APP1();
