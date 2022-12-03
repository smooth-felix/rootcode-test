import React, { useEffect, useState } from 'react';
import { Layout, Menu, Badge, Select } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import axios from 'axios';
import makeRequest from 'utils/request';
import CardList from 'components/CardList';
import { vehicleBrands } from 'constants/globalConstants';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVehiclesData } from './api/vehicles.action';
import { getVehicles } from './api/vehicles.selector';

const { Header, Content, Footer } = Layout;

const HomePage = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [filterType, setFilterType] = useState('All');

  const dispatch = useDispatch();

  const handleOnClick = () => {
    setOpenDrawer(true);
  };
  // Put into an action disapatch and reducer setup
  const getData = async () => {
    dispatch(fetchVehiclesData({ queryParams: { 'details.brand': 'Volkswagen' } }));
    // let queryParams;
    // if (filterType === 'All') {
    //   queryParams = '';
    // }
    // if (filterType !== 'All') {
    //   queryParams = `?details.brand=${filterType}`;
    // }

    // const url = `${process.env.REACT_APP_BASE_URL}vehicles${queryParams}`;

    // const onSuccess = res => {
    //   console.log(res);
    // };

    // const response = await makeRequest({ method: 'GET', url, onSuccess });
  };

  const handleOnChange = e => {
    setFilterType(e);
  };

  useEffect(() => {
    // replace with a dispatch
    getData();
  }, [filterType]);

  return (
    <Layout className="layout">
      <Header className="nav-bar">
        <Menu style={{ float: 'right' }}>
          <Menu.Item onClick={handleOnClick}>
            <Badge
              className="cart-badge"
              count={2}
            >
              <ShoppingCartOutlined className="cart-icon" />
            </Badge>
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content">
          <Select style={{ width: 200 }} size="middle" value={filterType} onChange={handleOnChange}>
            {vehicleBrands.map(item => <Select.Option key={item}>{item}</Select.Option>)}
          </Select>
          <CardList />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Rootcode Practical Test - Rathindu 2022</Footer>
    </Layout>
  );
};

export default HomePage;
