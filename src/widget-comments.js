const Vue = require('vue/dist/vue');
require('./components/comment-list');

const comments = [
  {
    id: 1,
    username: 'yisus82',
    date: 'Today, 20:00',
    comment: 'Comentario de prueba',
  },
  {
    id: 2,
    avatar: 'http://demos.themes.guide/bodeo/assets/images/users/m103.jpg',
    username: 'admin',
    date: 'Today, 2:38',
    comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.',
  },
  {
    id: 3,
    avatar: 'http://demos.themes.guide/bodeo/assets/images/users/w102.jpg',
    username: 'maslarino',
    date: 'Yesterday, 5:03 PM',
    comment: 'Sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.',
  },
];

module.exports = new Vue({
  el: '#comments_block',
  data: {
    comments,
  },
});
