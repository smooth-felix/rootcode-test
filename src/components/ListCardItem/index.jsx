/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import { Card, Image } from 'antd';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setSelectedVehicle } from 'pages/api/vehicle/vehicles.action';
import ColorCard from 'components/colorCard';
import BidSection from 'components/bidSection';

const ListCardItem = ({ vehicleDetails }) => {
  const { price, currency, brand, manufactureYear, color, image } = vehicleDetails.details;

  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch(setSelectedVehicle(vehicleDetails));
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
      <h5>{`${brand} ${vehicleDetails.name}`}</h5>
      <h5>{manufactureYear}</h5>
      <ColorCard colorCode={color} />
      <BidSection vehicleDetails={vehicleDetails} />
    </Card>
  );
};

ListCardItem.propTypes = {
  vehicleDetails: PropTypes.object,
};

export default ListCardItem;
