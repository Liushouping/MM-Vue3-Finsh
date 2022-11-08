<script>
import { ref, reactive } from "vue";
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
export default {
  setup() {
    const Story_info = "A Black hole appeared and absorbed all the manga-related energy available on Earth. Unbearable anxiety arose as familiar manga characters were devoured by the black hole. Wait. What is that?! The energy, on its way to the black hole, was captured by the flaming planet, followed by FOMO Stones emerging from the surface?! An evil conspiracy or a new adventure is about to unfold.";
    const isChangebr = ref(false);
    const newmm_showModal = ref(false);
    const oldmm_showModal = ref(false);

    const prew_01 = ref(false);
    const prew_02 = ref(false);

    const isChange = ref(false);
    function isChangeOpen() {
      isChange.value = true;
      document.body.classList.add("modal-open");
    }
    function isChangeClose() {
      isChange.value = false;
      document.body.classList.remove("modal-open");
    }
    return {
      Story_info,
      
      newmm_showModal,
      oldmm_showModal,

      prew_01,
      prew_02,

      isChange,
      isChangeOpen,
      isChangeClose,

      isChangebr
    };
  },
  components: {
    Header,
    Footer,
  },
}
</script>

<template>
  <div>
  <div class="relative w-full h-full lg:h-screen overflow-hidden bg-[#861FFF] flex flex-col justify-center items-start lg:items-center pb-[130px] pt-0 lg:py-[130px]">
    <!-- Header -->
    <Header burcolor="text-[#ff5500]" isburimg="true" />
    <!-- Menu layer -->
    <div 
    class="relative flex lg:hidden w-full h-[360px] sm:h-[480px] overflow-hidden bg-black bg-cover bg-center z-20" 
    style="background-image: url(/image/story_egg_banner.webp);">
    </div>
    <div class="w-full relative flex lg:hidden z-10 ">
      <div 
      class="absolute w-full rounded-b-[2rem] h-[310px] -mt-[16rem] bg-black z-20 duration-500" 
      :class="{ '-mt-[0.5rem] h-[200px]' : isChangebr }">
        <span class="absolute bottom-4 right-4 z-30">
          <button 
          @click="isChangebr =! isChangebr"
          type="button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 fill-white">
              <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
            </svg>
          </button>
        </span>
        <div v-if="isChangebr" class="w-full flex justify-center">
          <span class="absolute bottom-4 z-30">
            <button 
            class="flex justify-center items-center w-full" 
            @click="isChangebr =! isChangebr"
            type="button">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
              </svg>
            </button>
          </span>
        </div>
        <!--  -->
        <div class="relative z-50">
          <p
          :class="{ 'opacity-100' : isChangebr }"
          class="text-[12px] text-white text-center px-4 sm:px-20 pb-[0.7rem] pt-2 opacity-0">{{ Story_info }}</p>
        </div>
      </div>
    </div>
    <!--  -->
    <div class="max-w-5xl w-full mx-auto flex flex-col justify-center items-center space-y-3 px-4 pt-20 lg:pt-0">
      <!--  -->
      <div class="w-[90%] sm:w-full relative flex flex-row justify-center sm:justify-start lg:justify-center items-center py-0">
        <button 
        type="button"
        class="flex lg:hidden" 
        @click="isChangeOpen">
          <img src="/image/video_img.png" class="w-[25px] h-[25px]">
        </button>
        <p class="w-[480px] text-white text-[32px] font-TTOctosquaresBold py-6 lg:py-0 hidden lg:flex justify-center items-center">Episode</p>
        <p class="w-full text-white text-[32px] py-6 lg:py-0 font-TTOctosquaresBold flex justify-center items-center lg:hidden">Episode</p>
      </div>
      <!-- Story 01 -->
      <div 
      @mouseover="prew_01= true"
      @mouseleave="prew_01 = false"
      class="overflow-hidden relative w-full rounded-[1.5rem] sm:rounded-[3rem] bg-cover bg-center bg-black h-48 p-6" 
      style="background-image:url(/image/story_01.png);-webkit-mask-image: -webkit-radial-gradient(white, black);">
        <div class="relative z-40">
          <span class="font-AntonRegular text-[76px] text-white">#01</span>
          <button type="button" @click="newmm_showModal = true;prew_01 = false" class="bg-[#ff5500] px-2 py-1 text-white rounded-lg flex flex-row items-center justify-center transition-all hover:bg-orange-700 relative z-20">Play
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 ml-1">
              <path fill-rule="evenodd" d="M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>
        <!-- Preview -->
        <div 
        :class="{ 'opacity-100' : prew_01 }" 
        class="absolute top-0 sm:-top-56 left-0 bg-black w-full h-[400%] hidden sm:flex rounded-[5rem] opacity-0 z-30">
          <video 
          v-if="prew_01" 
          src="https://mmvideos3.s3.ap-northeast-1.amazonaws.com/mm_prew_01.mp4" 
          autoplay="" muted="muted" loop="" preload="auto" x5-video-player-fullscreen="true" x5-playsinline="" playsinline="playsinline" webkit-playsinline=""></video>
        </div>
      </div>
      <!-- Story 02 -->
      <div 
      @mouseover="prew_02 = true"
      @mouseleave="prew_02 = false"
      class="overflow-hidden relative w-full rounded-[1.5rem] sm:rounded-[3rem] bg-cover bg-center bg-black h-48 p-6" 
      style="background-image:url(/image/story_02.png);-webkit-mask-image: -webkit-radial-gradient(white, black);">
        <div class="relative z-40">
          <span class="font-AntonRegular text-[76px] text-white">#02</span>
          <button type="button" @click="oldmm_showModal = true;prew_02 = false" class="bg-[#ff5500] px-2 py-1 text-white rounded-lg flex flex-row items-center justify-center transition-all hover:bg-orange-700 relative z-20">Play
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 ml-1">
              <path fill-rule="evenodd" d="M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>
        <!-- Preview -->
        <div 
        :class="{ 'opacity-100' : prew_02 }"
        class="absolute top-0 sm:-top-48 left-0 bg-black w-full h-[400%] hidden sm:flex rounded-[5rem] opacity-0 z-30">
          <video 
          v-if="prew_02" 
          src="https://mmvideos3.s3.ap-northeast-1.amazonaws.com/mm_prew_02.mp4" 
          autoplay="" muted="muted" loop="" preload="auto" x5-video-player-fullscreen="true" x5-playsinline="" playsinline="playsinline" webkit-playsinline=""></video>
        </div>
      </div>

      <p class="font-TTOctosquaresBold text-white text-[24px] sm:text-[36px] w-full flex justify-end">To be continued...</p>

    </div>
    <!-- Video 01 -->
    <Teleport to="body">
      <transition name="fade">
      <div 
      v-if="newmm_showModal" 
      class="fixed top-0 left-0 w-full h-screen bg-black/80 flex justify-center items-center z-[999]">
        <div @click="newmm_showModal = false" class="absolute top-0 left-0 w-full h-screen bg-black/30 z-20"></div>

        <div class="absolute top-4 right-4 z-20">
          <button type="button" @click="newmm_showModal = false">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div class="relative max-w-3xl w-full mx-auto z-20">
            <div class="player-container">
              <vue3-video-player 
              loop autoplay preload="auto" x5-video-player-fullscreen="true" x5-playsinline="" playsinline="playsinline" webkit-playsinline="" controls title="MadManga NFT"
              src="https://mmvideos3.s3.ap-northeast-1.amazonaws.com/oldmm.mp4"></vue3-video-player>
            </div>
        </div>
      </div>
      </transition>
    </Teleport>
    <!-- Video 02 -->
    <Teleport to="body">
      <transition name="fade">
      <div 
      v-if="oldmm_showModal"
      class="fixed top-0 left-0 w-full h-screen bg-black/80 flex justify-center items-center z-[999]">
        <div @click="oldmm_showModal = false" class="absolute top-0 left-0 w-full h-screen bg-black/30 z-20"></div>

        <div class="absolute top-4 right-4 z-20">
          <button type="button" @click="oldmm_showModal = false">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div class="relative max-w-3xl w-full mx-auto z-20">
          <div class="player-container">
            <vue3-video-player 
             loop autoplay preload="auto" x5-video-player-fullscreen="true" x5-playsinline="" playsinline="playsinline" webkit-playsinline="" controls title="MadManga NFT"
            src="https://mmvideos3.s3.ap-northeast-1.amazonaws.com/newmm.mp4"></vue3-video-player>
          </div>
        </div>
      </div>
      </transition>
    </Teleport>
    <!-- Footer -->
    <Footer title="MM-Story" textcolor="text-[#ff5500]" bgcolor="" crcolor="text-[#ff5500]" sicolor="fill-[#ff5500]"/>
    <!-- Filter -->
    <Teleport to="body">
      <transition name="scale">
      <div 
      v-if="isChange" 
      @mousewheel.prevent
      @touchmove.prevent 
      class="fixed top-0 w-full h-screen flex justify-end items-center z-[210]">
      <div @click="isChangeClose();" class="absolute top-0 left-0 w-full h-screen bg-black/80 z-20"></div>
        <!-- Close -->
        <div class="flex absolute top-8 left-8 z-[110] animate__animated animate__fadeIn animate__delay-1s">
          <button type="button" @click="isChangeClose">
            <img src="/image/back_white.png" class="w-[25px]">
          </button>
        </div>
        <!--  -->
        <div 
        class="relative w-[200px] h-full bg-[#861FFF] z-[110] flex flex-col items-center justify-start animate__animated animate__fadeInRight">
        <div class="flex flex-col space-y-4 pt-12 px-6 pb-12">
            <!--  -->
            <div class="flex flex-row justify-center items-center space-x-2">
              <img src="/image/video_img.png" class="w-[25px] h-[25px]">
              <h5 class="font-TTOctosquaresBold text-white text-[24px]">Episode</h5>
            </div>
            <ul class="flex flex-col space-y-12 justify-center items-center pt-16">
              <li 
              @click="isChangeClose();newmm_showModal = true;"
              class="font-TTOctosquaresBold text-white text-[16px] cursor-pointer">#01</li>
              <li 
              @click="isChangeClose();oldmm_showModal = true;"
              class="font-TTOctosquaresBold text-white text-[16px] cursor-pointer">#02</li>
            </ul>
          </div>
        </div>
      </div>
      </transition>
    </Teleport>
  </div>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}

.scale-enter-active,
.scale-leave-active {
  transition: all 0.25s ease;
}

.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(1.1);
}

.scale-enter-to,
.scale-leave-from {
  opacity: 1;
  transform: scale(1);
}
</style>
