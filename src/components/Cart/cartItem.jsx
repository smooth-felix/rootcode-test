import React from 'react';

import PropTypes from 'prop-types';
import { Row, Col, Image } from 'antd';

const CartItem = ({ itemDetails }) => {
  const { details, bid } = itemDetails;
  const { image, currency, brand, manufactureYear, description } = details;
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
    </Row>
  );
};

CartItem.propTypes = {
  itemDetails: PropTypes.object,
};

export default CartItem;
