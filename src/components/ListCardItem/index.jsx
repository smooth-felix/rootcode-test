/* eslint-disable react/jsx-wrap-multilines */
import React, { useState } from 'react';
import { Alert, Button, Card, Form, Image, InputNumber } from 'antd';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedVehicle } from 'pages/api/vehicle/vehicles.action';
import { setShoppingCart } from 'pages/api/cart/cart.action';
import { getCartItemPrice } from 'pages/api/cart/cart.selector';

const ListCardItem = ({ vehicleDetails }) => {
  const { price, currency, brand, manufactureYear, color, image } = vehicleDetails.details;

  const [bid, setBid] = useState(null);

  const dispatch = useDispatch();

  const bidPrice = useSelector(getCartItemPrice(vehicleDetails.id));

  const handleOnChange = bidValue => {
    if (bidValue > 0) setBid(bidValue);
  };

  const handleOnFinish = () => {
    dispatch(setShoppingCart({ ...vehicleDetails, bid }));
  };

  const handleOnClick = () => {
    dispatch(setSelectedVehicle(vehicleDetails.details));
  };

  return (
    <Card
      cover={
        <Image
          onClick={handleOnClick}
          style={{ alignItems: 'center', cursor: 'pointer' }}
          preview={false}
          alt="example"
          src={image || 'https://via.placeholder.com/800x500.png?text=No+Image+Found'}
        />
      }
    >
      <h4>{`${price}  ${currency}`} </h4>
      <h5>{brand}</h5>
      <h5>{manufactureYear}</h5>
      <h5>{`Color: ${color}`}</h5>
      {bidPrice ? (
        <div>
          <Alert
            message={`You have already placed a bid of ${bidPrice} LKR for this item`}
            type="success"
          />
        </div>
      ) : (
        <div>
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
        </div>
      )}
    </Card>
  );
};

ListCardItem.propTypes = {
  vehicleDetails: PropTypes.object,
  onClick: PropTypes.func,
};

export default ListCardItem;
