const Vue = require('vue/dist/vue');
const moment = require('moment');
const faker = require('faker');
const HELPERS = require('./helpers');
require('./components/comment-form');
require('./components/comment-list');

const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const comments = [
  {
    id: HELPERS.guid(),
    username: faker.name.findName(),
    date: moment().subtract(getRandomInteger(1, 3), 'years').valueOf(),
    comment: faker.lorem.paragraphs(getRandomInteger(2, 4)),
  },
  {
    id: HELPERS.guid(),
    avatar: faker.image.avatar(),
    username: faker.name.findName(),
    date: moment().subtract(getRandomInteger(1, 6), 'days').valueOf(),
    comment: faker.lorem.sentences(getRandomInteger(2, 5)),
  },
  {
    id: HELPERS.guid(),
    avatar: faker.image.avatar(),
    username: faker.name.findName(),
    date: moment().subtract(getRandomInteger(1, 35), 'minutes').valueOf(),
    comment: faker.lorem.lines(1),
  },
];

module.exports = new Vue({
  el: '#comments_block',
  data: {
    comments: comments.reverse(),
  },
  methods: {
    addComment({ username, comment }) {
      const newComment = {
        id: HELPERS.guid(),
        username,
        comment,
        date: moment().valueOf(),
      };
      this.comments = [newComment, ...this.comments];
    },
  },
});
