import React from 'react';
import { Card } from 'antd';
import PropTypes from 'prop-types';

const ListCardItem = ({ imageUrl }) => {
  return (
    <Card
      style={{ width: 300 }}
      cover={(
        <img
          alt="example"
          src={imageUrl}
        />
      )}

    >
      <p>This is the card Content</p>
    </Card>
  );
};

ListCardItem.propTypes = {
  imageUrl: PropTypes.string,
};

export default ListCardItem;
