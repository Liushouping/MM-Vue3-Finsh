<script>
import { ref } from "vue";
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

export default {
  setup() {
  	const Team_info = "MadManga is an international team, with Silicon Valley venture capitalists as consultants and team members from copyrights, exhibition curation, e-sports, and tech backgrounds. The members have respectively worked closely with Disney, Warner Bros. Studio, Barbie, ONE PIECE, and NARUTO. In addition, tens of contemporary artists will join hands to work on this project.";
  	const Egg = ref({
  		David: {
  			img: "/image/egg/david_egg.jpeg",
  			loading: "/image/egg/loader_egg.png",
  			error: "/image/egg/loader_egg.png",
  			name: "David",
  			position: "Founder"
  		},
  		Jeremy: {
  			img: "/image/egg/jeremy_egg.jpeg",
  			loading: "/image/egg/loader_egg.png",
  			error: "/image/egg/loader_egg.png",
  			name: "Jeremy",
  			position: "Founder"
  		},
  		Metastoke: {
  			img: "/image/egg/metastoke_egg.jpeg",
  			loading: "/image/egg/loader_egg.png",
  			error: "/image/egg/loader_egg.png",
  			name: "Metastoke",
  			position: "Founder"
  		},
  		Johnny: {
  			img: "/image/egg/Johnny_egg.jpeg",
  			loading: "/image/egg/loader_egg.png",
  			error: "/image/egg/loader_egg.png",
  			name: "Johnny",
  			position: "Co-Founder"
  		},
  		Andrea: {
  			img: "/image/egg/andrea_egg.jpeg",
  			loading: "/image/egg/loader_egg.png",
  			error: "/image/egg/loader_egg.png",
  			name: "Andrea",
  			position: "Social Media Manager"
  		},
  		Unee: {
  			img: "/image/egg/unee_egg.jpeg",
  			loading: "/image/egg/loader_egg.png",
  			error: "/image/egg/loader_egg.png",
  			name: "Unee",
  			position: "Artist"
  		},
  		Yui: {
  			img: "/image/egg/yui_egg.jpeg",
  			loading: "/image/egg/loader_egg.png",
  			error: "/image/egg/loader_egg.png",
  			name: "Yui",
  			position: "Visual Designer"
  		},
  		Beryl: {
  			img: "/image/egg/beryl_egg.jpeg",
  			loading: "/image/egg/loader_egg.png",
  			error: "/image/egg/loader_egg.png",
  			name: "Beryl",
  			position: "Animation Designer"
  		},
  		Alice: {
  			img: "/image/egg/alice_egg.jpeg",
  			loading: "/image/egg/loader_egg.png",
  			error: "/image/egg/loader_egg.png",
  			name: "Alice",
  			position: "PR Manager"
  		},
  		Zoe: {
  			img: "/image/egg/zoe_egg.jpeg",
  			loading: "/image/egg/loader_egg.png",
  			error: "/image/egg/loader_egg.png",
  			name: "Zoe",
  			position: "Marketing Manager"
  		},
   		Derek: {
  			img: "/image/egg/derek_egg.jpeg",
  			loading: "/image/egg/loader_egg.png",
  			error: "/image/egg/loader_egg.png",
  			name: "Derek",
  			position: "Project Manager"
  		},
   		Jun: {
  			img: "/image/egg/jun_egg.jpeg",
  			loading: "/image/egg/loader_egg.png",
  			error: "/image/egg/loader_egg.png",
  			name: "Jun",
  			position: "Moderator"
  		},
  	});
  	const Partnership = ref({
      Allizart: {
        img: "/image/partnership/allizart.png",
      },
      Galler: {
        img: "/image/partnership/galler.png",
      },
      kyd: {
        img: "/image/partnership/kydlabs.png",
      },
    });
    const Pr = ref({
      Hypebeast: {
        img: "/image/pr/hypebeast-logo-1x1@2x.jpg",
        href: "https://hypebeast.com/zh/2022/2/madmanga",
      },
      Yahoo: {
        img: "/image/pr/yahoo.png",
        href: "https://finance.yahoo.com/news/madmanga-building-manga-oriented-web3-010000882.html",
      },
      ACCESSWIRE: {
        img: "/image/pr/ACCESSWIRE.png",
        href: "https://www.accesswire.com/704044/MadManga-Announces-the-Largest-Manga-Creations-Meta-Universe-the-First-Ever-NFT-Collection",
      },
      News: {
        img: "/image/pr/7_News_logo.png",
        href: "https://www.wwnytv.com/prnewswire/2022/06/14/this-nft-project-returns-profit-its-holders-within-one-week-after-mint-beating-downtrend-market/?outputType=amp",
      },
      Digital: {
        img: "/image/pr/Digital-Journal-logo.jpg",
        href: "https://www.digitaljournal.com/pr/madmanga-announces-the-largest-manga-creations-meta-universe-the-first-ever-nft-collection",
      },
      thepressfree: {
        img: "/image/pr/thepressfree_11zon.jpeg",
        href: "https://thepressfree.com/madmanga-annonce-the-largest-manga-creations-meta-universe-la-toute-premiere-collection-nft/",
      },
    });
    const Social = ref({
    	eth: {
    		href: "https://opensea.io/collection/madmangafomostone",
        img: "/image/eth_team_logo.jpg",
      },
      dc: {
        href: "https://discord.com/invite/madmanga",
        img: "/image/dc_team_logo.jpg",
      },
      tw: {
        href: "https://twitter.com/MadmangaNFT",
        img: "/image/twitter_team_logo.jpg",
      },
      ig: {
        href: "https://www.instagram.com/madmanganft",
        img: "/image/ig_team_logo.jpg",
      },
    });
    return {
    	Team_info,
    	Egg,
    	Pr,
    	Partnership,
    	Social
    }
  },
  components: {
  	Header,
  	Footer,
  },
}
</script>

