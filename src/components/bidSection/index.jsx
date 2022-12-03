import { Alert, Button, InputNumber } from 'antd';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { setShoppingCart } from 'pages/api/cart/cart.action';
import { getCartItemPrice } from 'pages/api/cart/cart.selector';

const BidSection = ({ vehicleDetails }) => {
  const [bid, setBid] = useState(null);

  const bidPrice = useSelector(getCartItemPrice(vehicleDetails.id));

  const { price, currency } = vehicleDetails.details;
  console.log(vehicleDetails);

  const dispatch = useDispatch();

  const handleOnFinish = () => {
    dispatch(setShoppingCart({ ...vehicleDetails, bid }));
  };

  const handleOnChange = value => {
    if (value > 0) setBid(value);
  };

  return (
    <div>
      {bidPrice ? (
        <div>
          <Alert
            message={`You have already placed a bid of ${bidPrice} LKR for this item`}
            type="success"
          />
        </div>
      ) : (
        <>
          <InputNumber
            style={{ marginBottom: 10 }}
            onChange={handleOnChange}
            value={bid}
            addonAfter={currency}
            min={currency}
          />
          {bid && bid < price && (
            <p style={{ color: 'red' }}>
              Please input a value greater than the price of the vehicle
            </p>
          )}
          <Button onClick={handleOnFinish} primary="true" disabled={bid < price}>
            Add to Biddings
          </Button>
        </>
      )}
    </div>
  );
};
BidSection.propTypes = {
  vehicleDetails: PropTypes.object,
};
export default BidSection;
