<script>
import { ref } from "vue";
export default {
  props: ['bgcolor','title','textcolor','crcolor','sicolor','iscard'],
  setup() {
    const pc_comingsoon = ref(false);
    const mb_comingsoon = ref(false);
    return {
      pc_comingsoon,
      mb_comingsoon
    }
  }
}
</script>

<template>
  <footer class="fixed bottom-0 w-full max-h-[120px] lg:max-h-[130px] h-full flex flex-col lg:flex-row justify-center items-end px-4  pointer-events-none z-30" :class="bgcolor">
  	<div class="w-full lg:w-[65%] flex flex-row justify-between items-center pb-2 xs:pb-4">
  		<p class="font-bold text-[42px] sm:text-[64px] lg:text-[96px] font-AntonRegular leading-none" :class="textcolor">{{ title }}</p>
      <!-- flex lg:hidden -->
      <div class="relative">
        <div 
        v-if="iscard"
        @mouseover="mb_comingsoon = true"
        @mouseleave="mb_comingsoon = false"
        class="w-[120px] xs:w-[160px] flex lg:hidden flex-row items-center rounded-lg bg-violet-500 p-2 overflow-hidden pointer-events-auto">
          <div class="w-1/2 flex flex-col text-white leading-4 font-TTOctosquaresBold">
            <span>TO</span>
            <span>THE</span>
            <span>STONE</span>
          </div>
          <div class="w-1/2 relative">
            <div class="absolute -top-8 -right-2">
              <img src="/image/mm_home_fly.png" class="w-[75px]">
            </div>
          </div>
        </div>
        <div 
        v-if="mb_comingsoon"
        class="absolute top-0 bg-black/70 w-full h-full flex justify-center items-center rounded-lg animate__animated animate__fadeIn animate__faster">
          <p class="font-bold text-white font-AntonRegular text-[18px] tracking-[1px]">coming soon</p>
        </div>
      </div>
  	</div>
  	<div class="w-full lg:w-[35%] flex flex-col justify-center lg:justify-between items-end lg:py-4 lg:space-y-2">
      <!-- hidden lg:flex -->
      <div class="relative">
        <div 
        v-if="iscard" 
        @mouseover="pc_comingsoon = true"
        @mouseleave="pc_comingsoon = false"
        class="w-[160px] hidden lg:flex flex-row items-center rounded-lg bg-violet-500 p-2 overflow-hidden pointer-events-auto">
          <div class="w-1/2 flex flex-col text-white leading-4 font-TTOctosquaresBold">
            <span>TO</span>
            <span>THE</span>
            <span>STONE</span>
          </div>
          <div class="w-1/2 relative">
            <div class="absolute -top-8 -right-2">
              <img src="/image/mm_home_fly.png" class="w-[75px]">
            </div>
          </div>
        </div>
        <div 
        v-if="pc_comingsoon"
        class="absolute top-0 bg-black/70 w-full h-full flex justify-center items-center rounded-lg animate__animated animate__fadeIn animate__faster">
          <p class="font-bold text-white font-AntonRegular text-[18px] tracking-[1px]">coming soon</p>
        </div>
      </div>

  		<div class="w-full flex flex-col lg:flex-row justify-center lg:justify-between items-start lg:items-end space-y-0 lg:space-x-4 space-y-0">
        <div>
          <p class="text-[12px]" :class="crcolor">Copyright MadManga all rights reserved {{  new Date().getFullYear() }}</p>
        </div>

        <ul class="hidden lg:flex flex-row space-x-6">
          <li class="pointer-events-auto">
            <a href="https://discord.com/invite/madmanga">
              <svg class="w-[24px] h-[24px]" :class="sicolor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18.59 14.13"><path class="cls-1" d="M435.87,401.54c0,.41-.05.82-.07,1.24a.34.34,0,0,1-.16.28,16,16,0,0,1-4.42,2.22.18.18,0,0,1-.24-.08c-.27-.46-.55-.91-.83-1.37-.06-.1,0-.15.08-.19l1.26-.6c.16-.08.15-.11,0-.24a.41.41,0,0,0-.51-.07,10.2,10.2,0,0,1-3.24.88,10.83,10.83,0,0,1-5.1-.66c-.21-.08-.43-.16-.63-.26a.27.27,0,0,0-.34.05c-.25.2-.26.21,0,.35s.76.37,1.15.54c.13.06.15.11.08.23-.28.45-.56.9-.83,1.35-.06.1-.12.1-.22.07a15.36,15.36,0,0,1-4.44-2.25.36.36,0,0,1-.13-.23c0-.65-.06-1.3-.06-1.94a13.52,13.52,0,0,1,.28-2.53,16.26,16.26,0,0,1,2.39-5.75.91.91,0,0,1,.43-.37,16.19,16.19,0,0,1,3.41-1,.18.18,0,0,1,.22.1c.11.25.25.5.36.75a.19.19,0,0,0,.23.12,12.11,12.11,0,0,1,2.33-.14c.54,0,1.08.09,1.62.14a.18.18,0,0,0,.22-.12c.11-.25.24-.5.36-.75a.15.15,0,0,1,.19-.1,15.25,15.25,0,0,1,3.57,1.11.47.47,0,0,1,.19.15,15.77,15.77,0,0,1,2.24,4.81,13.87,13.87,0,0,1,.51,3.2c0,.37,0,.73,0,1.1Zm-4.53-2.6a1.87,1.87,0,0,0-.44-1.28,1.54,1.54,0,0,0-2.3-.17,2,2,0,0,0,0,2.89,1.56,1.56,0,0,0,2,.17A1.89,1.89,0,0,0,431.34,398.94Zm-6.18,0a1.91,1.91,0,0,0-.53-1.4,1.56,1.56,0,0,0-2.24-.05,2,2,0,0,0,0,2.88,1.54,1.54,0,0,0,1.93.17A1.87,1.87,0,0,0,425.16,399Z" transform="translate(-417.28 -391.17)"/></svg>
            </a>
          </li>
          <li class="pointer-events-auto">
            <a href="https://twitter.com/MadmangaNFT">
              <svg class="w-[24px] h-[24px]" :class="sicolor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.82 13.77"><path class="cls-1" d="M392.09,405.91a7.16,7.16,0,0,0,5.09-1.47,3.58,3.58,0,0,1-3.27-2.4,4,4,0,0,0,1.61-.09,3.54,3.54,0,0,1-2-1.21,3.48,3.48,0,0,1-.79-2.22,3.56,3.56,0,0,0,1.55.42,3.57,3.57,0,0,1-1.09-4.65,10,10,0,0,0,7.2,3.65c0-.22,0-.4-.05-.58a3.31,3.31,0,0,1,.9-2.58,3.35,3.35,0,0,1,3.12-1.07,3.3,3.3,0,0,1,1.87,1,.24.24,0,0,0,.25.07,6.68,6.68,0,0,0,1.89-.73l.13-.06a2.7,2.7,0,0,1-.58,1.07c-.27.29-.57.55-.85.81a8,8,0,0,0,1.87-.46,4.87,4.87,0,0,1-.33.43c-.38.39-.77.77-1.17,1.13a.48.48,0,0,0-.19.39,9.82,9.82,0,0,1-1.85,6,9.23,9.23,0,0,1-5.6,3.82,10.43,10.43,0,0,1-3.2.25,9.65,9.65,0,0,1-4.42-1.45Z" transform="translate(-392.09 -393.66)"/></svg>
            </a>
          </li>
          <li class="pointer-events-auto">
            <a href="https://www.instagram.com/madmanganft">
              <svg class="w-[24px] h-[24px]" :class="sicolor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.28 17.26"><path class="cls-1" d="M409.13,400.48c0,.53,0,1,0,1.58,0,.78,0,1.57-.08,2.35a5.09,5.09,0,0,1-.86,2.66,4.36,4.36,0,0,1-2.84,1.83,10.53,10.53,0,0,1-1.78.18c-1.68,0-3.37.06-5.06,0a19.44,19.44,0,0,1-2.65-.18A4.47,4.47,0,0,1,392,405.2a9.89,9.89,0,0,1-.14-1.53c0-1.34,0-2.69,0-4,0-.82,0-1.64,0-2.46a6.71,6.71,0,0,1,.49-2.54,4.3,4.3,0,0,1,2.22-2.24,5.06,5.06,0,0,1,2.09-.47c2.09,0,4.18-.07,6.27-.06a10.09,10.09,0,0,1,2.57.24,4.47,4.47,0,0,1,3.41,3.67,10.72,10.72,0,0,1,.14,1.5c0,1.07,0,2.14,0,3.2Zm-8.69-7.13h0c-.76,0-1.51,0-2.26,0a19.83,19.83,0,0,0-2.18.19,2.88,2.88,0,0,0-2.4,2.23,12.09,12.09,0,0,0-.24,2.81c0,1.95-.09,3.9.1,5.85a5,5,0,0,0,.28,1.21,2.89,2.89,0,0,0,2.58,1.84c.93.09,1.87.14,2.81.15,1.34,0,2.68,0,4,0a12.37,12.37,0,0,0,1.93-.19,2.81,2.81,0,0,0,2.31-2.18,8.94,8.94,0,0,0,.24-2.31c0-1.76,0-3.53,0-5.3a8.8,8.8,0,0,0-.19-1.77,2.8,2.8,0,0,0-2.15-2.25,10.45,10.45,0,0,0-2.43-.25C402,393.33,401.23,393.35,400.44,393.35Z" transform="translate(-391.86 -391.86)"/><path :class="sicolor" d="M400.5,404.9a4.42,4.42,0,1,1,0-8.83,4.42,4.42,0,1,1,0,8.83Zm2.91-4.41a2.92,2.92,0,1,0-3,2.91A2.93,2.93,0,0,0,403.41,400.49Z" transform="translate(-391.86 -391.86)"/><path :class="sicolor" d="M404.13,395.85a1,1,0,1,1,1,1A1,1,0,0,1,404.13,395.85Z" transform="translate(-391.86 -391.86)"/></svg>
            </a>
          </li>
        </ul>  
      </div>
  	</div>
  </footer>
  
</template>
