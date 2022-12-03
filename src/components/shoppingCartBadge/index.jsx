import { Badge } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCartItemNumber } from 'pages/api/cart/cart.selector';
import { setCartDrawerVisibility } from 'pages/api/cart/cart.action';

const ShoppingCartBadge = () => {
  const dispatch = useDispatch();

  const count = useSelector(getCartItemNumber);

  const handleOnClick = () => {
    dispatch(setCartDrawerVisibility(true));
  };

  return (
    <Badge onClick={handleOnClick} className="cart-badge" count={count}>
      <ShoppingCartOutlined className="cart-icon" />
    </Badge>
  );
};

export default ShoppingCartBadge;
