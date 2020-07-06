<template>
  <div class="blog-post">
    <h2 class="blog-post-title">{{ title }}</h2>
    <p class="blog-post-meta">{{ publishedAt }} by {{ author }} at {{source}}</p>
    <img class="img-fluid" :src="img" alt="Featured image" />
    <div v-html="content" />
    <a target="_blank" :href="href">🧐 Read Full Article</a>
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
    href: String,
    source: String,
  },
  computed: {
    publishedAt() {
      return moment(this.date).fromNow();
    },
  },
};
</script>
