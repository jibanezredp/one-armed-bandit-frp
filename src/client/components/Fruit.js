import React from 'react';

class Fruit extends React.Component {

  shouldComponentUpdate(nextProps) {
    return (nextProps.icon !== this.props.icon) ||
      (nextProps.color !== this.props.color);
  }

  render() {
    const { color, icon } = this.props;
    const faName = `fa fa-${icon} fa-5x ${icon === 'spinner' ? 'fa-spin' : ''}`;
    const fruitStyle = { color };

    return (
      <div className='fruit'>
        <span className={faName} style={fruitStyle}></span>
      </div>
    )
  }
}

Fruit.propTypes = {
  color: React.PropTypes.string.isRequired,
  icon: React.PropTypes.string.isRequired,
};

export default Fruit;
