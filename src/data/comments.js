import { uuid } from 'uuidv4';
import moment from 'moment';
import faker from 'faker';

const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const comments = [
  {
    id: uuid(),
    username: faker.name.findName(),
    date: moment().subtract(getRandomInteger(1, 3), 'years').valueOf(),
    comment: faker.lorem.paragraphs(getRandomInteger(2, 4)),
  },
  {
    id: uuid(),
    avatar: faker.image.avatar(),
    username: faker.name.findName(),
    date: moment().subtract(getRandomInteger(1, 6), 'days').valueOf(),
    comment: faker.lorem.sentences(getRandomInteger(2, 5)),
  },
  {
    id: uuid(),
    avatar: faker.image.avatar(),
    username: faker.name.findName(),
    date: moment().subtract(getRandomInteger(1, 35), 'minutes').valueOf(),
    comment: faker.lorem.lines(1),
  },
];

export default comments;
