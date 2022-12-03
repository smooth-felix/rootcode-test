import React, { useEffect, useState } from 'react';
import { Layout, Menu, Select } from 'antd';
import CardList from 'components/CardList';
import { vehicleBrands } from 'constants/globalConstants';
import { useDispatch } from 'react-redux';
import ShoppingCartBadge from 'components/shoppingCartBadge';
import ShoppingCart from 'components/Cart/ShoppingCart';
import { fetchVehiclesData } from './api/vehicle/vehicles.action';

const { Header, Content, Footer } = Layout;

const HomePage = () => {
  const [filterType, setFilterType] = useState('All');

  const dispatch = useDispatch();

  const getData = async () => {
    let queryParams = {};
    if (filterType !== 'All') {
      queryParams = { 'details.brand': filterType };
    }
    dispatch(fetchVehiclesData({ queryParams }));
  };

  const handleOnChange = e => {
    setFilterType(e);
  };

  useEffect(() => {
    getData();
  }, [filterType]);

  return (
    <Layout className="layout">
      <Header className="nav-bar">
        <Menu style={{ float: 'right' }}>
          <Menu.Item key="shoppingCart">
            <ShoppingCartBadge />
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <ShoppingCart />
        <div className="site-layout-content">
          <span style={{ marginRight: 20 }}>Filter By Brand:</span>
          <Select style={{ width: 200, marginBottom: 30 }} size="middle" value={filterType} onChange={handleOnChange}>
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
