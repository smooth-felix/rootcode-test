/* eslint-disable operator-linebreak */
import { Modal, Image, Card } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getModalVisibility, getSelectedVehicle } from 'pages/api/vehicle/vehicles.selector';
import { clearSelectedVehicle } from 'pages/api/vehicle/vehicles.action';
import ColorCard from 'components/colorCard';
import BidSection from 'components/bidSection';

const ItemCardPopUp = () => {
  const isModalVisible = useSelector(getModalVisibility);
  const vehicleDetails = useSelector(getSelectedVehicle);

  const { details, name } = vehicleDetails;

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(clearSelectedVehicle());
  };
  return (
    <div>
      {vehicleDetails.details && (
        <Modal
          footer={null}
          open={isModalVisible}
          onCancel={handleClose}
          title={`${details.brand} ${name} ${details.manufactureYear}`}
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
                src={details.image || 'https://via.placeholder.com/800x500.png?text=No+Image+Found'}
              />
            }
          >
            <ColorCard styles={{ width: 50 }} colorCode={details.color} />
            <h4>{`${details.price}  ${details.currency}`} </h4>
            <p>{details.description}</p>
            <BidSection vehicleDetails={vehicleDetails} />
          </Card>
        </Modal>
      )}
    </div>
  );
};

export default ItemCardPopUp;
