<template>
  <div class="comment mb-2 row">
    <div class="comment-avatar col-md-1 col-sm-2 text-center pr-1">
      <a href>
        <img class="mx-auto rounded-circle img-fluid" :src="avatar" alt="User avatar" />
      </a>
    </div>
    <div class="comment-content col-md-11 col-sm-10">
      <h6 class="small comment-meta">
        <a href="#">{{ username }}</a>
        {{ formattedTime }}
      </h6>
      <div class="comment-body">
        <p style="white-space: pre-line;">{{ comment }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
import defaultAvatar from '../assets/images/avatar.png';

export default {
  name: 'CommentListItem',
  data() {
    const formattedTime = moment(this.date).fromNow();
    return { formattedTime };
  },
  props: {
    comment: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default: defaultAvatar,
    },
    date: {
      type: Number,
      required: true,
    },
  },
};
</script>
