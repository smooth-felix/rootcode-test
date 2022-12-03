/* eslint-disable operator-linebreak */
import { Row, Col, Spin } from 'antd';
import ItemCardPopUp from 'components/ItemCardPopUp';
import ListCardItem from 'components/ListCardItem';
import { getVehicles, getVehiclesLoading } from 'pages/api/vehicle/vehicles.selector';
import React from 'react';
import { useSelector } from 'react-redux';

const CardList = () => {
  const vehicles = useSelector(getVehicles);
  const vehiclesLoading = useSelector(getVehiclesLoading);

  return (
    <div className="list-container">
      <ItemCardPopUp />
      <Spin spinning={vehiclesLoading} size="large" tip="Loading Data">
        <Row gutter={[16, 16]} className="pagination">
          {vehicles &&
            vehicles.map(item => (
              <Col key={item.id} span={6}>
                <ListCardItem key={item.id} vehicleDetails={item} />
              </Col>
            ))}
        </Row>
      </Spin>
    </div>
  );
};

export default CardList;
