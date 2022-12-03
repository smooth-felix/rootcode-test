import { Modal, Image, Card } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getModalVisibility, getSelectedVehicle } from 'pages/api/vehicle/vehicles.selector';
import { clearSelectedVehicle } from 'pages/api/vehicle/vehicles.action';

const ItemCardPopUp = () => {
  const isModalVisible = useSelector(getModalVisibility);
  const vehicleDetails = useSelector(getSelectedVehicle);

  const dispatch = useDispatch();

  const { price, currency, brand, manufactureYear, color, image, description } = vehicleDetails;

  const handleClose = () => {
    dispatch(clearSelectedVehicle());
  };
  return (
    <Modal
      footer={null}
      open={isModalVisible}
      onCancel={handleClose}
      title={`${brand}  ${manufactureYear}`}
    >
      <Card
        cover={
          // eslint-disable-next-line react/jsx-wrap-multilines
          <Image
            style={{ alignItems: 'center' }}
            preview={false}
            // width={200}
            // height={125}
            alt="example"
            src={image || 'https://via.placeholder.com/800x500.png?text=No+Image+Found'}
          />
        }
      >
        <h4>{`${price}  ${currency}`} </h4>
        <h5>{`Color: ${color}`}</h5>
        <p>{description}</p>
      </Card>
    </Modal>
  );
};

export default ItemCardPopUp;
