import React from 'react';
import PropTypes from 'prop-types';

const ColorCard = ({ colorCode, styles }) => {
  return (
    <div
      style={{
        ...styles,
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
  styles: PropTypes.object,
};

export default ColorCard;
