<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import HomeIndex from '../components/HomeIndex.vue';
export default {
  components: {
    Header,
    HomeIndex,
    Footer,
  },
}
</script>

<template>
  <div 
  @mousewheel.prevent
  @touchmove.prevent
  class="relative w-full h-screen bg-gray-50 overflow-hidden">
    <!-- Header -->
    <Header burcolor="text-[#ff5500]" isburimg="true" />
    <!-- -->
    <HomeIndex />
    <!-- Footer -->
    <Footer :iscard="true" title="FOMO Stone" textcolor="text-white" bgcolor="bg-[#ff5500]" crcolor="text-white" sicolor="fill-white" />
  </div>
</template>
