<script>
import { ref } from "vue";
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

export default {
  props: {
    isburimg: Boolean,
  },
  setup(props) {
    //
    const Luis_info = "Luis is a comic/manga artist from Spain whose art style is Ameri-manga. In the future, he will co-create of the comic future with the community and continue bringing fun stories and cool art to everyone.";
    // comic list
    const origin_ep1 = ref();
    const lord_ep2 = ref();
    const fomostone_ep3 = ref();
    const mysterious_ep1 = ref();
    // comic order
    const isOrder = ref(false);
    // change 
    const isChapter = ref(true);
    // banner
    const isChangebr = ref(false);
    // filter icon
    const isfiltericon = ref(true);
    // mobile filter icon
    const isMobileFilter = ref(false);
    function FilterOpen () {
      isMobileFilter.value = true;
      document.body.classList.add("modal-open");
    }
    function FilterClose () {
      isMobileFilter.value = false;
      document.body.classList.remove("modal-open");
    }
    function mysterious_open () {
      mysterious_ep1.value = true;
      document.body.classList.add("modal-open");
    }
    function fomostone_open () {
      fomostone_ep3.value = true;
      document.body.classList.add("modal-open");
    }
    function lord_open () {
      lord_ep2.value = true;
      document.body.classList.add("modal-open");
    }
    function origin_open () {
      origin_ep1.value = true;
      document.body.classList.add("modal-open");
    }
    function mysterious_close () {
      mysterious_ep1.value = false;
      document.body.classList.remove("modal-open");
    }
    function fomostone_close () {
      fomostone_ep3.value = false;
      document.body.classList.remove("modal-open");
    }
    function lord_close () {
      lord_ep2.value = false;
      document.body.classList.remove("modal-open");
    }
    function origin_close () {
      origin_ep1.value = false;
      document.body.classList.remove("modal-open");
    }
    return {
      Luis_info,

      origin_ep1,
      lord_ep2,
      fomostone_ep3,
      mysterious_ep1,

      isOrder,
      isChapter,
      isChangebr,

      mysterious_open,
      fomostone_open,
      lord_open,
      origin_open,

      mysterious_close,
      fomostone_close,
      lord_close,
      origin_close,

      isMobileFilter,
      FilterOpen,
      FilterClose,
      isfiltericon,
    };
  },
  components: {
    Header,
    Footer,
  },
}
</script>

