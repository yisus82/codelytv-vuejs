const Vue = require('vue/dist/vue');
const moment = require('moment');
const faker = require('faker');
const HELPERS = require('./helpers');
require('./components/comment-form');
require('./components/comment-list');

const comments = [
  {
    id: HELPERS.guid(),
    username: faker.name.findName(),
    date: moment('2020-07-01').valueOf(),
    comment: faker.lorem.lines(3),
  },
  {
    id: HELPERS.guid(),
    avatar: faker.image.avatar(),
    username: faker.name.findName(),
    date: moment('2020-07-03').valueOf(),
    comment: faker.lorem.paragraphs(2),
  },
  {
    id: HELPERS.guid(),
    avatar: faker.image.avatar(),
    username: faker.name.findName(),
    date: moment('2020-07-05').valueOf(),
    comment: faker.lorem.sentences(1),
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
