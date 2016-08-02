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
    store.onEnd(() => this.setState({
      fruits: [
        { id: 0, icon: 'paper-plane', color: '#F34235' },
        { id: 1, icon: 'paper-plane', color: '#F34235' },
        { id: 2, icon: 'paper-plane', color: '#F34235' },
        { id: 3, icon: 'paper-plane', color: '#F34235' },
        { id: 4, icon: 'paper-plane', color: '#F34235' },
      ],
    }));
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
