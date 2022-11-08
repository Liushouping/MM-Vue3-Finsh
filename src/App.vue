<script>
import { onMounted } from "vue";
import { RouterLink, RouterView } from 'vue-router';
export default {
  setup() {
    onMounted(() => {
      document.oncontextmenu = function() {
        return false;
      };
    });
    return {

    };
  },
  components: {
  },
}
</script>

<template>
  <router-view></router-view>
  <div id="comic_body"></div>
</template>

