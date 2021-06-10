import './App.css';
import Card from "./component/Card";
import Nav from "./component/Navbar";
import Collapse from "./component/Collapse";

const App = () => {
  return (
    <div className="App">
      <Nav />
      <div className="container">
        <div className="row gx-2 ">
          <div className="col">
            <Collapse id="card1" cardNumber="first Card">
              <Card title="Crad n1" cardText="Lorem impsum 1" image="https://picsum.photos/id/1/200/300" />
              
            </Collapse >
          </div>
          <div className="col">
            <Collapse id="card2" cardNumber="second Card">
              <Card title="Crad n2" cardText="Lorem impsum 2" image="https://picsum.photos/id/20/200/300" />
            </Collapse >
          </div>
          <div className="col">
            <Collapse id="card3" cardNumber="last Card">
              <Card title="Crad n3" cardText="Lorem impsum 3" image="https://picsum.photos/id/115/200/300" />
            </Collapse >
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
