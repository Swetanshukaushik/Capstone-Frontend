import { useSelector } from "react-redux";
import { useState,useEffect } from "react";


function Cart() {
  const productList = useSelector((store) => store.cartReducer.cartProducts);
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalContents, setTotalContents] = useState(0);

  useEffect(() => {
    const calculateTotalAmount = () => {
      const total = productList.reduce((acc, product) => acc + product.price * product.incQuantity, 0);
      setTotalAmount(total);
    };

    const calculateTotalContents = () => {
      const total = productList.reduce((acc, product) => acc + product.incQuantity, 0);
      setTotalContents(total);
    };
    console.log(productList);
    calculateTotalAmount();
    calculateTotalContents();
  }, [productList]);


  const handleProceedToPayment = () => {
    // TO DO: implement payment logic here
    console.log("Proceed to payment");
  };

  return (
    <div className="cart-container">
      <h1 className="cart-title">Checkout Cart</h1>
      <h2 className="cart-subtitle">Product List</h2>
      <div className="cart-product-wrapper">
        {productList.map((product) => (
          <div key={product.id} className="cart-product">
            <div className="product-image-container">
              <img src={product.images[0]} alt={product.name} className="cart-product-image" />
            </div>
            <div className="product-details-container">
              <h3 className="cart-product-name">{product.name}</h3>
              <p className="cart-product-price">Price: ${product.price}</p>
              <p className="cart-product-quantity">Quantity: {product.incQuantity}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h2 className="cart-summary-title">Cart Summary</h2>
        <p className="cart-summary-contents">Total Contents: {totalContents}</p>
        <p className="cart-summary-amount">Total Amount: ${totalAmount}</p>
        <button className="cart-proceed-button  right-align" onClick={() => handleProceedToPayment()}>Proceed to Payment</button>
      </div>
    </div>
  );
}

export default Cart