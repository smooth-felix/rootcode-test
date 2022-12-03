/* eslint-disable operator-linebreak */
import { Divider, Drawer } from 'antd';
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
    <Drawer
      footer={<h3>{`Total Cart Value is ${totalCartValue} LKR`}</h3>}
      title="List of Biddings"
      open={drawerVisibility}
      onClose={handleOnClose}
    >
      {cartListing.length === 0 && <h3>No Items in the list yet</h3>}
      {cartListing.length !== 0 &&
        cartListing.map(item => (
          <>
            <CartItem key={item.id} itemDetails={item} />
            <Divider />
          </>
        ))}
    </Drawer>
  );
};

export default ShoppingCart;
