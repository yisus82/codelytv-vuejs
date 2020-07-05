<template>
  <div>
    <div class="container">
      <Header />
    </div>

    <main role="main" class="container">
      <div class="row">
        <div class="col-md-8 blog-main">
          <BlogPost />
          <CommentsForm @add-comment="addComment($event)" />
          <CommentsList :comments="comments" />
        </div>

        <Aside />
      </div>
    </main>

    <Footer />
  </div>
</template>

<script>
import { uuid } from 'uuidv4';
import moment from 'moment';
import Header from '../components/Header.vue';
import BlogPost from '../components/BlogPost.vue';
import Aside from '../components/Aside.vue';
import Footer from '../components/Footer.vue';
import CommentsForm from '../components/CommentForm.vue';
import CommentsList from '../components/CommentList.vue';
import comments from '../data/comments';

export default {
  name: 'Post',
  data() {
    return {
      comments,
    };
  },
  methods: {
    addComment({ username, comment }) {
      const newComment = {
        id: uuid(),
        username,
        comment,
        date: moment().valueOf(),
      };
      this.comments = [...this.comments, newComment];
    },
  },
  components: {
    Header,
    BlogPost,
    Aside,
    Footer,
    CommentsForm,
    CommentsList,
  },
};
</script>
