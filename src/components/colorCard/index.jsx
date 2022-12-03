import React from 'react';
import PropTypes from 'prop-types';

const ColorCard = ({ colorCode }) => {
  return (
    <div
      style={{
        backgroundColor: colorCode,
        height: 30,
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        marginBottom: 10,
      }}
    >
      <p>&nbsp;</p>
    </div>
  );
};

ColorCard.propTypes = {
  colorCode: PropTypes.string,
};

export default ColorCard;
