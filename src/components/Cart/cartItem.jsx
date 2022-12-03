import React from 'react';

import PropTypes from 'prop-types';
import { Row, Col, Image, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { removeFromCart } from 'pages/api/cart/cart.action';

const CartItem = ({ itemDetails }) => {
  const { details, bid, id } = itemDetails;
  const { image, currency, brand, manufactureYear, description } = details;

  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeFromCart(id));
  };
  return (
    <Row gutter={[16, 16]}>
      <Col span={12}>
        <Image
          preview={false}
          src={image || 'https://via.placeholder.com/800x500.png?text=No+Image+Found'}
        />
      </Col>
      <Col span={12}>
        <h5>{`${brand} ${manufactureYear}`}</h5>
        <p>{description}</p>
        <h5>{`Current Bid is: ${bid} ${currency}`}</h5>
      </Col>
      <Col span={8} offset={12}>
        <Button danger size="small" onClick={handleRemove} style={{ fontSize: 10 }}>
          Remove item from the list
        </Button>
      </Col>
    </Row>
  );
};

CartItem.propTypes = {
  itemDetails: PropTypes.object,
};

export default CartItem;