<template>
  <div 
  class="relative w-full h-full xl:h-screen bg-[#EFEFED] lg:overflow-hidden pb-[130px] lg:pb-0">
    <!-- Header -->
    <Header burcolor="text-white" :isburimg="false" />
    <!-- Mobile Luis isChapter remove if -->
    <div 
    class="relative flex xl:hidden w-full h-[340px] sm:h-[480px] bg-[#ff5500] transition-all flex items-end overflow-hidden z-30">
      <div class="absolute flex justify-center items-center z-20 w-full">
        <img src="/image/ninja_comic.png" class="w-[80%] sm:w-[50%] md::w-[35%]">
      </div>
      <div class="absolute pt-52 flex flex-col justify-center items-end w-full z-30">
        <div class="flex flex-row justify-center items-end w-full space-x-2">
          <span class="font-TTOctosquaresBold text-white text-[24px] leading-none">Artist</span>
          <span class="font-AntonRegular text-white text-[96px] leading-[5.5rem]">Luis</span>
        </div>
      </div>
      <!-- background -->
      <div class="absolute top-0 w-full h-full rounded-b-[2rem] overflow-hidden z-20" 
      style="background: -moz-linear-gradient(180deg, rgba(0, 0, 0, 0) 50%, #ff5500 100%);background: -webkit-linear-gradient(180deg, rgba(0, 0, 0, 0) 50%, #ff5500 100%);background: linear-gradient(180deg, rgba(0, 0, 0, 0) 50%, #ff5500 100%);">
      </div>
    </div>
    <div class="relative flex xl:hidden">
      <div 
      class=" w-full rounded-b-[2rem] h-[150px] -mt-24 bg-[#ff5500] z-20 duration-500 absolute" 
      :class="{ 'mt-0' : isChangebr }">
        <!--  -->
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
          class="text-[12px] text-white text-center px-4 sm:px-20 pt-[1.5rem] pb-[0.7rem] sm:pt-[2rem] opacity-0">{{ Luis_info }}</p>
        </div>
      </div>
    </div>
    <!-- Comic list -->
    <div class="max-w-[90%] w-full mx-auto flex flex-col lg:flex-row pb-12 pt-12 sm:py-12 lg:py-0">
      <div class="w-full xl:w-[55%] flex flex-row space-x-0 lg:space-x-6 lg:pt-20">
        <!-- filter -->
        <div class="hidden lg:flex w-[210px] flex-col">
          <div class="space-y-4 pt-12 sticky top-8">
            <!-- seasons -->
            <div 
            @click="isfiltericon =! isfiltericon" 
            class="flex flex-row items-center space-x-2 cursor-pointer">
              <h5 class="text-[#ff5500]">Seasons</h5>
              <svg 
              v-show="isfiltericon"
              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-[#ff5500]">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
              <svg 
              v-show="!isfiltericon"
              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-[#ff5500]">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
              </svg>
            </div>
            <!-- change -->
            <transition name="modal">
              <div 
              v-if="isfiltericon"
              class="bg-white p-2 rounded-lg border border-gray-200">
                <ul class="text-[#ff5500] text-[12px] flex flex-col justify-center items-start space-y-1">
                  <li 
                  :class="{ 'bg-[#ff5500] rounded-lg text-white' : isChapter }"
                  class="px-2 py-1 cursor-pointer" 
                  @click="isChapter = true">Origin Chapter</li>
                  <li 
                  :class="{ 'bg-[#ff5500] rounded-lg text-white' : !isChapter }"
                  class="px-2 py-1 cursor-pointer" 
                  @click="isChapter = false">Saint Seiya Chapter</li>
                </ul>
              </div>
            </transition>
            <!-- order -->
            <h5 class="text-[#ff5500]">Order</h5>
            <ul class="flex flex-col space-y-1">
              <li class="flex justify-start items-center">
                <input 
                @click="isOrder = true"
                type="radio" id="contactChoice1" name="order" value="frst" class="w-4 h-4 rounded bg-white
                border border-gray-200
                focus:border-transparent focus:bg-[#ff5500]
                text-[#ff5500]
                focus:ring-1 focus:ring-offset-2 focus:ring-[#ff5500]" />
                <label for="contactChoice1" class="text-[#ff5500] text-[12px] ml-1">Frst episode</label>
              </li>
              <li class="flex justify-start items-center">
                <input 
                @click="isOrder = false"
                type="radio" id="contactChoice1" name="order" value="last" class="w-4 h-4 rounded bg-white
                border border-gray-200
                focus:border-transparent focus:bg-[#ff5500]
                text-[#ff5500]
                focus:ring-1 focus:ring-offset-2 focus:ring-[#ff5500]" checked/>
                <label for="contactChoice1" class="text-[#ff5500] text-[12px] ml-1">Last episode</label>
              </li>
            </ul>
          </div>
        </div>
        <!-- Origin Chapter isChapter -->
        <div 
        v-if="isChapter"
        class="w-full xl:w-full flex flex-col">
          <div class="relative flex flex-row items-center py-6 lg:py-0">
            <button 
            type="button"
            class="flex lg:hidden" 
            @click="FilterOpen">
              <img src="/image/filter_logo.png" class="w-[25px]">
            </button>
            <h5 class="font-TTOctosquaresBold text-[#ff5500] text-[24px] sm:text-[32px] text-center lg:text-left w-full">Origin Chapter</h5>
          </div>
            <!-- -->
            <div 
            class="flex flex-col space-y-4 h-full lg:h-[70vh] 2xl:h-[85vh] lg:overflow-y-scroll lg:pr-4 pb-[0px] lg:pb-[300px] snap-y"
            :class="{ 'flex-col-reverse space-y-reverse' : isOrder }">
              <div class="w-full min-h-[200px] rounded-[1rem] border border-gray-200 shadow-sm bg-white p-2 overflow-hidden flex flex-row space-x-2 snap-start">
                <div class="w-[50%] bg-cover rounded-lg" style="background-image:url(/image/comic/comic_poster/Origin_ep3-1.webp);background-size: 150%;">
                  
                </div>
                <div class="w-[50%] flex flex-col justify-center items-start">
                  <div class="flex flex-col pt-12">
                    <div>
                    <span class="font-TTOctosquaresBold text-[28px]">#03</span><span class="ml-2 font-TTOctosquaresBold text-[#ff5500] text-[12px]">New</span>
                    </div>
                    <h5 class="font-TTOctosquaresBold text-gray-700">Fomostone</h5>
                  </div>
                  <!-- fomostone_open -->
                  <div class="w-full h-full flex justify-end items-end">
                    <button @click="fomostone_open" type="button" class="bg-[#ff5500] px-2 py-1 text-white rounded-lg flex flex-row items-center transition-all hover:bg-orange-700 z-30">Read
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 ml-1">
                      <path fill-rule="evenodd" d="M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z" clip-rule="evenodd" />
                    </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div class="w-full min-h-[200px] rounded-[1rem] border border-gray-200 shadow-sm bg-white p-2 overflow-hidden flex flex-row space-x-2 snap-start">
                <div class="w-[50%] bg-cover rounded-lg" style="background-image:url(/image/comic/comic_poster/Origin_ep2-1.webp);background-size: 150%;">
                  
                </div>
                <div class="w-[50%] flex flex-col justify-center items-start">
                  <div class="flex flex-col pt-12">
                    <div>
                    <span class="font-TTOctosquaresBold text-[28px]">#02</span>
                    </div>
                    <h5 class="font-TTOctosquaresBold text-gray-700">Lord Zero</h5>
                  </div>
                  <!-- lord_open -->
                  <div class="w-full h-full flex justify-end items-end">
                    <button @click="lord_open" type="button" class="bg-[#ff5500] px-2 py-1 text-white rounded-lg flex flex-row items-center transition-all hover:bg-orange-700 z-30">Read
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 ml-1">
                      <path fill-rule="evenodd" d="M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z" clip-rule="evenodd" />
                    </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div class="w-full min-h-[200px] rounded-[1rem] border border-gray-200 shadow-sm bg-white p-2 overflow-hidden flex flex-row space-x-2 snap-start">
                <div class="w-[50%] bg-cover rounded-lg" style="background-image:url(/image/comic/comic_poster/Origin_ep1.webp);background-size: 150%;">
                  
                </div>
                <div class="w-[50%] flex flex-col justify-center items-start">
                  <div class="flex flex-col pt-12">
                    <div>
                    <span class="font-TTOctosquaresBold text-[28px]">#01</span>
                    </div>
                    <h5 class="font-TTOctosquaresBold text-gray-700">Origin of black holes</h5>
                  </div>
                  <!-- origin_open -->
                  <div class="w-full h-full flex justify-end items-end">
                    <button @click="origin_open" type="button" class="bg-[#ff5500] px-2 py-1 text-white rounded-lg flex flex-row items-center transition-all hover:bg-orange-700 z-30">Read
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 ml-1">
                      <path fill-rule="evenodd" d="M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z" clip-rule="evenodd" />
                    </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
        </div>
         <!-- Saint Seiya Chapter !isChapter -->
        <div 
        v-if="!isChapter"
        class="w-full xl:w-full flex flex-col">
          <div class="relative flex flex-row items-center py-6 lg:py-0">
            <button 
            type="button"
            class="flex lg:hidden" 
            @click="FilterOpen">
              <img src="/image/filter_logo.png" class="w-[25px]">
            </button>
            <h5 class="font-TTOctosquaresBold text-[#ff5500] text-[24px] sm:text-[32px] text-center lg:text-left w-full">Saint Seiya Chapter</h5>
          </div>
            <!-- -->
            <div 
            class="flex flex-col space-y-4 h-full lg:h-[70vh] 2xl:h-[85vh] lg:overflow-y-scroll lg:pr-4"
            :class="{ '' : isOrder }">
              <div class="w-full min-h-[200px] rounded-[1rem] border border-gray-200 shadow-sm bg-white p-2 overflow-hidden flex flex-row space-x-2">
                <div class="w-[50%] bg-cover bg-center rounded-lg" style="background-image:url(/image/comic/comic_poster/mysterious_ep1-1.webp);background-size: 150%;">
                  
                </div>
                <div class="w-[50%] flex flex-col justify-center items-start">
                  <div class="flex flex-col pt-12">
                    <div>
                    <span class="font-TTOctosquaresBold text-[28px]">#01</span><span class="ml-2 font-TTOctosquaresBold text-[#ff5500] text-[12px]">New</span>
                    </div>
                    <h5 class="font-TTOctosquaresBold text-gray-700">mysterious power</h5>
                  </div>
                  <!-- fomostone_open -->
                  <div class="w-full h-full flex justify-end items-end">
                    <button @click="mysterious_open" type="button" class="bg-[#ff5500] px-2 py-1 text-white rounded-lg flex flex-row items-center transition-all hover:bg-orange-700 z-30">Read
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 ml-1">
                      <path fill-rule="evenodd" d="M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z" clip-rule="evenodd" />
                    </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
        </div>

      </div>
      <!-- pc luis remove if -->
      <div 
      class="relative overflow-hidden w-full xl:w-[45%] h-screen hidden xl:flex flex-col justify-start items-center lg:pt-20">
        <div class="h-full relative flex flex-col justify-center items-center">
          <div class="flex flex-col justify-center items-center">
            <div class="flex flex-row items-end justify-center text-center space-x-2">
              <span class="font-TTOctosquaresBold text-[#ff5500] text-[24px] leading-1">Artist</span>
              <span class="font-AntonRegular text-[#ff5500] text-[96px] leading-none">Luis</span>
            </div>
            <p class="w-[360px] text-[12px] text-[#ff5500] py-4 text-center">{{ Luis_info }}</p>
          </div>
          <img src="/image/ninja_comic.png" class="w-[60vh]">
        </div>
      </div>
    </div>
    <!-- Footer -->
    <Footer title="MM-Comic World" textcolor="text-[#ff5500]" bgcolor="" crcolor="text-[#ff5500]" sicolor="fill-[#ff5500]" />
  </div>
    <!-- Origin Chapter -->
    <Teleport to="#comic_body">
      <div 
      v-if="fomostone_ep3" 
      class="fixed top-0 left-0 w-full h-screen bg-white sm:bg-white/90 flex justify-start xs:justify-center items-start xs:items-center z-[210] overflow-y-scroll sm:overflow-hidden">
      <div @click="fomostone_close" class="absolute top-0 left-0 w-full h-screen z-10"></div>
        <!-- fomostone_close -->
        <div class="hidden md:flex absolute top-4 right-4 z-20">
          <button type="button" @click="fomostone_close">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-gray-900">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <!-- mobile close -->
        <div class="absolute md:hidden top-4 left-4 z-30">
          <button type="button" @click="fomostone_close">
            <img src="/image/back.png" class="w-[25px]">
          </button>
        </div>

        <!-- pc -->
        <div
        class="relative max-w-5xl w-full hidden lg:flex flex-row justify-end items-end px-2">
          <!--  -->
          <button 
          @click="fomostone_close();lord_open();"
          type="button" class="bg-[#ff5500] px-2 py-1 text-white rounded-lg flex flex-row items-center justify-center mb-12 mr-6 z-20">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mr-1">
            <path stroke-linecap="round" stroke-linejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
          </svg>
          Prev
          </button>
          <div class="relative max-w-2xl w-full mx-auto flex flex-col justify-center items-center z-20">
            <div class="pb-6">
              <h5 class="font-TTOctosquaresBold text-center text-[36px]">#03</h5>
              <p class="font-TTOctosquaresBold text-gray-700">Fomostone</p>
            </div>
            <div class="relative h-[450px] overflow-y-scroll flex flex-col space-y-1">
              <img
              v-lazy="{ src: '/image/comic/comic_content/03/Origin_ep3-1.webp', loading: '/image/comic/loader_comic.png', error: '/image/comic/loader_comic.png', delay: 50 }">
              <img
              v-lazy="{ src: '/image/comic/comic_content/03/Origin_ep3-2.webp', loading: '/image/comic/loader_comic.png', error: '/image/comic/loader_comic.png', delay: 50 }">
              <img
              v-lazy="{ src: '/image/comic/comic_content/03/Origin_ep3-3.webp', loading: '/image/comic/loader_comic.png', error: '/image/comic/loader_comic.png', delay: 50 }">
            </div>
            <div class="pt-6">
              <p class="text-gray-700">@ Madmanga</p>
            </div>
          </div>
          <!--  -->
          <button 
          @click="fomostone_close();origin_open();"
          type="button" class="bg-[#ff5500] px-2 py-1 text-white rounded-lg flex flex-row items-center justify-center mb-12 ml-6 z-20 opacity-0">Next
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 ml-1">
              <path fill-rule="evenodd" d="M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>
        <!-- mobile -->
        <div class="relative max-w-2xl w-full h-full mx-auto flex lg:hidden flex-col justify-start sm:justify-center items-center z-20">
          <div class="pb-6">
            <h5 class="font-TTOctosquaresBold text-center text-[36px]">#03</h5>
            <p class="font-TTOctosquaresBold text-gray-700">Fomostone</p>
          </div>
          <div class="relative sm:h-[75vh] sm:overflow-y-scroll flex flex-col space-y-1">
            <img
              v-lazy="{ src: '/image/comic/comic_content/03/Origin_ep3-1.webp', loading: '/image/comic/loader_comic.png', error: '/image/comic/loader_comic.png', delay: 50 }">
            <img
              v-lazy="{ src: '/image/comic/comic_content/03/Origin_ep3-2.webp', loading: '/image/comic/loader_comic.png', error: '/image/comic/loader_comic.png', delay: 50 }">
              <img
              v-lazy="{ src: '/image/comic/comic_content/03/Origin_ep3-3.webp', loading: '/image/comic/loader_comic.png', error: '/image/comic/loader_comic.png', delay: 50 }">
          </div>
          <div class="py-6 flex flex-row w-full justify-between px-4">
            <!--  -->
            <button 
            @click="fomostone_close();lord_open();"
            type="button" class="bg-[#ff5500] px-2 py-1 text-white rounded-lg flex flex-row items-center justify-center mb-12 mr-6 z-20">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mr-1">
              <path stroke-linecap="round" stroke-linejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
            </svg>
            Prev
            </button>
            <p class="text-gray-700">@ Madmanga</p>
            <!--  -->
            <button 
            @click="fomostone_close();origin_open();"
            type="button" class="bg-[#ff5500] px-2 py-1 text-white rounded-lg flex flex-row items-center justify-center mb-12 ml-6 z-20 opacity-0">Next
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 ml-1">
                <path fill-rule="evenodd" d="M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </Teleport>
    <Teleport to="#comic_body">
      <div 
      v-if="lord_ep2" 
      class="fixed top-0 left-0 w-full h-screen bg-white sm:bg-white/90 flex justify-start xs:justify-center items-center z-[210] overflow-y-scroll sm:overflow-hidden">
      <div @click="lord_close" class="absolute top-0 left-0 w-full h-screen z-10"></div>
        <!-- fomostone_close -->
        <div class="hidden md:flex absolute top-4 right-4 z-20">
          <button type="button" @click="lord_close">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-gray-900">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <!-- mobile close -->
        <div class="absolute md:hidden top-4 left-4 z-30">
          <button type="button" @click="lord_close">
            <img src="/image/back.png" class="w-[25px]">
          </button>
        </div>

        <!-- pc -->
        <div
        class="relative max-w-5xl w-full hidden lg:flex flex-row justify-end items-end px-2">
          <!--  -->
          <button 
          @click="lord_close();origin_open();"
          type="button" class="bg-[#ff5500] px-2 py-1 text-white rounded-lg flex flex-row items-center justify-center mb-12 mr-6 z-20">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mr-1">
            <path stroke-linecap="round" stroke-linejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
          </svg>
          Prev
          </button>
          <div class="relative max-w-2xl w-full mx-auto flex flex-col justify-center items-center z-20">
            <div class="pb-6">
              <h5 class="font-TTOctosquaresBold text-center text-[36px]">#02</h5>
              <p class="font-TTOctosquaresBold text-gray-700">Lord Zero</p>
            </div>
            <div class="relative h-[450px] overflow-y-scroll flex flex-col space-y-1">
              <img
              v-lazy="{ src: '/image/comic/comic_content/02/Origin_ep2-1.webp', loading: '/image/comic/loader_comic.png', error: '/image/comic/loader_comic.png', delay: 50 }">
              <img
              v-lazy="{ src: '/image/comic/comic_content/02/Origin_ep2-2.webp', loading: '/image/comic/loader_comic.png', error: '/image/comic/loader_comic.png', delay: 50 }">
              <img
              v-lazy="{ src: '/image/comic/comic_content/02/Origin_ep2-3.webp', loading: '/image/comic/loader_comic.png', error: '/image/comic/loader_comic.png', delay: 50 }">
            </div>
            <div class="pt-6">
              <p class="text-gray-700">@ Madmanga</p>
            </div>
          </div>
          <!--  -->
          <button 
          @click="lord_close();fomostone_open();"
          type="button" class="bg-[#ff5500] px-2 py-1 text-white rounded-lg flex flex-row items-center justify-center mb-12 ml-6 z-20">Next
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 ml-1">
              <path fill-rule="evenodd" d="M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>
        <!-- mobile -->
        <div class="relative max-w-2xl w-full h-full mx-auto flex lg:hidden flex-col justify-start sm:justify-center items-center z-20">
          <div class="pb-6">
            <h5 class="font-TTOctosquaresBold text-center text-[36px]">#02</h5>
            <p class="font-TTOctosquaresBold text-gray-700">Lord Zero</p>
          </div>
          <div class="relative sm:h-[75vh] sm:overflow-y-scroll flex flex-col space-y-1">
            <img
            v-lazy="{ src: '/image/comic/comic_content/02/Origin_ep2-1.webp', loading: '/image/comic/loader_comic.png', error: '/image/comic/loader_comic.png', delay: 50 }">
            <img
            v-lazy="{ src: '/image/comic/comic_content/02/Origin_ep2-2.webp', loading: '/image/comic/loader_comic.png', error: '/image/comic/loader_comic.png', delay: 50 }">
            <img
            v-lazy="{ src: '/image/comic/comic_content/02/Origin_ep2-3.webp', loading: '/image/comic/loader_comic.png', error: '/image/comic/loader_comic.png', delay: 50 }">
          </div>
          <div class="py-6 flex flex-row w-full justify-between px-4">
            <!--  -->
            <button 
            @click="lord_close();origin_open();"
            type="button" class="bg-[#ff5500] px-2 py-1 text-white rounded-lg flex flex-row items-center justify-center mb-12 mr-6 z-20">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mr-1">
              <path stroke-linecap="round" stroke-linejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
            </svg>
            Prev
            </button>
            <p class="text-gray-700">@ Madmanga</p>
            <!--  -->
            <button 
            @click="lord_close();fomostone_open();"
            type="button" class="bg-[#ff5500] px-2 py-1 text-white rounded-lg flex flex-row items-center justify-center mb-12 ml-6 z-20">Next
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 ml-1">
                <path fill-rule="evenodd" d="M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </Teleport>
    <Teleport to="#comic_body">
      <div 
      v-if="origin_ep1" 
      class="fixed top-0 left-0 w-full h-screen bg-white sm:bg-white/90 flex justify-start xs:justify-center items-center z-[210] overflow-y-scroll sm:overflow-hidden">
      <div @click="origin_close" class="absolute top-0 left-0 w-full h-screen z-10"></div>
        <!-- fomostone_close -->
        <div class="hidden md:flex absolute top-4 right-4 z-20">
          <button type="button" @click="origin_close">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-gray-900">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <!-- mobile close -->
        <div class="absolute md:hidden top-4 left-4 z-30">
          <button type="button" @click="origin_close">
            <img src="/image/back.png" class="w-[25px]">
          </button>
        </div>

        <!-- pc -->
        <div
        class="relative max-w-5xl w-full hidden lg:flex flex-row justify-end items-end px-2">
          <!--  -->
          <button 
          @click="origin_close();fomostone_open();"
          type="button" class="bg-[#ff5500] px-2 py-1 text-white rounded-lg flex flex-row items-center justify-center mb-12 mr-6 z-20 opacity-0">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mr-1">
            <path stroke-linecap="round" stroke-linejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
          </svg>
          Prev
          </button>
          <div class="relative max-w-2xl w-full mx-auto flex flex-col justify-center items-center z-20">
            <div class="pb-6">
              <h5 class="font-TTOctosquaresBold text-center text-[36px]">#01</h5>
              <p class="font-TTOctosquaresBold text-gray-700">Origin of black holes</p>
            </div>
            <div class="relative h-[450px] overflow-y-scroll flex flex-col space-y-1">
              <img
              v-lazy="{ src: '/image/comic/comic_content/01/Origin_ep1.webp', loading: '/image/comic/loader_comic.png', error: '/image/comic/loader_comic.png', delay: 50 }">
            </div>
            <div class="pt-6">
              <p class="text-gray-700">@ Madmanga</p>
            </div>
          </div>
          <!--  -->
          <button 
          @click="origin_close();lord_open();"
          type="button" class="bg-[#ff5500] px-2 py-1 text-white rounded-lg flex flex-row items-center justify-center mb-12 ml-6 z-20">Next
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 ml-1">
              <path fill-rule="evenodd" d="M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>
        <!-- mobile -->
        <div class="relative max-w-2xl w-full h-full mx-auto flex lg:hidden flex-col justify-start sm:justify-center items-center z-20">
          <div class="pb-6">
            <h5 class="font-TTOctosquaresBold text-center text-[36px]">#01</h5>
            <p class="font-TTOctosquaresBold text-gray-700">Origin of black holes</p>
          </div>
          <div class="relative sm:h-[75vh] sm:overflow-y-scroll flex flex-col space-y-1">
            <img
            v-lazy="{ src: '/image/comic/comic_content/01/Origin_ep1.webp', loading: '/image/comic/loader_comic.png', error: '/image/comic/loader_comic.png', delay: 50 }">
          </div>
          <div class="py-6 flex flex-row w-full justify-between px-4">
            <!--  -->
            <button 
            @click="origin_close();fomostone_open();"
            type="button" class="bg-[#ff5500] px-2 py-1 text-white rounded-lg flex flex-row items-center justify-center mb-12 mr-6 z-20 opacity-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mr-1">
              <path stroke-linecap="round" stroke-linejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
            </svg>
            Prev
            </button>
            <p class="text-gray-700">@ Madmanga</p>
            <!--  -->
            <button 
            @click="origin_close();lord_open();"
            type="button" class="bg-[#ff5500] px-2 py-1 text-white rounded-lg flex flex-row items-center justify-center mb-12 ml-6 z-20">Next
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 ml-1">
                <path fill-rule="evenodd" d="M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </Teleport>
    <!-- Saint Seiya Chapter -->
    <Teleport to="#comic_body">
      <div 
      v-if="mysterious_ep1" 
      class="fixed top-0 left-0 w-full h-screen bg-white sm:bg-white/90 flex justify-start xs:justify-center items-start xs:items-center z-[210] overflow-y-scroll sm:overflow-hidden">
      <div @click="mysterious_close" class="absolute top-0 left-0 w-full h-screen z-10"></div>
        <!-- fomostone_close -->
        <div class="hidden md:flex absolute top-4 right-4 z-20">
          <button type="button" @click="mysterious_close">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-gray-900">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <!-- mobile close -->
        <div class="absolute md:hidden top-4 left-4 z-30">
          <button type="button" @click="mysterious_close">
            <img src="/image/back.png" class="w-[25px]">
          </button>
        </div>

        <!-- pc -->
        <div
        class="relative max-w-5xl w-full hidden lg:flex flex-row justify-end items-end px-2">
          <!--  -->
          <div class="relative max-w-2xl w-full mx-auto flex flex-col justify-center items-center z-20">
            <div class="pb-6">
              <h5 class="font-TTOctosquaresBold text-center text-[36px]">#01</h5>
              <p class="font-TTOctosquaresBold text-gray-700">mysterious power</p>
            </div>
            <div class="relative h-[450px] overflow-y-scroll flex flex-col space-y-1">
              <img
              v-lazy="{ src: '/image/comic/comic_content/m-01/mysterious_ep1-1.webp', loading: '/image/comic/loader_comic.png', error: '/image/comic/loader_comic.png', delay: 50 }">
              <img
              v-lazy="{ src: '/image/comic/comic_content/m-01/mysterious_ep1-2.webp', loading: '/image/comic/loader_comic.png', error: '/image/comic/loader_comic.png', delay: 50 }">
              <img
              v-lazy="{ src: '/image/comic/comic_content/m-01/mysterious_ep1-3.webp', loading: '/image/comic/loader_comic.png', error: '/image/comic/loader_comic.png', delay: 50 }">
              <img
              v-lazy="{ src: '/image/comic/comic_content/m-01/mysterious_ep1-4.webp', loading: '/image/comic/loader_comic.png', error: '/image/comic/loader_comic.png', delay: 50 }">
            </div>
            <div class="pt-6">
              <p class="text-gray-700">@ Madmanga</p>
            </div>
          </div>
          <!--  -->
        </div>
        <!-- mobile -->
        <div class="relative max-w-2xl w-full h-full mx-auto flex lg:hidden flex-col justify-start sm:justify-center items-center z-20">
          <div class="pb-6">
            <h5 class="font-TTOctosquaresBold text-center text-[36px]">#01</h5>
            <p class="font-TTOctosquaresBold text-gray-700">mysterious power</p>
          </div>
          <div class="relative sm:h-[75vh] sm:overflow-y-scroll flex flex-col space-y-1">
            <img
            v-lazy="{ src: '/image/comic/comic_content/m-01/mysterious_ep1-1.webp', loading: '/image/comic/loader_comic.png', error: '/image/comic/loader_comic.png', delay: 50 }">
            <img
            v-lazy="{ src: '/image/comic/comic_content/m-01/mysterious_ep1-2.webp', loading: '/image/comic/loader_comic.png', error: '/image/comic/loader_comic.png', delay: 50 }">
            <img
            v-lazy="{ src: '/image/comic/comic_content/m-01/mysterious_ep1-3.webp', loading: '/image/comic/loader_comic.png', error: '/image/comic/loader_comic.png', delay: 50 }">
            <img
            v-lazy="{ src: '/image/comic/comic_content/m-01/mysterious_ep1-4.webp', loading: '/image/comic/loader_comic.png', error: '/image/comic/loader_comic.png', delay: 50 }">
          </div>
          <div class="pt-6 pb-12 px-4 flex flex-row w-full justify-center ">
            <!--  -->
            <p class="text-gray-700">@ Madmanga</p>
            <!--  -->
          </div>
        </div>
      </div>
    </Teleport>
    <!-- Filter -->
    <Teleport to="body">
      <transition name="scale">
      <div 
      v-if="isMobileFilter" 
      class="fixed top-0 w-full h-screen flex justify-end items-center z-[210]">
      <div @click="FilterClose();" class="absolute top-0 left-0 w-full h-screen bg-white/80 z-20"></div>
        <!-- Close -->
        <div class="flex absolute top-8 left-8 z-30 animate__animated animate__fadeIn animate__delay-1s">
          <button type="button" @click="FilterClose">
            <img src="/image/back.png" class="w-[25px]">
          </button>
        </div>
        <!--  -->
        <div 
        class="relative w-[230px] h-full bg-[#EFEFED] z-[110] flex flex-col justify-start px-6 animate__animated animate__fadeInRight">
        <div class="space-y-4 pt-12">
            <!-- seasons -->
            <div 
            @click="isfiltericon =! isfiltericon"
            class="flex flex-row items-center space-x-2 cursor-pointer">
              <h5 class="text-[#ff5500]">Seasons</h5>
              <svg 
              v-show="isfiltericon"
              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-[#ff5500]">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
              <svg 
              v-show="!isfiltericon"
              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-[#ff5500]">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
              </svg>
            </div>
            <!-- transtion modal -->
            <transition name="modal">
            <div 
            v-if="isfiltericon"
            class="bg-white p-2 rounded-lg border border-gray-200">
              <ul class="text-[#ff5500] text-[12px] flex flex-col justify-center items-start space-y-1">
                <li 
                :class="{ 'bg-[#ff5500] rounded-lg text-white' : isChapter }"
                class="px-2 py-1 cursor-pointer" 
                @click="isChapter = true">Origin Chapter</li>
                <li 
                :class="{ 'bg-[#ff5500] rounded-lg text-white' : !isChapter }"
                class="px-2 py-1 cursor-pointer" 
                @click="isChapter = false">Saint Seiya Chapter</li>
              </ul>
            </div>
            </transition>
            <!-- order -->
            <h5 class="text-[#ff5500]">Order</h5>
            <ul class="flex flex-col space-y-2">
              <li class="flex justify-start items-center">
                <input 
                @click="isOrder = true"
                type="radio" id="contactChoice1" name="order" value="frst" class="w-4 h-4 rounded bg-white
                border border-gray-200
                focus:border-transparent focus:bg-[#ff5500]
                text-[#ff5500]
                focus:ring-1 focus:ring-offset-2 focus:ring-[#ff5500]" />
                <label class="text-[#ff5500] text-[12px] ml-2">Frst episode</label>
              </li>
              <li class="flex justify-start items-center">
                <input 
                @click="isOrder = false"
                type="radio" id="contactChoice1" name="order" value="last" class="w-4 h-4 rounded bg-white
                border border-gray-200
                focus:border-transparent focus:bg-[#ff5500]
                text-[#ff5500]
                focus:ring-1 focus:ring-offset-2 focus:ring-[#ff5500]" checked/>
                <label class="text-[#ff5500] text-[12px] ml-2">Last episode</label>
              </li>
            </ul>
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
  transition: all .5s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-to,
.modal-leave-from {
  opacity: 1
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

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: .5;
  }
}

img[lazy=loading] {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
img[lazy=error] {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
img[lazy=loaded] {
}
</style>
