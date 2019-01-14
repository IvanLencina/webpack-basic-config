import leftPad from './leftpad';

const serNos = [6934, 23111, 23114, 1001, 211161, 'ad'];

const partEl = document.getElementById('part-list');

const strList = serNos.reduce(
  (acc, element) => acc += `<li>${leftPad(element, 8, '0')}</li>`, ''
);

partEl.innerHTML = strList;

/**
 * NOTE: Run npm run build. And then run: node public/js/bundle.js  to see the results.
 */