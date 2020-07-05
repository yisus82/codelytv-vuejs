<template>
  <div class="mt-4">
    <h3 class="mb-4">Comments ({{ orderedComments.length }})</h3>

    <CommentListItem
      v-for="comment in orderedComments"
      :key="comment.id"
      :username="comment.username"
      :avatar="comment.avatar"
      :date="comment.date"
      :comment="comment.comment"
    />
  </div>
</template>

<script>
import _ from 'lodash';
import CommentListItem from './CommentListItem.vue';

export default {
  name: 'CommentList',
  props: ['comments'],
  components: {
    CommentListItem,
  },
  computed: {
    orderedComments() {
      return _.orderBy(this.comments, 'date', 'desc');
    },
  },
};
</script>
