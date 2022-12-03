/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import { Alert, Button, Card, Form, Image, InputNumber } from 'antd';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedVehicle } from 'pages/api/vehicle/vehicles.action';
import { setShoppingCart } from 'pages/api/cart/cart.action';
import { getCartItemPrice } from 'pages/api/cart/cart.selector';

const ListCardItem = ({ vehicleDetails }) => {
  const { price, currency, brand, manufactureYear, color, image } = vehicleDetails.details;

  const dispatch = useDispatch();

  const bidPrice = useSelector(getCartItemPrice(vehicleDetails.id));

  const [form] = Form.useForm();

  const validateMessages = {
    number: {
      // eslint-disable-next-line no-template-curly-in-string
      range: '${label} must be larger than ${min}',
    },
  };

  const handleOnFieldChange = async field => {};

  const handleOnFinish = values => {
    dispatch(setShoppingCart({ ...vehicleDetails, bid: values.bid }));
    // form
    //   .validateFields()
    //   .then(value => {
    //     dispatch(setShoppingCart(vehicleDetails));
    //   })
    //   .catch(error => error);
  };

  const handleOnClick = () => {
    dispatch(setSelectedVehicle(vehicleDetails.details));
  };

  return (
    <Card
      cover={
        <Image
          onClick={handleOnClick}
          style={{ alignItems: 'center' }}
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
        <Form
          form={form}
          onFieldsChange={handleOnFieldChange}
          onFinish={handleOnFinish}
          validateMessages={validateMessages}
        >
          <Form.Item
            name="bid"
            label="Bid"
            rules={[
              { required: true, message: 'Please input your bid!' },
              { type: 'number', min: currency },
            ]}
          >
            <InputNumber addonAfter={currency} min={currency} />
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit" primary="true">
              Add to Biddings
            </Button>
          </Form.Item>
        </Form>
      )}
    </Card>
  );
};

ListCardItem.propTypes = {
  vehicleDetails: PropTypes.object,
  onClick: PropTypes.func,
};

export default ListCardItem;
