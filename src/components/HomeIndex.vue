<template>
	<div class="relative h-full flex justify-center items-end sm:items-center pb-[200px] xs:pb-[120px] md:pb-[90px] pointer-events-none">
		<!-- bg loop text -->
		<div class="absolute flex flex-col space-y-2">
			<div 
			v-for="i in 4"
			class="flex w-max animate-move-left movelft leading-none font-AntonRegular" 
			style="animation-play-state:running">
				<div 
				v-for="i in 24" 
				class="w-fit px-6 text-[82px] sm:text-[210px] md:text-[180px] xl:text-[120px] 2xl:text-[168px] font-bold text-[#ff5500]">TO THE STONE
				</div>
			</div>
		</div>
		<!-- bg -->
		<div class="absolute w-full h-full hidden lg:flex justify-center items-center pt-20 z-[31] pointer-events-none">
			<img src="/image/home_bg_pc.png" class="w-[100vw] xl:w-[90vw]">
		</div>
		<div class="absolute top-0 w-full h-full flex flex-col lg:hidden justify-start items-center pt-[20%] xs:pt-[30%] sm:pt-[15%] z-[31]">
			<img src="/image/mm_home_logo.png" class="w-[340px] sm:w-[80vw]">
		</div>
		<div class="absolute top-0 w-full h-full flex flex-col lg:hidden justify-center items-center pt-[0%] pb-6 xs:pt-0 xs:pt-[30%] z-[32]">
			<img src="/image/home_bg_sp.png" class="w-[95vw] sm:w-[95vw] lg:w-[82vw]">
		</div>
	</div>
</template>

<style>
.movelft {
	-webkit-animation: moveLeft 60s linear 0s infinite normal none;
  animation: moveLeft 60s linear 0s infinite normal none;
}
.animate-move-left:nth-child(1) {
	opacity: 5%;
}
.animate-move-left:nth-child(2) {
	padding-left: 20px;
	opacity: 10%;
}
.animate-move-left:nth-child(3) {
	padding-left: 40px;
	opacity: 10%;
}
.animate-move-left:nth-child(4) {
	padding-left: 60px;
	opacity: 15%;
}

@keyframes moveLeft {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
		transform: translate3d(-2000px, 0, 0);
  }
}
</style>