import "./App.css";
import NavBar from "./component/NavBar";
import Banner from "./component/Banner";
import User from "./component/User";
import Products from "./component/Products";
import Steps from "./component/Steps";
import Pricing from "./component/Pricing";
import WorkFlow from "./component/WorkFlow";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
      <User></User>
      <Products></Products>
      <Steps></Steps>
      <Pricing></Pricing>
      <WorkFlow></WorkFlow>
    </>
  );
}

export default App;
