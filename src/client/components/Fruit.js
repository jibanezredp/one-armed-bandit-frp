import React from 'react';

const Fruit = ({ color, icon }) => {
  const faName = `fa fa-${icon} fa-5x ${icon == 'spinner' ? 'fa-spin' : ''}`;
  const fruitStyle = {
    color,
  };

  return (
    <div className='fruit'>
      <span className={faName} style={fruitStyle}></span>
    </div>
  );
};

Fruit.propTypes = {
  color: React.PropTypes.string.isRequired,
  icon: React.PropTypes.string.isRequired,
};

export default Fruit;
