import ListCardItem from 'components/ListCardItem';
import React from 'react';

const sampleArray = [1, 2, 3];

// TODO
// Replace the div with a pagination component
// List Card item should be inside of a col
// Parent view should be in a row
// OnChange Pagination dispatch fetch vehicle

const CardList = () => {
  return (
    <div className="pagination">
      {sampleArray.map(item => (
        <ListCardItem key={item} />
      ))}
    </div>
  );
};

export default CardList;
