import flyd from 'flyd';
import R from 'ramda';
import { icons, colors } from '../constants';
import { random } from '../helpers';

const fruitFactory = (n) => R.times((id) =>
  flyd.stream({ id, icon: 'spinner', color: 'black' }), n);

const fruits = fruitFactory(5);

const combinedFruits = flyd.combine((a, b, c, d, e, self, changed) => {
  return [a(), b(), c(), d(), e()];
}, fruits);

const rollFruit = (fruit) => {
  const props = {
    id: fruit().id,
    icon: icons[random(icons.length - 1)],
    color: colors[random(colors.length - 1)],
  };
  setTimeout(() => {
    fruit(props);
  }, 500);
};

const rollFruits = () => R.forEach(rollFruit, fruits);

const suscribe = (fn) => {
  flyd.on(fn, combinedFruits);
};

export default { suscribe, rollFruits };
