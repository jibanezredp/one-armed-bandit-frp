import React from 'react';

const Fruit = ({ color, name }) => {
  const faName = `fa fa-${name} fa-5x ${name == 'spinner' ? 'fa-spin' : ''}`;
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
  name: React.PropTypes.string.isRequired,
};

export default Fruit;
