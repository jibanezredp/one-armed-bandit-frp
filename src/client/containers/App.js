import React from 'react';
import R from 'ramda';
import Fruit from '../components/Fruit';

class App extends React.Component {

  state = {
    fruits: [],
  };

  componentWillMount() {
    const { store } = this.props;
    store.rollFruits();
    store.suscribe((fruits) => this.setState({ fruits }));
  }

  render() {
    return (
      <div className='one-armed-bandit'>
        {R.map(fruit => <Fruit {...fruit} key={fruit.id} />)(this.state.fruits)}
      </div>
    );
  }
}

App.propTypes = {
  store: React.PropTypes.object.isRequired,
};

export default App;
