import React from 'react';
import R from 'ramda';
import Fruit from '../components/Fruit';

const App = ({ fruits }) => {

  const fruitElems = (fruit) => <Fruit {...fruit} key={fruit.id} />;

  return (
    <div className='one-armed-bandit'>
      {R.values(R.map(fruitElems)(fruits))}
    </div>
  );
};

App.propTypes = {
  fruits: React.PropTypes.object.isRequired,
};

export default App;
