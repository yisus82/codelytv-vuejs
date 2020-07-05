import { uuid } from 'uuidv4';
import moment from 'moment';
import faker from 'faker';

const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const momentYears = () => moment().subtract(getRandomInteger(1, 3), 'years').valueOf();

const momentDays = () => moment().subtract(getRandomInteger(1, 6), 'days').valueOf();

const momentMinutes = () => moment().subtract(getRandomInteger(1, 35), 'minutes').valueOf();

const moments = [momentYears, momentDays, momentMinutes];

const commentParagraphs = () => faker.lorem.paragraphs(getRandomInteger(2, 4));

const commentSentences = () => faker.lorem.sentences(getRandomInteger(2, 5));

const commentLines = () => faker.lorem.lines(1);

const commentLengths = [commentParagraphs, commentSentences, commentLines];

const getRandomComments = () => {
  const numComments = getRandomInteger(0, 10);
  let comments = [];
  for (let i = 0; i < numComments; i += 1) {
    const newComment = {
      id: uuid(),
      username: faker.name.findName(),
      date: moments[getRandomInteger(0, moments.length - 1)](),
      comment: commentLengths[getRandomInteger(0, commentLengths.length - 1)](),
    };
    comments = [...comments, newComment];
  }
  return comments;
};

export default getRandomComments;
