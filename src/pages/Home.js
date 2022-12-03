/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { Layout, Menu, Pagination, Select } from 'antd';
import CardList from 'components/CardList';
import { vehicleBrands } from 'constants/globalConstants';
import { useDispatch } from 'react-redux';
import ShoppingCartBadge from 'components/shoppingCartBadge';
import ShoppingCart from 'components/Cart/ShoppingCart';
import { fetchVehiclesData } from './api/vehicle/vehicles.action';

const { Header, Content, Footer } = Layout;

const HomePage = () => {
  const [filterType, setFilterType] = useState('All');
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();

  const getData = async () => {
    const queryParams = {};
    if (filterType !== 'All') {
      queryParams['details.brand'] = filterType;
    }
    if (filterType === 'All') {
      queryParams._page = page;
      queryParams._limit = 4;
    }
    dispatch(fetchVehiclesData({ queryParams }));
  };

  const handlePageChange = tmpPage => {
    setPage(tmpPage);
  };

  const handleOnChange = e => {
    setPage(1);
    setFilterType(e);
  };

  useEffect(() => {
    getData();
  }, [filterType, page]);

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
          {filterType === 'All' && <Pagination style={{ marginTop: 20 }} total={15} pageSize={4} current={page} onChange={handlePageChange} />}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Rootcode Practical Test - Rathindu 2022</Footer>
    </Layout>
  );
};

export default HomePage;