<template>
	<div class="relative w-full h-full bg-[#EFEFED]">
		<!-- Header -->
	  <Header burcolor="text-[#ff5500]" isburimg="true" />
	    <div class="bg-[#EFEFED]">
		    <div class="max-w-[90%] mx-auto pt-0 sm:pt-28">
		    	<!--  -->
		    	<div class="max-w-[360px] sm:max-w-[860px] w-full mx-auto flex flex-col justify-center items-center py-12 sm:p-[5rem] lg:pt-24 lg:pb-36">
			    	<h5 class="font-TTOctosquaresBold text-[#ff5500] text-[32px] py-6">Team</h5>
			    	<p class="font-TTOctosquaresLight text-[12px] text-[#ff5500] text-center">{{ Team_info }}</p>
			    </div>
			    <!--  Team egg -->
			    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 pb-24">
			    	<div v-for="item in Egg"
			    	class="bg-white flex flex-col rounded-[2rem] lg:rounded-[3rem] p-1 shadow-sm ">
			    		<div class="flex justify-center items-center">
			    			<div class="rounded-[2rem] lg:rounded-[3rem] overflow-hidden">
			    				<img 
			    				v-lazy="{ src: item.img, loading: item.loading, error: item.error, delay: 50 }">
			    			</div>
			    		</div>
			    		<div class="flex flex-col justify-center items-center py-[0.5rem] lg:py-4">
			    			<h5 class="text-[32px] font-TTOctosquaresBold">{{ item.name }}</h5>
			    			<p class="text-[14px] lg:text-[8px]">{{ item.position }}</p>
			    		</div>
			    	</div>
			    </div>

		    </div>
	    </div>
	    <!-- PR -->
	    <div class="bg-white flex flex-col justify-center items-center py-16 sm:py-20">
				<h5 class="font-TTOctosquaresBold text-[#ff5500] text-[32px] pt-2 pb-10 sm:py-6">PR</h5>
					<div class="max-w-[90%] w-full bg-white p-12 md:p-10">
						<div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-20 flex justify-center items-center px-4">
							<a v-for="item in Pr" target="_blank" :href="item.href" class="grayscale hover:grayscale-0 transition-all">
								<img :src="item.img" class="max-w-[160px] w-full mx-auto">
							</a>
						</div>
					</div>
			</div>
			<!-- Partnership -->
			<div class="relative overflow-hidden bg-orange-100 flex flex-col justify-center items-center pb-20 px-6 xs:px-12 sm:py-28 sm:px-4">
				<h5 class="font-TTOctosquaresBold text-[#ff5500] text-[32px] py-12 sm:py-6">Partnership</h5>
				<div class="max-w-3xl w-full bg-white p-12 md:p-20">
					<div class="flex justify-center items-center space-x-6 sm:space-x-12">
						<img v-for="item in Partnership" :src="item.img" class="w-[80px] sm:w-[120px]">
					</div>
				</div>
				<!--  -->
<!-- 				<div class="absolute bottom-0 left-4 xl:left-44 z-[11]">
					<img src="/image/team_ps_02.png" class="w-[75px] sm:w-[90px]">
				</div>

				<div class="absolute bottom-8 left-16 sm:left-24 md:left-20 xl:left-64 z-[9]">
					<img src="/image/team_ps_01.png" class="w-[90px] sm:w-[120px]">
				</div>

				<div class="absolute bottom-14 sm:bottom-20 right-36 sm:right-48 xl:right-96 z-[11]">
					<img src="/image/team_ps_03.png" class="w-[70px] sm:w-[120px]">
				</div>

				<div class="absolute bottom-0 right-20 sm:right-24 xl:right-72 z-[12]">
					<img src="/image/team_ps_04.png" class="w-[75px] sm:w-[120px]">
				</div>

				<div class="absolute bottom-8 sm:bottom-12 xl:bottom-24 right-10 sm:right-12 xl:right-72 z-[9]">
					<img src="/image/team_ps_05.png" class="w-[60px]">
				</div> -->
			</div>
			<!-- Contact -->
			<div class="bg-white flex flex-col justify-center items-center space-y-6 pb-[130px] pt-12 sm:pt-[8rem] sm:pb-[14rem]">
				<h5 class="font-TTOctosquaresBold text-[#ff5500] text-[32px] py-6">Contact us</h5>
				<img src="/image/mm_home_logo.png" class="w-[210px]">
				<!--  -->
				<div class="grid grid-cols-4 gap-12 flex justify-center items-center">
					<a v-for="item in Social" :href="item.href"><img :src="item.img" class="w-[36px] transition-all hover:scale-110"></a>
				</div>
				<!-- mail -->
				<a href="mailto:info@madmanga.io" class="font-TTOctosquaresBold text-gray-700 text-[32px] py-6  transition-all hover:text-blue-500">info@madmanga.io</a>
			</div>
			<!-- Footer -->
	    <Footer title="Team & Contact" textcolor="text-white" bgcolor="bg-[#ff5500]" crcolor="text-white" sicolor="fill-white"/>
 	</div>
</template>

<style scoped>
	@keyframes pulse {
	  0%, 100% {
	    opacity: 1;
	  }
	  50% {
	    opacity: .5;
	  }
	}
  img[lazy=loading] {
  	border-radius: 3rem;
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
  img[lazy=error] {
  	border-radius: 3rem;
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
  img[lazy=loaded] {
    /*your style here*/
  }
</style>
