<template>
  <div class="blog-post">
    <h2 class="blog-post-title">{{ title }}</h2>
    <p class="blog-post-meta">
      {{ publishedAt }} by
      <a href="#">{{ author }}</a>
    </p>
    <img class="img-fluid" :src="img" alt="Featured image" />
    <div v-html="content" />
  </div>
</template>

<script>
import moment from 'moment';

export default {
  props: {
    title: String,
    author: String,
    date: String,
    content: String,
    img: String,
  },
  computed: {
    publishedAt() {
      return moment(this.date).fromNow();
    },
  },
};
</script>
