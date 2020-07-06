<template>
  <div>
    <div class="container">
      <Header />
    </div>

    <main role="main" class="container">
      <div class="row">
        <div class="col-md-8 blog-main" v-if="article">
          <BlogPost
            :img="article.urlToImage"
            :title="article.title"
            :date="article.publishedAt"
            :author="article.author"
            :content="article.content"
            :href="article.url"
            :source="article.source.name"
          />
          <CommentsForm @add-comment="addComment($event)" />
          <CommentsList :comments="comments" />
        </div>
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
import Footer from '../components/Footer.vue';
import CommentsForm from '../components/CommentForm.vue';
import CommentsList from '../components/CommentList.vue';
import { getArticle } from '../services/news-service';
import getRandomComments from '../data/comments';

export default {
  name: 'Post',
  data() {
    return {
      comments: getRandomComments(),
      articleId: this.$route.params.id,
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
    Footer,
    CommentsForm,
    CommentsList,
  },
  asyncComputed: {
    article() {
      return getArticle(this.articleId);
    },
  },
};
</script>
