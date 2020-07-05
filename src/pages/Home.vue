<template>
  <div>
    <div class="container">
      <Header />

      <div class="row my-4">
        <div v-for="article in articles" :key="article.key" class="col-md-6">
          <FeaturedPost :article="article" />
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import FeaturedPost from '../components/FeaturedPost.vue';
import Footer from '../components/Footer.vue';
import { getArticles } from '../services/news-service';

export default {
  name: 'Home',
  asyncComputed: {
    async articles() {
      return getArticles();
    },
  },
  components: {
    Header,
    FeaturedPost,
    Footer,
  },
};
</script>
