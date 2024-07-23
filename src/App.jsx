
import './App.css'
import NavBar from './components/NavBar';
import { Routes, Route, Navigate } from "react-router-dom";

import Signup from "./pages/Signup";
import PaginationProvider from './contexts/PaginationContext';

import PageNotFound from './pages/PageNotFound'
import Home from './pages/Home';
import Login from "./pages/Login";
import RequireAuth from './components/RequireAuth'
import ProductDetails from './pages/ProductDetails';
import Cart from "./pages/Cart";
import User from './pages/User';


// function loadScript() {
//   return new Promise(function (resolve, reject) {
//     const script = document.createElement('script')
//     script.src = "https://checkout.razorpay.com/v1/checkout.js";
//     script.onload = function () {
//       resolve();
//     };
//     script.onerror = () => {
//       reject()
//     }
//     document.body.appendChild(script);
//   })

// }

// async function displayRazorpay() {
//   // to load the script
//   try {
//     await loadScript();
//     const resp = await fetch("http://localhost:3000/api/payment/pay",{ method: "POST"})
//     const respJson = await resp.json();
//     const { id, currency, amount } = respJson.message;
//     console.log(id, currency, amount);

//     const options = {
//       key: 'rzp_test_hiu2v91R1NyK8y',
//       currency,
//       amount: amount.toString(),
//       // id over here should be same 
//       order_id: id,
//       name: 'Payment',
//       description: 'Thanks for the payment',
//       handler: function (response) {
//         alert("payment id" + response.razorpay_payment_id)
//         alert("order id " + response.razorpay_order_id)
//         alert(response.razorpay_signature)
//       },
//       prefill: {
//         name: "Swetanshu",
//         email: "swetanshu97@gmail.com",
//         phone_number: '9899999999'
//       }
//     }

//     var rzp1 = new Razorpay(options);
//     rzp1.open();
//   } catch (err) {
//     alert(err.message)
//   }
// }

function App() {
  return (
    //FOR RAZOR INTEGRATION
    // <>
    //   <div>
    //     <img src={viteLogo} className="logo" alt="Vite logo" />
    //     <img src={reactLogo} className="logo react" alt="React logo" />

    //   </div>
    //   <h1>Payment Demo</h1>
    //   <div className="card">
    //     <a onClick={displayRazorpay}
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >Pay for 500 rs</a>
    //   </div>
    // </>
    <PaginationProvider>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home></Home>}> </Route>
        <Route element={<RequireAuth></RequireAuth>}>
          <Route path="/cart" element={<Cart></Cart>}></Route>
        </Route>
        <Route path="/product/:id" element={<ProductDetails></ProductDetails>}> </Route>
        <Route path="/user" element={<User></User>}> </Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/home" element={<Navigate to="/"></Navigate>}></Route>
        <Route path="*" element={<PageNotFound></PageNotFound>}> </Route>
      </Routes>
    </PaginationProvider>
  )
}

export default App;
