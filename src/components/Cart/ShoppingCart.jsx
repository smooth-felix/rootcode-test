import { Drawer } from 'antd';
import { setCartDrawerVisibility } from 'pages/api/cart/cart.action';
import { getCartItems, getDrawerVisibility, getTotalCartValue } from 'pages/api/cart/cart.selector';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartItem from './cartItem';

const ShoppingCart = () => {
  const dispatch = useDispatch();

  const drawerVisibility = useSelector(getDrawerVisibility);
  const cartListing = useSelector(getCartItems);
  const totalCartValue = useSelector(getTotalCartValue);

  const handleOnClose = () => {
    dispatch(setCartDrawerVisibility(false));
  };
  return (
    <Drawer title="List of Biddings" open={drawerVisibility} onClose={handleOnClose}>
      {cartListing.map(item => (
        <CartItem key={item.id} itemDetails={item} />
      ))}
      <h2>{`Total Cart Value is ${totalCartValue} LKR`}</h2>
    </Drawer>
  );
};

export default ShoppingCart;
