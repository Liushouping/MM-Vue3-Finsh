<script>
import { ref ,onMounted, onUnmounted } from "vue";
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import gsap from 'gsap';
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { ScrollToPlugin } from "gsap/ScrollToPlugin";

// gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default {
  setup() {
    // const triggers = ScrollTrigger.getAll();
    const btn_gem = ref(false);
    const btn_music = ref(false);
    const btn_fly = ref(false);
    const btn_clothing = ref(false);
    const btn_jar = ref(false);
    const btn_book = ref(false);
    const mbslider = ref();

    function btn_gem_open() {
      btn_music.value = false;
      btn_fly.value = false;
      btn_clothing.value = false;
      btn_jar.value = false;
      btn_book.value = false;

      btn_gem.value = true;
    };
    function btn_music_open() {
      btn_gem.value = false;
      btn_fly.value = false;
      btn_clothing.value = false;
      btn_jar.value = false;
      btn_book.value = false;

      btn_music.value = true;
    };
    function btn_fly_open() {
      btn_gem.value = false;
      btn_music.value = false;
      btn_clothing.value = false;
      btn_jar.value = false;
      btn_book.value = false;

      btn_fly.value = true;
    };
    function btn_clothing_open() {
      btn_gem.value = false;
      btn_music.value = false;
      btn_fly.value = false;
      btn_jar.value = false;
      btn_book.value = false;

      btn_clothing.value = true;
    };
    function btn_jar_open() {
      btn_gem.value = false;
      btn_music.value = false;
      btn_fly.value = false;
      btn_clothing.value = false;
      btn_book.value = false;

      btn_jar.value = true;
    };
    function btn_book_open() {
      btn_gem.value = false;
      btn_music.value = false;
      btn_fly.value = false;
      btn_clothing.value = false;
      btn_jar.value = false;

      btn_book.value = true;
    };
    function scroll_left() {
      gsap.to(mbslider.value, 0.25, {scrollTo:{x: 0}});
    };
    function scroll_right() {
      gsap.to(mbslider.value, 0.5, {scrollTo:{x: 250}});
    };
    onMounted(() => {
      // ScrollTrigger.refresh();
    });
    onUnmounted(() => {
      // triggers.forEach((trigger) => {
      //   trigger.kill();
      // });
      // ScrollTrigger.clearMatchMedia();
    });
    return {
      btn_gem,
      btn_music,
      btn_fly,
      btn_clothing,
      btn_jar,
      btn_book,

      btn_gem_open,
      btn_music_open,
      btn_fly_open,
      btn_clothing_open,
      btn_jar_open,
      btn_book_open,

      mbslider,
      scroll_right,
      scroll_left,
    };
  },
  components: {
    Header,
    Footer,
  },
}
</script>

