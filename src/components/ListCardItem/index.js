import React from 'react';
import { Button, Card, Form, Image, InputNumber } from 'antd';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setSelectedVehicle } from 'pages/api/vehicles.action';

const ListCardItem = ({ vehicleDetails }) => {
  const { price, currency, brand, manufactureYear, color, image } = vehicleDetails;

  const dispatch = useDispatch();

  const [form] = Form.useForm();

  const validateMessages = {
    number: {
      // eslint-disable-next-line no-template-curly-in-string
      range: '${label} must be larger than ${min}',
    },
  };

  const validateForm = () => {
    form.validateFields().then(values => console.log(values));
  };

  const handleOnFieldChange = async field => {

  };

  const handleOnFinish = values => {
    validateForm();
  };

  const handleOnClick = () => {
    dispatch(setSelectedVehicle(vehicleDetails));
  };

  return (
    <Card
      cover={(
        <Image
          onClick={handleOnClick}
          style={{ alignItems: 'center' }}
          preview={false}
          alt="example"
          src={image || 'https://via.placeholder.com/800x500.png?text=No+Image+Found'}
        />
      )}

    >
      <h4>{`${price}  ${currency}`} </h4>
      <h5>{brand}</h5>
      <h5>{manufactureYear}</h5>
      <h5>{color}</h5>
      <Form form={form} onFieldsChange={handleOnFieldChange} onFinish={handleOnFinish} validateMessages={validateMessages}>
        <Form.Item name="bid" label="Bid" rules={[{ required: true, message: 'Please input your bid!' }, { type: 'number', min: currency }]}>
          <InputNumber addonAfter={currency} min={currency} />
        </Form.Item>
        <Form.Item>
          <Button
            htmlType="submit"
            primary
          // disabled={ }
          >
            Place the Bid
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

ListCardItem.propTypes = {
  vehicleDetails: PropTypes.object,
  onClick: PropTypes.func,
};

export default ListCardItem;
