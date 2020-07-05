<template>
  <div>
    <div class="container">
      <Header />
      <LongFeatured />

      <div class="row mb-2">
        <div class="col-md-6">
          <FeaturedPost />
        </div>
        <div class="col-md-6">
          <FeaturedPost />
        </div>
      </div>
    </div>

    <main role="main" class="container">
      <div class="row">
        <div class="col-md-8 blog-main">
          <h3 class="pb-3 mb-4 font-italic border-bottom">From the Firehose</h3>

          <BlogPost />
          <BlogPost />

          <nav class="blog-pagination">
            <a class="btn btn-outline-primary" href="#">Older</a>
            <a class="btn btn-outline-secondary disabled" href="#">Newer</a>
          </nav>
        </div>

        <Aside />
      </div>
    </main>

    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import LongFeatured from '../components/LongFeatured.vue';
import FeaturedPost from '../components/FeaturedPost.vue';
import BlogPost from '../components/BlogPost.vue';
import Aside from '../components/Aside.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'Home',
  components: {
    Header,
    LongFeatured,
    FeaturedPost,
    BlogPost,
    Aside,
    Footer,
  },
};
</script>
