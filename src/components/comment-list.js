const Vue = require('vue/dist/vue');
const _ = require('lodash');
require('./comment-list-item');

const templateCommentsList = `
<div class="comments mt-4">
  <h3 class="mb-4">Comments ({{ comments.length }})</h3>
  <comment-list-item 
    v-for="comment in orderedComments" 
    :key="comment.id"
    :username="comment.username"
    :avatar="comment.avatar"
    :date="comment.date"
    :comment="comment.comment"
  />
</div>
`;

module.exports = Vue.component('comment-list', {
  props: ['comments'],
  template: templateCommentsList,
  computed: {
    orderedComments() {
      return _.orderBy(this.comments, 'date', 'desc');
    },
  },
});
