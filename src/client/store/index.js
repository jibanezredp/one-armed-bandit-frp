import flyd from 'flyd';
import R from 'ramda';
import { icons, colors } from '../constants';
import { random } from '../helpers';

const fruitFactory = (n) => R.times((id) =>
  flyd.stream({ id, icon: 'spinner', color: 'black' }), n);

const fruits = fruitFactory(5);

const combinedFruits = flyd.combine(
  (a, b, c, d, e) => [a(), b(), c(), d(), e()],
  fruits
);

const watchFruits = flyd.combine(a => {
  let n = 0;
  R.forEach((o) => {
    if (o.icon === 'paper-plane') n = n + 1;
  }, a());
  if (n === 5) return true;
}, [combinedFruits])

const rollFruit = (fruit) => {
  const props = {
    id: fruit().id,
    icon: icons[random(icons.length - 1)],
    color: colors[random(colors.length - 1)],
  };
  setTimeout(() => {
    fruit(props);
    if (fruit().icon !== 'paper-plane')
      rollFruit(fruit);
  }, 200);
};

const rollFruits = () => R.forEach(rollFruit, fruits);

const suscribe = (fn) => {
  flyd.on(fn, combinedFruits);
};

const onEnd = (fn) => {
  flyd.on(fn, watchFruits);
};

export default { suscribe, rollFruits, onEnd };