<template>
  <div class="overflow-hidden relative h-screen w-full flex justify-center">
    <!--  -->
    <Header burcolor="text-[#ff5500]" isburimg="true" />
    <Footer title="MM-Lab" textcolor="text-[#ff5500]" bgcolor="" crcolor="text-[#ff5500]" sicolor="fill-[#ff5500]" />
    <!-- mobile menu -->
    <div 
    ref="mbslider"
    class="overflow-y-hidden flex lg:hidden fixed bottom-[6.3rem] sm:bottom-[13vh] w-[95%] h-[90px] sm:h-[10vh] rounded-[0.5rem] justify-start sm:justify-center items-center z-[100]" 
    style="background-color:#000;opacity:0.85;">
      <div class="relative p-5 flex flex-row space-x-6 items-center pr-12">
        <span class="absolute left-1 cursor-pointer" @click="scroll_right">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="fill-white w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </span>
        <span class="absolute right-2 cursor-pointer" @click="scroll_left">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="fill-white w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </span>
        <!-- -->
        <span @click="btn_gem_open" class="w-[60px] h-[60px] hover:bg-[#01FFFF] p-1 rounded-lg flex justify-center items-center snap-start overflow-hidden cursor-pointer">
          <img src="/image/lab/mm_gemx.png" class="w-[100%]">
        </span>
        <span @click="btn_clothing_open" class="w-[60px] h-[60px] hover:bg-[#01FFFF] p-1 rounded-lg flex justify-center items-end snap-start overflow-hidden cursor-pointer">
          <img src="/image/lab/mm_left_tshort.png" class="w-[100%]">
        </span>
        <span @click="btn_book_open" class="w-[60px] h-[60px] hover:bg-[#01FFFF] p-1 rounded-lg flex justify-center items-center snap-start overflow-hidden cursor-pointer">
          <img src="/image/lab/mm_bottom_book.png" class="w-[100%]">
        </span>
        <span @click="btn_jar_open" class="w-[60px] h-[60px] hover:bg-[#01FFFF] p-1 rounded-lg flex justify-center items-end snap-start overflow-hidden cursor-pointer">
          <img src="/image/lab/mm_left_jar.png" class="w-[100%]">
        </span>
        <span @click="btn_music_open" class="w-[60px] h-[60px] hover:bg-[#01FFFF] p-1 rounded-lg flex justify-center items-center snap-start overflow-hidden cursor-pointer">
          <img src="/image/lab/mm_right_music.webp" class="w-[100%]">
        </span>
        <span @click="btn_fly_open" class="w-[60px] h-[60px] hover:bg-[#01FFFF] p-1 rounded-lg flex justify-center items-center snap-start overflow-hidden cursor-pointer">
          <img src="/image/lab/mm_right_fly.webp" class="w-[100%]">
        </span>
      </div>
    </div>
    <!--  -->
    <div 
    class="overflow-x-auto overflow-y-hidden sm:overflow-hidden relative bg-black mm-ratio min-h-screen min-w-[100vw] absolute">
      <!-- bg-->
      <div 
      class="overflow-x-auto overflow-y-hidden sm:overflow-hidden bg-black mm-ratio min-h-screen min-w-[100vw] absolute bottom-0">
        <img src="/image/lab/mm_nobody_bg.jpeg" class="hidden lg:flex w-[100%]">
        <img src="/image/lab/mm_mobile_bg.jpeg" class="flex lg:hidden w-[100%]">
      </div>
      <!--  -->
      <div 
      class="hidden lg:flex overflow-hidden mm-ratio min-h-screen min-w-[100vw] absolute bottom-0 left-0">
        <div class="relative w-full h-full">
          <!-- gem -->
          <div 
          @click="btn_gem_open" 
          class="absolute w-[360px] lg:w-[22vw] cursor-pointer bottom-[0%] sm:bottom-20 -right-[4%] flex items-start duration-500 box">
            <img src="/image/lab/mm_gemx.png" class="w-[100%]">
            <div class="w-4 h-4 absolute left-16 top-12">
              <span class="flex h-full w-full transition-all duration-1000 opacity-100 justify-center items-center">
                <span class="animate-ping absolute inline-flex h-4 w-4 rounded-full bg-[#01FFFF]/50"></span>
                <span class="absolute mt-0 ml-0 inline-flex rounded-full h-3 w-3 bg-[#01FFFF]"></span>
              </span>
            </div>
          </div>
          <!-- music -->
          <div 
          @click="btn_music_open"
          class="absolute w-[290px] lg:w-[20vw] cursor-pointer top-[0%] lg:top-[2%] right-[20%] flex items-end">
            <img src="/image/lab/mm_right_music.webp" class="w-[100%] duration-500 box">
            <div class="w-4 h-4 absolute bottom-20 right-12">
              <span class="flex h-full w-full transition-all duration-1000 opacity-100 justify-center items-center">
                <span class="animate-ping absolute inline-flex h-4 w-4 rounded-full bg-[#01FFFF]/50"></span>
                <span class="absolute mt-0 ml-0 inline-flex rounded-full h-3 w-3 bg-[#01FFFF]"></span>
              </span>
            </div>
          </div>
          <!-- fly -->
          <div 
          @click="btn_fly_open"
          class="absolute w-[260px] lg:w-[18vw] cursor-pointer -bottom-[4%] right-[20%] flex items-start">
            <img src="/image/lab/mm_right_fly.webp" class="w-[100%] duration-500 box">
            <div class="w-4 h-4 absolute top-0 right-28">
              <span class="flex h-full w-full transition-all duration-1000 opacity-100 justify-center items-center">
                <span class="animate-ping absolute inline-flex h-4 w-4 rounded-full bg-[#01FFFF]/50"></span>
                <span class="absolute mt-0 ml-0 inline-flex rounded-full h-3 w-3 bg-[#01FFFF]"></span>
              </span>
            </div>
          </div>
          <!-- clothing -->
          <div 
          @click="btn_clothing_open"
          class="absolute w-[180px] lg:w-[13vw] cursor-pointer z-[4] top-[40%] left-[28%] flex items-start">
            <img src="/image/lab/mm_left_tshort.png" class="w-[100%] duration-500 box">
            <div class="w-4 h-4 absolute -bottom-4 right-16">
              <span class="flex h-full w-full transition-all duration-1000 opacity-100 justify-center items-center">
                <span class="animate-ping absolute inline-flex h-4 w-4 rounded-full bg-[#01FFFF]/50"></span>
                <span class="absolute mt-0 ml-0 inline-flex rounded-full h-3 w-3 bg-[#01FFFF]"></span>
              </span>
            </div>
          </div>
          <!-- jar -->
          <div 
          @click="btn_jar_open"
          class="absolute w-[260px] lg:w-[19vw] cursor-pointer z-[5] bottom-[12%] left-[11%] flex items-start">
            <img src="/image/lab/mm_left_jar.png" class="w-[100%] duration-500 box">
            <div class="w-4 h-4 absolute right-8 bottom-20">
              <span class="flex h-full w-full transition-all duration-1000 opacity-100 justify-center items-center">
                <span class="animate-ping absolute inline-flex h-4 w-4 rounded-full bg-[#01FFFF]/50"></span>
                <span class="absolute mt-0 ml-0 inline-flex rounded-full h-3 w-3 bg-[#01FFFF]"></span>
              </span>
            </div>
          </div>
          <!-- book -->
          <div 
          @click="btn_book_open"
          class="absolute w-[280px] lg:w-[21vw] cursor-pointer bottom-[3%] left-[29%]">
            <img src="/image/lab/mm_bottom_book.png" class="w-[100%] duration-500 box">
            <div class="w-4 h-4 absolute bottom-[5rem] right-0">
              <span class="flex h-full w-full transition-all duration-1000 opacity-100 justify-center items-center">
                <span class="animate-ping absolute inline-flex h-4 w-4 rounded-full bg-[#01FFFF]/50"></span>
                <span class="absolute mt-0 ml-0 inline-flex rounded-full h-3 w-3 bg-[#01FFFF]"></span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- gem -->
  <Teleport to="body">
    <transition name="modal">
    <div 
    v-if="btn_gem" 
    class="fixed top-0 left-0 w-full h-screen bg-black/70 flex flex-col justify-center items-center pb-20 lg:pb-0 sm:pt-0 px-4 z-30">
        <div @click="btn_gem = false" class="absolute top-0 left-0 w-full h-screen bg-black/30 z-20"></div>

        <div class="relative max-w-2xl w-full mx-auto z-20">
            <div class="relative bg-[#ff5500] h-[360px] rounded-[2rem] flex items-center">
            <!--  -->
            <div class="w-full flex flex-col justify-center items-center px-12 text-center space-y-2 xs:space-y-6">
              <h5 class="font-TTOctosquaresBold text-white text-[24px]">MM Coin</h5>
              <p class="pt-2 xs:pt-4 text-white">Discord is not boring anymore. You can meet and share your creation and stories with a group of companions as well as manga lovers and participate in all the MadManga events to earn MM Coins that are useful in our ecosystem.</p>
              <img src="/image/lab/mm_gemx.png" class="w-[85px] sm:w-[120px]">
            </div>
              <!--  -->
              <div class="absolute top-6 right-6 z-20">
                <button type="button" @click="btn_gem = false">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
        </div>
    </div>
    </transition>
  </Teleport>
  <!-- music -->
  <Teleport to="body">
    <transition name="modal">
    <div 
    v-if="btn_music" 
    class="fixed top-0 left-0 w-full h-screen bg-black/70 flex flex-col justify-center items-center pb-20 lg:pb-0 sm:pt-0 px-4 z-30">
        <div @click="btn_music = false" class="absolute top-0 left-0 w-full h-screen bg-black/30 z-20"></div>

        <div class="relative max-w-2xl w-full mx-auto z-20">
            <div class="relative bg-[#ff5500] h-[360px] rounded-[2rem] flex items-center">
            <!--  -->
            <div class="w-full flex flex-col justify-center items-center p-12 text-center space-y-6">
              <h5 class="font-TTOctosquaresBold text-white text-[24px]">Music</h5>
              <p class="pt-4 text-white">·Theme Song</p>
              <p class="text-white">·A song to represent us? Perhas it’s manga-related?</p>
              <img src="/image/lab/mm_right_music.webp" class="w-[100px] sm:w-[120px]">
            </div>
              <!--  -->
              <div class="absolute top-6 right-6 z-20">
                <button type="button" @click="btn_music = false">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
        </div>
    </div>
    </transition>
  </Teleport>
  <!-- fly -->
  <Teleport to="body">
    <transition name="modal">
    <div 
    v-if="btn_fly" 
    class="fixed top-0 left-0 w-full h-screen bg-black/70 flex flex-col justify-center items-center pb-20 lg:pb-0 sm:pt-0 px-4 z-30">
        <div @click="btn_fly = false" class="absolute top-0 left-0 w-full h-screen bg-black/30 z-20"></div>

        <div class="relative max-w-2xl w-full mx-auto z-20 ">
            <div class="relative bg-[#ff5500] h-[360px] rounded-[2rem] flex items-center">
            <!--  -->
            <div class="w-full flex flex-col justify-center items-center p-12 text-center space-y-6">
              <h5 class="font-TTOctosquaresBold text-white text-[24px]">Physical Device</h5>
              <p class="pt-4 text-white">????</p>
              <p class="text-white">Have you seen Iron Man or entered Harry Potter’s world?</p>
              <img src="/image/lab/mm_right_fly.webp" class="w-[70px] sm:w-[90px]">
            </div>
              <!--  -->
              <div class="absolute top-6 right-6 z-20">
                <button type="button" @click="btn_fly = false">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
        </div>
    </div>
    </transition>
  </Teleport>
  <!-- clothing -->
  <Teleport to="body">
    <transition name="modal">
    <div 
    v-if="btn_clothing" 
    class="fixed top-0 left-0 w-full h-screen bg-black/70 flex flex-col justify-center items-center pb-20 lg:pb-0 sm:pt-0 px-4 z-30">
        <div @click="btn_clothing = false" class="absolute top-0 left-0 w-full h-screen bg-black/30 z-20"></div>

        <div class="relative max-w-2xl w-full mx-auto z-20 ">
            <div class="relative bg-[#ff5500] h-[360px] rounded-[2rem] flex items-center">
            <!--  -->
            <div class="w-full flex flex-col justify-center items-center p-12 text-center space-y-6">
              <h5 class="font-TTOctosquaresBold text-white text-[24px]">FOMO SOTNE</h5>
              <p class="pt-4 text-white">Anime Figures</p>
              <p class="text-white">or……. Clothes, jackets, or…?</p>
              <img src="/image/lab/mm_left_tshort.png" class="w-[90px] sm:w-[120px]">
            </div>
              <!--  -->
              <div class="absolute top-6 right-6 z-20">
                <button type="button" @click="btn_clothing = false">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
        </div>
    </div>
    </transition>
  </Teleport>
  <!-- jar -->
  <Teleport to="body">
    <transition name="modal">
    <div 
    v-if="btn_jar" 
    class="fixed top-0 left-0 w-full h-screen bg-black/70 flex flex-col justify-center items-center pb-20 lg:pb-0 sm:pt-0 px-4 z-30">
        <div @click="btn_jar = false" class="absolute top-0 left-0 w-full h-screen bg-black/30 z-20"></div>

        <div class="relative max-w-2xl w-full mx-auto z-20 ">
            <div class="relative bg-[#ff5500] h-[360px] rounded-[2rem] flex items-center">
            <!--  -->
            <div class="w-full flex flex-col justify-center items-center p-12 text-center space-y-6">
              <h5 class="font-TTOctosquaresBold text-white text-[24px]">Mojo</h5>
              <p class="pt-4 text-white">Mojo is the beginning of change. It leads you to anywhere in the Web3 world, wandering in the universe.</p>
              <img src="/image/lab/mm_left_jar.png" class="w-[50px] sm:w-[60px]">
            </div>
              <!--  -->
              <div class="absolute top-6 right-6 z-20">
                <button type="button" @click="btn_jar = false">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
        </div>
    </div>
    </transition>
  </Teleport>
  <!-- book -->
  <Teleport to="body">
    <transition name="modal">
    <div 
    v-if="btn_book" 
    class="fixed top-0 left-0 w-full h-screen bg-black/70 flex flex-col justify-center items-center pb-20 lg:pb-0 sm:pt-0 px-4 z-30">
        <div @click="btn_book = false" class="absolute top-0 left-0 w-full h-screen bg-black/30 z-20"></div>

        <div class="relative max-w-2xl w-full mx-auto z-20 ">
            <div class="relative bg-[#ff5500] h-[360px] rounded-[2rem] flex items-center">
            <!--  -->
            <div class="w-full flex flex-col justify-center items-center p-12 text-center space-y-6">
              <h5 class="font-TTOctosquaresBold text-white text-[24px]">Standalone Comics</h5>
              <p class="pt-4 text-white">·Standalone Books</p>
              <p class="text-white">·MadManga adventure stories that you create with us.</p>
              <img src="/image/lab/mm_bottom_book.png" class="w-[120px]">
            </div>
              <!--  -->
              <div class="absolute top-6 right-6 z-20">
                <button type="button" @click="btn_book = false">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
        </div>
    </div>
    </transition>
  </Teleport>
</template>

<style scoped>
::-webkit-scrollbar {
  display:none;
}

.modal-enter-active,
.modal-leave-active {
  transition: all 0.25s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: scale(1.1);
}

.modal-enter-to,
.modal-leave-from {
  opacity: 1;
  transform: scale(1);
}

.mm-ratio {
  aspect-ratio: 3100/1620;
}

.box:hover {
  -webkit-filter: drop-shadow(0px 0px 12px #01FFFF);
  filter: drop-shadow(0px 0px 12px #01FFFF)
}
</style>
