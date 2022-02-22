import Header from "./Header";

function Footer() {
  return (
    <div>
      <footer>@ 2022 Gintautas development. All rights reserved.</footer>
    </div>
  );
}

function Main() {
  return (
    <div>
      <h1>Reasons I'm excited to learn React</h1>
      <ol>
        <li>I need it for my batchler</li>
        <li>I whant to improve my coding skills</li>
        <li>It will probalby will be usefull in the future</li>
        <li>It seems fun</li>
      </ol>
    </div>
  );
}

function Page() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

ReactDOM.render(<Page />, document.getElementById("root"));
