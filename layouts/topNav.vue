<template>
  <div class="hold-transition layout-top-nav">
    <NavBar />
    <nuxt class="wrapper" />
    <Footer />
  </div>
</template>

<script>
import NavBar from "../components/pagestopnav/NavBar";
import Footer from "../components/alerticons";
export default {
  components: {
    NavBar,
    Footer
  }
};
</script>
