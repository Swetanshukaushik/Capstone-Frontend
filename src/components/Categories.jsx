import React from 'react'
import { usePaginationContext } from '../contexts/PaginationContext'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { Drawer } from '@mui/material';
import { Menu, MenuItem } from '@mui/material';





function Categories(props) {
  const { categories, setCurrCategory, searchFunction } = props;
  const { setPageNum } = usePaginationContext();
  const quantity  = useSelector((store) => { return store.cartReducer.cartQuantity })
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };
  
  const handleMenuClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  return (
    <>
      <button className="menu-container"
        onClick={handleMenuOpen}>Select categories</button>
      <Menu
        open={open}
        onClose={handleMenuClose}
        anchorEl={anchorEl}
      >
        <MenuItem onClick={() => {
          setCurrCategory("All categories");
          setPageNum(1);
        }}>
        All categories
        </MenuItem>
        {categories?.map((category, index) => (
          <MenuItem key={index} onClick={() => {
            setCurrCategory(category);
            setPageNum(1);
          }}>
            {category}
          </MenuItem>
        ))}
        
      </Menu>
      {searchFunction()}
      <div className='checkout_cart_link'>
        <Link to="/cart">
          <div className="cart_container">
              Checkout Cart
            <ShoppingCartIcon className="cart_icon"></ShoppingCartIcon>
            <div className="cart_quantity">{quantity}</div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Categories