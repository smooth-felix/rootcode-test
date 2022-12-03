/* eslint-disable operator-linebreak */
import { Row, Col } from 'antd';
import ItemCardPopUp from 'components/ItemCardPopUp';
import ListCardItem from 'components/ListCardItem';
import { getVehicles } from 'pages/api/vehicles.selector';
import React from 'react';
import { useSelector } from 'react-redux';

const CardList = () => {
  const vehicles = useSelector(getVehicles);

  return (
    <div className="list-container">
      <ItemCardPopUp />
      <Row gutter={[16, 16]} className="pagination">
        {vehicles &&
          vehicles.map(item => (
            <Col key={item.id} span={6}>
              <ListCardItem key={item.id} vehicleDetails={item.details} />
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default CardList;
