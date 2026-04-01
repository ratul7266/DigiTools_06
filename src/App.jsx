// import "./App.css";
// import NavBar from "./component/NavBar";
// import Banner from "./component/Banner";
// import User from "./component/User";
// import Products from "./component/Products";
// import Steps from "./component/Steps";
// import Pricing from "./component/Pricing";
// import WorkFlow from "./component/WorkFlow";
// import Footer from "./component/Footer";
// import { useState } from "react";

// const getProducts = async () => {
//   const res = await fetch("/aiTools.json");
//   return res.json();
// };
// const productPromise = getProducts();
// function App() {
//   const [activeTab, setActiveTab] = useState("model")
//   const [carts,setCarts] = useState([])
//   return (
//     <>
//       <NavBar></NavBar>
//       <Banner></Banner>
//       <User></User>
//       <Products></Products>
//       {/* name of each tab group should be unique */}
//       <div className="tabs tabs-box justify-center bg-transparent">
//         <input
//           type="radio"
//           name="my_tabs_1"
//           className="tab rounded-full w-40"
//           aria-label="Models"
//           onClick={() => setActiveTab("model")}
//           defaultChecked
//         />
//         <input
//           type="radio"
//           name="my_tabs_1"
//           className="tab rounded-full w-40"
//           aria-label={`Cart (${carts.length})`}
//           onClick={() => setActiveTab("cart")}
//         />
//       </div>
//       {activeTab === "model" && <Products modelPromise={productPromise} carts={carts} setCarts={setCarts} />}
//       {activeTab === "cart" && <Cart carts={carts} setCarts={setCarts} /> }
//       <Steps></Steps>
//       <Pricing></Pricing>
//       <WorkFlow></WorkFlow>
//       <Footer></Footer>
//     </>
//   );
// }

// export default App;

import { Suspense, useState } from "react";
import { ToastContainer } from "react-toastify";

import "./App.css";
import User from "./component/User";
import Banner from "./component/Banner";
import Steps from "./component/Steps";
import NavBar from "./component/NavBar";
import Pricing from "./component/Pricing";
import WorkFlow from "./component/WorkFlow";
import Footer from "./component/Footer";
import Product from "./component/Products";

const productsDataFun = async () => {
  const response = await fetch("/products.json");
  return response.json();
};

const productsPromise = productsDataFun();

function App() {
  const [cart, setCart] = useState([]);
  return (
    <>
      <ToastContainer />
      <NavBar cart={cart} />
      <Banner />
      <User />
      
        <Product
          productsPromise={productsPromise}
          cart={cart}
          setCart={setCart}
        />
      <Steps />
      <Suspense fallback={<div>Loading...</div>}>
        <Pricing />
      </Suspense>
      <WorkFlow />
      <Footer />
    </>
  );
}

export default App;
