const Vue = require('vue/dist/vue');
const moment = require('moment');
const HELPERS = require('./helpers');
require('./components/comment-form');
require('./components/comment-list');

const comments = [
  {
    id: HELPERS.guid(),
    username: 'yisus82',
    date: moment('2020-07-01').valueOf(),
    comment: 'Comentario de prueba',
  },
  {
    id: HELPERS.guid(),
    avatar: 'http://demos.themes.guide/bodeo/assets/images/users/m103.jpg',
    username: 'admin',
    date: moment('2020-07-03').valueOf(),
    comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.',
  },
  {
    id: HELPERS.guid(),
    avatar: 'http://demos.themes.guide/bodeo/assets/images/users/w102.jpg',
    username: 'maslarino',
    date: moment('2020-07-05').valueOf(),
    comment: 'Sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.',
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
