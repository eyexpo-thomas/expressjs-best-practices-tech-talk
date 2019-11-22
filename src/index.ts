import * as sortingService from './sortingService';

const main = async () => {
  const words = ['foo', 'bar', 'baz', 'quaz'];

  const sorted = words.sort(sortingService.sortWord);

  console.log(sorted);
};

main();
