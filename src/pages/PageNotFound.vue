<template>
  <div>
    <div class="container">
      <Header />
    </div>

    <main role="main" class="container">
      <div class="row">
        <div class="col-md-8 blog-main">
          <img class="mt-4 mb-4 mx-auto img-fluid" src="@/assets/images/404.png" alt="Error 404" />
        </div>

        <Aside />
      </div>
    </main>

    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Aside from '../components/Aside.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'PageNotFound',
  components: {
    Header,
    Aside,
    Footer,
  },
};
</script>
