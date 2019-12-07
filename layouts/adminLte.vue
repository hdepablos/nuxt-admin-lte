<template>
  <div>
    <NavBar />
    <SideBar />
    <nuxt class="content-wrapper" />
    <Footer />
  </div>
</template>

<script>
import NavBar from "../components/pages/NavBar";
import SideBar from "../components/pages/SideBar";
import Footer from "../components/alerticons";
export default {
  components: {
    NavBar,
    SideBar,
    Footer
  }
};
</script>
