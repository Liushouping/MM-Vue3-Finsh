<script>
import { ref, onMounted, onUnmounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import MbHrFuture from '../components/MbHrFuture.vue';
import PcHrFuture from '../components/PcHrFuture.vue';

export default {
  setup() {
    const triggers = ScrollTrigger.getAll();

    const is_vision_body = ref(false);
    const is_community_body = ref(false);
    const is_web20_body = ref(false);
    const is_web25_body = ref(false);
    const is_web30_body = ref(false);
    const is_fomostone_body = ref(false);
    const is_mojo_body = ref(false);

    function mb_vision_drew() {
      is_community_body.value = false;
      is_web20_body.value = false;
      is_web25_body.value = false;
      is_web30_body.value = false;
      is_fomostone_body.value = false;
      is_mojo_body.value = false;

      is_vision_body.value =! is_vision_body.value;
    }
    function mb_community_drew() {
      is_vision_body.value = false;
      is_web20_body.value = false;
      is_web25_body.value = false;
      is_web30_body.value = false;
      is_fomostone_body.value = false;
      is_mojo_body.value = false;

      is_community_body.value =! is_community_body.value;
    }

    function mb_web20_drew() {
      is_vision_body.value = false;
      is_community_body.value = false;
      is_web25_body.value = false;
      is_web30_body.value = false;
      is_fomostone_body.value = false;
      is_mojo_body.value = false;

      is_web20_body.value =! is_web20_body.value;
    }

    function mb_web25_drew() {
      is_vision_body.value = false;
      is_community_body.value = false;
      is_web20_body.value = false;
      is_web30_body.value = false;
      is_fomostone_body.value = false;
      is_mojo_body.value = false;

      is_web25_body.value =! is_web25_body.value;
    }

    function mb_web30_drew() {
      is_vision_body.value = false;
      is_community_body.value = false;
      is_web20_body.value = false;
      is_web25_body.value = false;
      is_fomostone_body.value = false;
      is_mojo_body.value = false;

      is_web30_body.value =! is_web30_body.value;
    }

    function mb_fomostone_drew() {
      is_vision_body.value = false;
      is_community_body.value = false;
      is_web20_body.value = false;
      is_web25_body.value = false;
      is_web30_body.value = false;
      is_mojo_body.value = false;

      is_fomostone_body.value =! is_fomostone_body.value;
    }

    function mb_mojo_drew() {
      is_vision_body.value = false;
      is_community_body.value = false;
      is_web20_body.value = false;
      is_web25_body.value = false;
      is_web30_body.value = false;
      is_fomostone_body.value = false;

      is_mojo_body.value =! is_mojo_body.value;
    }

    function scroll_vision() {
      gsap.to(window, 0.1, {scrollTo:0});
    }
    function scroll_community() {
      gsap.to(window, 0.1, {scrollTo:100});
    }
    function scroll_web20() {
      gsap.to(window, 0.1, {scrollTo:300});
    }
    function scroll_web25() {
      gsap.to(window, 0.1, {scrollTo:500});
    }
    function scroll_web30() {
      gsap.to(window, 0.1, {scrollTo:600});
    }
    function scroll_fomo() {
      gsap.to(window, 0.1, {scrollTo:750});
    }
    function scroll_mojo() {
      gsap.to(window, 0.1, {scrollTo:900});
    }

    onMounted(() => {
      ScrollTrigger.refresh();

      let mm = gsap.matchMedia();
      mm.add("(min-width: 1280px)", () => {
        let sections = gsap.utils.toArray('.process__item');
        let process = document.querySelector('.process');
        gsap.to(sections, {
          xPercent: -84 * (sections.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: process,
            markers: false,
            scrub: 1,
            pin: true,
          },
        });
      });

    });
    onUnmounted(() => {
      triggers.forEach((trigger) => {
        trigger.kill();
      });
      ScrollTrigger.clearMatchMedia();
    });

    return {
      scroll_vision,
      scroll_community,
      scroll_web20,
      scroll_web25,
      scroll_web30,
      scroll_fomo,
      scroll_mojo,

      is_vision_body,
      is_community_body,
      is_web20_body,
      is_web25_body,
      is_web30_body,
      is_fomostone_body,
      is_mojo_body,

      mb_vision_drew,
      mb_community_drew,
      mb_web20_drew,
      mb_web25_drew,
      mb_web30_drew,
      mb_fomostone_drew,
      mb_mojo_drew
    };
  },
  components: {
    Header,
    Footer,
    MbHrFuture,
    PcHrFuture,
  },
}
</script>

<template>

<div class="relative w-full h-full xs:h-screen bg-[#000000]">
<!-- -->
<Header burcolor="text-[#ff5500]" isburimg="true" />

<div 
class="fixed pl-[5%] w-[400px] h-full hidden xl:flex flex-row bg-[#000000] items-center z-10 py-12 pl-2" 
style="background: linear-gradient(90deg, rgba(0, 0, 0, 1) 40%, rgba(0, 0, 0, 0) 90%);">
  <div class="pl-6">
    <span class=""><img src="/image/menu_future.png" class="w-[80%]"></span>
  </div>
  <ul class="text-white flex flex-col justify-start items-start w-full space-y-2 pt-6">
    <li>
      <div
      class="w-full flex flex-row items-center space-x-2 cursor-pointer group" 
      @click="scroll_vision">
        <div 
        class="w-[45px] h-[45px] bg-cover bg-center flex justify-center items-center font-TTOctosquaresBold group-hover:text-[#ff5500]" 
        style="background-image: url(/image/menu_future_bg.png);">01
        </div>
        <div class="w-4/5"><p class="text-[14px] text-[#ff5500] group-hover:text-white font-TTOctosquaresBold">VISION & VALUES</p></div>
      </div>
    </li>
    <li>
      <div class="w-full flex flex-row items-center space-x-2 cursor-pointer group" 
      @click="scroll_community">
        <div 
        class="w-[45px] h-[45px] bg-cover bg-center flex justify-center items-center font-TTOctosquaresBold group-hover:text-[#ff5500]" 
        style="background-image: url(/image/menu_future_bg.png);">02
        </div>
        <div class="w-full"><p class="text-[14px] text-[#ff5500] group-hover:text-white font-TTOctosquaresBold whitespace-nowrap">Community Development</p></div>
      </div>
    </li>
    <li>
      <div class="w-full flex flex-row items-center space-x-2 cursor-pointer group" 
      @click="scroll_web20">
        <div 
        class="w-[45px] h-[45px] bg-cover bg-center flex justify-center items-center font-TTOctosquaresBold group-hover:text-[#ff5500]" 
        style="background-image: url(/image/menu_future_bg.png);">03
        </div>
        <div class="w-4/5"><p class="text-[14px] text-[#ff5500] group-hover:text-white font-TTOctosquaresBold">WEB2.0</p></div>
      </div>
    </li>
    <li>
      <div class="w-full flex flex-row items-center space-x-2 cursor-pointer group" 
      @click="scroll_web25">
        <div 
        class="w-[45px] h-[45px] bg-cover bg-center flex justify-center items-center font-TTOctosquaresBold group-hover:text-[#ff5500]" 
        style="background-image: url(/image/menu_future_bg.png);">04
        </div>
        <div class="w-4/5"><p class="text-[14px] text-[#ff5500] group-hover:text-white font-TTOctosquaresBold">WEB2.5</p></div>
      </div>
    </li>
    <li>
      <div class="w-full flex flex-row items-center space-x-2 cursor-pointer group" 
      @click="scroll_web30">
        <div 
        class="w-[45px] h-[45px] bg-cover bg-center flex justify-center items-center font-TTOctosquaresBold group-hover:text-[#ff5500]" 
        style="background-image: url(/image/menu_future_bg.png);">05
        </div>
        <div class="w-4/5"><p class="text-[14px] text-[#ff5500] group-hover:text-white font-TTOctosquaresBold">WEB3.0</p></div>
      </div>
    </li>
    <li>
      <div class="w-full flex flex-row items-center space-x-2 cursor-pointer group" 
      @click="scroll_fomo">
        <div 
        class="w-[45px] h-[45px] bg-cover bg-center flex justify-center items-center font-TTOctosquaresBold group-hover:text-[#ff5500]" 
        style="background-image: url(/image/menu_future_bg.png);">06
        </div>
        <div class="w-4/5"><p class="text-[14px] text-[#ff5500] group-hover:text-white font-TTOctosquaresBold">FOMO Stone</p></div>
      </div>
    </li>
    <li>
      <div class="w-full flex flex-row items-center space-x-2 cursor-pointer group" 
      @click="scroll_mojo">
        <div 
        class="w-[45px] h-[45px] bg-cover bg-center flex justify-center items-center font-TTOctosquaresBold group-hover:text-[#ff5500]" 
        style="background-image: url(/image/menu_future_bg.png);">07
        </div>
        <div class="w-4/5"><p class="text-[14px] text-[#ff5500] group-hover:text-white font-TTOctosquaresBold">Mojo Ecosystem</p></div>
      </div>
    </li>
  </ul>
</div>
<!-- xl:block -->
<div class="process-wrap overflow-hidden bg-[#000000] hidden xl:block">
  <div class="process w-[1000%] xs:w-[700%] flex flex-nowrap items-center h-[100vh] lg:pl-[400px]">
    <!-- -->
    <div class="process__item flex justify-center items-center">
      <section 
      class="relative flex-shrink-0 bg-[#2D2D2D] border border-gray-500 rounded-[3rem] p-6 text-white max-w-[380px]  sm:max-w-[500px] w-full h-[470px] space-y-2 text-center">
        <div class="relative z-20">
          <h5 class="text-[#ff5500] font-TTOctosquaresBold text-[24px]">VISION & VALUES</h5>
          <p class="text-[12px] indent-4 pt-8">The largest derivative manga NFT community in Web3. You can become whoever you want and the unique-self feature different manga elements.</p>
          <p class="text-[12px] indent-4 pt-2">You can participate in manga and theme song creation and other virtual and physical events, decide how the storyline evolving for the next work, and redeem and purchase physical GKs and merchandise. Come join the biggest manga community in Web3.
          </p>
          <p class="text-[12px] indent-4 pt-2">You can discuss everything you love in the forum. We are also constantly hiring great manga creators and manga KOLs from all over the world or even you to build the biggest manga forum in Web3. We also provide the first-handed news.</p>
<!--           <img src="/image/mm_home_logo.png" class="w-[180px] mx-auto py-12"> -->
        </div>
      </section>
      <PcHrFuture />
    </div>
    <div class="process__item flex justify-center items-center">
      <section 
      class="relative flex-shrink-0 bg-[#2D2D2D] border border-gray-500 rounded-[3rem] p-6 text-white max-w-[380px] sm:max-w-[500px] w-full h-[470px] space-y-2">
        <div class="relative z-20">
          <h5 class="text-[#ff5500] font-TTOctosquaresBold text-[24px] text-center">Community Development</h5>
          <h5 class="text-[14px] text-[#ff5500] pt-6 font-TTOctosquaresBold">- Community voice</h5>
          <p class="text-[12px] indent-4">From moderators and core members to community members, we value different voices. We are open for everyone’s opinion and feedback.</p>
          <h5 class="text-[14px] text-[#ff5500] pt-2 font-TTOctosquaresBold">- MM Coin</h5>
          <p class="text-[12px] indent-4">We would like to extend our coin ecosystem for you to participate in more fun events, including physical and virtual redemptions. More importantly, we are also exploring all possibilities.</p>
          <h5 class="text-[14px] text-[#ff5500] pt-2 font-TTOctosquaresBold">- Manga Forum</h5>
          <p class="text-[12px] indent-4">You can discuss everything you love in the forum. We are also constantly hiring great manga creators and manga KOLs from all over the world or even you to build the biggest manga forum in Web3. We also provide the first-handed news.</p>
        </div>
<!--         <div class="absolute bottom-0 -right-20 z-10 grayscale">
          <img src="/image/img_future_01.png" class="w-[70%]">
        </div> -->
      </section>
      <PcHrFuture />
    </div>
    <div class="process__item flex justify-center items-center">
      <section 
      class="relative flex-shrink-0 bg-[#2D2D2D] border border-gray-500 rounded-[3rem] p-6 text-white max-w-[380px] sm:max-w-[500px] w-full h-[470px] space-y-2">
        <div class="relative z-20">
          <h5 class="text-[#ff5500] font-TTOctosquaresBold text-[24px] text-center">WEB2.0</h5>
          <h5 class="text-[14px] text-[#ff5500] pt-6 font-TTOctosquaresBold">- Everything About Manga</h5>
          <p class="text-[12px] indent-4">We are pushing MadManga forward by holding more physical events and re-designing our website. We will lead all of the manga lovers to experience everything.</p>
          <h5 class="text-[14px] text-[#ff5500] pt-2 font-TTOctosquaresBold">- Crossover Collaboration</h5>
          <p class="text-[12px] indent-4">MadManga carries everyone’s manga energy. You will be about to feel and see it everywhere in the world as we are working with many brands in different industries.</p>
          <h5 class="text-[14px] text-[#ff5500] pt-2 font-TTOctosquaresBold">- Original Co-Branding</h5>
          <p class="text-[12px] indent-4">Are you wondering if we are working with the original brands? All we can say is, you will not have to wait long. As we believe in each creator and fan’s energy, we are making it happen! (Have you figured out our strategic partners…?)</p>
          <h5 class="text-[14px] text-[#ff5500] pt-2 font-TTOctosquaresBold">- Physical Events</h5>
          <p class="text-[12px] indent-4">We have held multiple events in the U.S., Korea, and other countries with our brand partners. Currently, we are also actively prepare for anime conventions and other events.</p>
        </div>
<!--         <div class="absolute bottom-0 -right-20 z-10 grayscale">
          <img src="/image/img_future_02.png" class="w-[70%]">
        </div> -->
      </section>
      <PcHrFuture />
    </div>
    <div class="process__item flex justify-center items-center">
      <section 
      class="relative flex-shrink-0 bg-[#2D2D2D] border border-gray-500 rounded-[3rem] p-6 text-white max-w-[380px] sm:max-w-[500px] w-full h-[470px] space-y-2">
        <div class="relative z-20">
          <h5 class="text-[#ff5500] font-TTOctosquaresBold text-[24px] text-center">WEB2.5</h5>
          <h5 class="text-[14px] text-[#ff5500] pt-6 font-TTOctosquaresBold">- Display Your Collection</h5>
          <p class="text-[12px] indent-4">Your NFTs are no long just JPEGs. With the implementation of AR techniques and our physical devices with our strategic partners and connections, you will be able to showcase your NFTs anytime, anywhere.</p>
          <h5 class="text-[14px] text-[#ff5500] pt-2 font-TTOctosquaresBold">- The Convergence of Physical & Virtual Worlds</h5>
          <p class="text-[12px] indent-4">We want to transform your NFTs into physical merchandise and GKs as well as your works into NFTs. with the involvement of Mojo.</p>
        </div>
<!--         <div class="absolute bottom-0 flex justify-center z-10 grayscale">
          <img src="/image/img_future_03.png" class="w-[100%]">
        </div> -->
      </section>
      <PcHrFuture />
    </div>
    <div class="process__item flex justify-center items-center">
      <section 
      class="relative flex-shrink-0 bg-[#2D2D2D] border border-gray-500 rounded-[3rem] p-6 text-white max-w-[380px] sm:max-w-[500px] w-full h-[470px] space-y-2">
        <div class="relative z-20">
          <h5 class="text-[#ff5500] font-TTOctosquaresBold text-[24px] text-center">WEB3.0</h5>
          <h5 class="text-[14px] text-[#ff5500] pt-6 font-TTOctosquaresBold">- The Development of the Metaverse?</h5>
          <p class="text-[12px] indent-4">We know you are keen to know. At the same time, we have invested great amount of time in bridging the virtual and the physical world, including a Discord forum. It is highly possible that you can involve in some online gameplay within 1 to 2 years.</p>
          <h5 class="text-[14px] text-[#ff5500] pt-2 font-TTOctosquaresBold">- Co-Branding</h5>
          <p class="text-[12px] indent-4">We have actively formed strategic partnerships and built virtual spaces with NFT brands. All of the movements look promising.</p>
          <h5 class="text-[14px] text-[#ff5500] pt-2 font-TTOctosquaresBold">- What You Are Looking Forward</h5>
          <p class="text-[12px] indent-4">We know that you are probably thinking about GameFi, and MadManga has a strategic conglomerate company behind that is making it happen. You can start to think what will happen in 1 to 2 years.</p>
        </div>
<!--         <div class="absolute -bottom-4 -right-20 z-10">
          <img src="/image/img_future_04.png" class="w-[70%]">
        </div> -->
      </section>
      <PcHrFuture />
    </div>
    <div class="process__item flex justify-center items-center">
      <section 
      class="relative flex-shrink-0 bg-[#2D2D2D] border border-gray-500 rounded-[3rem] p-6 text-white max-w-[380px] sm:max-w-[500px] w-full h-[470px] space-y-2">
        <div class="relative z-20">
          <h5 class="text-[#ff5500] font-TTOctosquaresBold text-[24px] text-center">FOMO Stone</h5>
          <h5 class="text-[14px] text-[#ff5500] pt-6 font-TTOctosquaresBold">- Manga ID Card</h5>
          <p class="text-[12px] indent-4">FOMO Stone, an ID card in the adventurous Web3 world, stays with you forever. Holding it grants you all the benefits and access to virtual and physical events.</p>
          <h5 class="text-[14px] text-[#ff5500] pt-2 font-TTOctosquaresBold">- Evolution?</h5>
          <p class="text-[12px] indent-4">It will for sure hatch under the influence of Mojo; however, your FOMO Stone will never disappear.</p>
        </div>
<!--         <div class="absolute -bottom-4 -right-20 z-10 grayscale">
          <img src="/image/img_future_05.png" class="w-[100%] brightness-50">
        </div> -->
      </section>
      <PcHrFuture />
    </div>
    <div class="process__item flex justify-center items-center">
      <section 
      class="relative flex-shrink-0 bg-[#2D2D2D] border border-gray-500 rounded-[3rem] p-6 text-white max-w-[380px] sm:max-w-[500px] w-full h-[470px] space-y-2">
        <div class="relative z-20">
          <h5 class="text-[#ff5500] font-TTOctosquaresBold text-[24px] text-center">Mojo Ecology</h5>
          <h5 class="text-[14px] text-[#ff5500] pt-6 font-TTOctosquaresBold">- Mojo</h5>
          <p class="text-[12px] indent-4">As the mysterious and great energy from the MadManga universe, Mojo leads all NFTs move toward the progress of bridging the virtual and the physical world.</p>
          <h5 class="text-[14px] text-[#ff5500] pt-2 font-TTOctosquaresBold">- Large Ecosystem</h5>
          <p class="text-[12px] indent-4">There are tons of possibilities for your character to evolve, hatch, mutate, and co-brand as Mojo can absorb and combine all kinds of energy with itself. You can regard it as a thick catalog for universe.</p>
        </div>
<!--         <div class="absolute bottom-0 -right-20 z-10 grayscale">
          <img src="/image/img_future_06.png" class="w-[70%]">
        </div> -->
      </section>
      <span class="bg-[#ff5500] w-[4px] h-[4px] rounded-full opacity-0">&nbsp;</span><hr class="px-4 opacity-0"><span class="bg-[#ff5500] w-[4px] h-[4px] rounded-full opacity-0">&nbsp;</span>
    </div>
  </div>
</div>
<!-- mobile -->
  <div class="bg-black py-24 flex xl:hidden">
  <div class="max-w-[90%] w-full h-full xl:h-[100vh] mx-auto flex flex-col xl:hidden justify-center items-center">
  <!-- VISION & VALUES -->
  <div 
  @click="mb_vision_drew"
  class="relative bg-[#2D2D2D] border border-gray-500 rounded-[1.5rem] pt-3 px-4 pb-6 text-white w-full h-[60px] duration-200 ease-linear flex flex-col justify-start items-center cursor-pointer" 
  :class="{ 'h-[400px] sm:h-[300px]' : is_vision_body }">
    <h5 
    class="font-TTOctosquaresBold text-white text-center text-[#ff5500] text-[24px]">VISION & VALUES</h5>

    <div 
    v-if="is_vision_body" 
    class="relative">
      <p class="text-[12px] indent-4 pt-8">The largest derivative manga NFT community in Web3. You can become whoever you want and the unique-self feature different manga elements.</p>
      <p class="text-[12px] indent-4 pt-2">You can participate in manga and theme song creation and other virtual and physical events, decide how the storyline evolving for the next work, and redeem and purchase physical GKs and merchandise. Come join the biggest manga community in Web3.
      </p>
      <p class="text-[12px] indent-4 pt-2">You can discuss everything you love in the forum. We are also constantly hiring great manga creators and manga KOLs from all over the world or even you to build the biggest manga forum in Web3. We also provide the first-handed news.</p>
<!--       <img src="/image/mm_home_logo.png" class="w-[180px] mx-auto py-4"> -->
    </div>
  </div>

  <MbHrFuture />

  <!-- Community Development -->
  <div 
  @click="mb_community_drew"
  class="relative bg-[#2D2D2D] border border-gray-500 rounded-[1.5rem] pt-3 px-4 pb-6 text-white w-full h-[60px] duration-200 ease-linear flex flex-col justify-start items-center cursor-pointer overflow-hidden" 
  :class="{ 'h-[420px] sm:h-[340px]' : is_community_body }">
    <h5 
    class="font-TTOctosquaresBold text-white text-center text-[#ff5500] text-[22px] xs:text-[24px]">Community Development</h5>

    <div 
    v-if="is_community_body">
      <div class="relative z-20">
        <h5 class="text-[14px] text-[#ff5500] pt-6 font-TTOctosquaresBold">- Community voice</h5>
        <p class="text-[12px] indent-4">From moderators and core members to community members, we value different voices. We are open for everyone’s opinion and feedback.</p>
        <h5 class="text-[14px] text-[#ff5500] pt-2 font-TTOctosquaresBold">- MM Coin</h5>
        <p class="text-[12px] indent-4">We would like to extend our coin ecosystem for you to participate in more fun events, including physical and virtual redemptions. More importantly, we are also exploring all possibilities.</p>
        <h5 class="text-[14px] text-[#ff5500] pt-2 font-TTOctosquaresBold">- Manga Forum</h5>
        <p class="text-[12px] indent-4">You can discuss everything you love in the forum. We are also constantly hiring great manga creators and manga KOLs from all over the world or even you to build the biggest manga forum in Web3. We also provide the first-handed news.</p>
      </div>
<!--       <div class="absolute -bottom-8 -right-20 z-10 grayscale">
        <img src="/image/img_future_01.png" class="w-[70%]">
      </div> -->
    </div>
  </div>

  <MbHrFuture />

  <!-- WEB2.0 -->
  <div 
  @click="mb_web20_drew"
  class="relative bg-[#2D2D2D] border border-gray-500 rounded-[1.5rem] pt-3 px-4 pb-6 text-white w-full h-[60px] duration-200 ease-linear flex flex-col justify-start items-center cursor-pointer overflow-hidden" 
  :class="{ 'h-[520px] sm:h-[420px]' : is_web20_body }">
    <h5 
    class="font-TTOctosquaresBold text-white text-center text-[#ff5500] text-[24px]">WEB2.0</h5>

    <div 
    v-if="is_web20_body">
      <div class="relative z-20">
        <h5 class="text-[14px] text-[#ff5500] pt-6 font-TTOctosquaresBold">- Everything About Manga</h5>
        <p class="text-[12px] indent-4">We are pushing MadManga forward by holding more physical events and re-designing our website. We will lead all of the manga lovers to experience everything.</p>
        <h5 class="text-[14px] text-[#ff5500] pt-2 font-TTOctosquaresBold">- Crossover Collaboration</h5>
        <p class="text-[12px] indent-4">MadManga carries everyone’s manga energy. You will be about to feel and see it everywhere in the world as we are working with many brands in different industries.</p>
        <h5 class="text-[14px] text-[#ff5500] pt-2 font-TTOctosquaresBold">- Original Co-Branding</h5>
        <p class="text-[12px] indent-4">Are you wondering if we are working with the original brands? All we can say is, you will not have to wait long. As we believe in each creator and fan’s energy, we are making it happen! (Have you figured out our strategic partners…?)</p>
        <h5 class="text-[14px] text-[#ff5500] pt-2 font-TTOctosquaresBold">- Physical Events</h5>
        <p class="text-[12px] indent-4">We have held multiple events in the U.S., Korea, and other countries with our brand partners. Currently, we are also actively prepare for anime conventions and other events.</p>
      </div>
<!--       <div class="absolute bottom-0 -right-20 z-10 grayscale">
        <img src="/image/img_future_02.png" class="w-[70%]">
      </div> -->
    </div>
  </div>

  <MbHrFuture />

  <!-- WEB2.5 -->
  <div 
  @click="mb_web25_drew"
  class="relative bg-[#2D2D2D] border border-gray-500 rounded-[1.5rem] pt-3 px-4 pb-6 text-white w-full h-[60px] duration-200 ease-linear flex flex-col justify-start items-center cursor-pointer overflow-hidden" 
  :class="{ 'h-[350px] sm:h-[250px]' : is_web25_body }">
    <h5 
    class="font-TTOctosquaresBold text-white text-center text-[#ff5500] text-[24px]">WEB2.5</h5>

    <div 
    v-if="is_web25_body">
      <div class="relative z-20">
        <h5 class="text-[14px] text-[#ff5500] pt-6 font-TTOctosquaresBold">- Display Your Collection</h5>
        <p class="text-[12px] indent-4">Your NFTs are no long just JPEGs. With the implementation of AR techniques and our physical devices with our strategic partners and connections, you will be able to showcase your NFTs anytime, anywhere.</p>
        <h5 class="text-[14px] text-[#ff5500] pt-2 font-TTOctosquaresBold">- The Convergence of Physical & Virtual Worlds</h5>
        <p class="text-[12px] indent-4">We want to transform your NFTs into physical merchandise and GKs as well as your works into NFTs. with the involvement of Mojo.</p>
      </div>
<!--       <div class="absolute bottom-0 flex justify-center z-10 grayscale">
        <img src="/image/img_future_03.png" class="w-[100%] sm:w-[70%]">
      </div> -->
    </div>
  </div>

  <MbHrFuture />

  <!-- WEB3.0 -->
  <div 
  @click="mb_web30_drew"
  class="relative bg-[#2D2D2D] border border-gray-500 rounded-[1.5rem] pt-3 px-4 pb-6 text-white w-full h-[60px] duration-200 ease-linear flex flex-col justify-start items-center cursor-pointer overflow-hidden" 
  :class="{ 'h-[440px] sm:h-[350px]' : is_web30_body }">
    <h5 
    class="font-TTOctosquaresBold text-white text-center text-[#ff5500] text-[24px]">WEB3.0</h5>

    <div 
    v-if="is_web30_body">
      <div class="relative z-20">
        <h5 class="text-[14px] text-[#ff5500] pt-6 font-TTOctosquaresBold">- The Development of the Metaverse?</h5>
        <p class="text-[12px] indent-4">We know you are keen to know. At the same time, we have invested great amount of time in bridging the virtual and the physical world, including a Discord forum. It is highly possible that you can involve in some online gameplay within 1 to 2 years.</p>
        <h5 class="text-[14px] text-[#ff5500] pt-2 font-TTOctosquaresBold">- Co-Branding</h5>
        <p class="text-[12px] indent-4">We have actively formed strategic partnerships and built virtual spaces with NFT brands. All of the movements look promising.</p>
        <h5 class="text-[14px] text-[#ff5500] pt-2 font-TTOctosquaresBold">- What You Are Looking Forward</h5>
        <p class="text-[12px] indent-4">We know that you are probably thinking about GameFi, and MadManga has a strategic conglomerate company behind that is making it happen. You can start to think what will happen in 1 to 2 years.</p>
      </div>
<!--       <div class="absolute -bottom-4 -right-20 z-10">
        <img src="/image/img_future_04.png" class="w-[70%]">
      </div> -->
    </div>
  </div>

  <MbHrFuture />

  <!-- FOMO Stone -->
  <div 
  @click="mb_fomostone_drew"
  class="relative bg-[#2D2D2D] border border-gray-500 rounded-[1.5rem] pt-3 px-4 pb-6 text-white w-full h-[60px] duration-200 ease-linear flex flex-col justify-start items-center cursor-pointer overflow-hidden"
  :class="{ 'h-[350px] sm:h-[250px]' : is_fomostone_body }">
    <h5 
    class="font-TTOctosquaresBold text-white text-center text-[#ff5500] text-[24px]">FOMO Stone</h5>

    <div 
    v-if="is_fomostone_body">
      <div class="relative z-20">
        <h5 class="text-[14px] text-[#ff5500] pt-6 font-TTOctosquaresBold">- Manga ID Card</h5>
        <p class="text-[12px] indent-4">FOMO Stone, an ID card in the adventurous Web3 world, stays with you forever. Holding it grants you all the benefits and access to virtual and physical events.</p>
        <h5 class="text-[14px] text-[#ff5500] pt-2 font-TTOctosquaresBold">- Evolution?</h5>
        <p class="text-[12px] indent-4">It will for sure hatch under the influence of Mojo; however, your FOMO Stone will never disappear.</p>
      </div>
<!--       <div class="absolute -bottom-4 -right-20 z-10 grayscale">
        <img src="/image/img_future_05.png" class="w-[100%] sm:w-[70%] brightness-50">
      </div> -->
    </div>
  </div>

  <MbHrFuture />

  <!-- Mojo Ecology -->
  <div 
  @click="mb_mojo_drew"
  class="relative bg-[#2D2D2D] border border-gray-500 rounded-[1.5rem] pt-3 px-4 pb-6 text-white w-full h-[60px] duration-200 ease-linear flex flex-col justify-start items-center cursor-pointer overflow-hidden" 
  :class="{ 'h-[350px] sm:h-[250px]' : is_mojo_body }">
    <h5 
    class="font-TTOctosquaresBold text-white text-center text-[#ff5500] text-[24px]">Mojo Ecosystem</h5>

    <div 
    v-if="is_mojo_body">
      <div class="relative z-20">
        <h5 class="text-[14px] text-[#ff5500] pt-6 font-TTOctosquaresBold">- Mojo</h5>
        <p class="text-[12px] indent-4">As the mysterious and great energy from the MadManga universe, Mojo leads all NFTs move toward the progress of bridging the virtual and the physical world.</p>
        <h5 class="text-[14px] text-[#ff5500] pt-2 font-TTOctosquaresBold">- Large Ecosystem</h5>
        <p class="text-[12px] indent-4">There are tons of possibilities for your character to evolve, hatch, mutate, and co-brand as Mojo can absorb and combine all kinds of energy with itself. You can regard it as a thick catalog for universe.</p>
      </div>
<!--       <div class="absolute bottom-0 -right-20 z-10 grayscale">
        <img src="/image/img_future_06.png" class="w-[70%]">
      </div> -->
    </div>
  </div>
  </div>

</div>
<!-- float -->
<div class="hidden sm:flex fixed left-1/3 xl:left-4 xl:left-72 bottom-4 xl:bottom-20 z-[130] pl-4">
  <img src="/image/fly_future.png" class="w-[210px] float">
</div>
<div class="relative flex sm:hidden justify-center items-center py-12 z-[130] bg-black z-0">
  <img src="/image/fly_future.png" class="w-[210px] float">
</div>
<!-- footer -->
<Footer title="Future" textcolor="text-[#ff5500]" bgcolor="" crcolor="text-[#ff5500]" sicolor="fill-[#ff5500]"/>
</div>


</template>

<style scoped>

hr {
  height: 1px;
  background-color: #ff5500;
  border: none;
}

.float {
  animation: float 4s ease-in-out infinite;
}

@keyframes float {
  0% {
    transform: translateY(0px);
    scale: 1;
  }
  50% {
    transform: translateY(-30px);
    scale: 1.01;
  }
  100% {
    transform: translateY(0px);
    scale: 1;
  }
}

</style>
