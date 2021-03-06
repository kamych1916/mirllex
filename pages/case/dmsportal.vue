<template>
<section id="project" class="page">
    <header class="is-full-right light shown sticky">
	<div class="outer-container">
		<nuxt-link to="/" class="parsed">M<i>.</i></nuxt-link>
		
			<div class="header-title">
				<div class="vertical-align">
					<h2>Dor Most Service</h2>
					<p>Road and Bridge buildings</p>
				</div>
			</div>
		
		<ul class="secondary-nav">
			<li><nuxt-link to="/case/aepgroup" class="parsed"><i class="prev"></i></nuxt-link></li>
			<li><nuxt-link to="/case/zarinshop" class="parsed"><i class="next"></i></nuxt-link></li>
			<li><nuxt-link to="/" class="parsed"><i class="close"></i></nuxt-link></li>
		</ul>
	</div>
    </header>
<section id="description">
	<div id="featured">
    <!-- <ZoomScroll v-on:stateChange="yourFunction($event)" > -->
		<div class="img loaded" id="img_parallax" style="transform: scale(1);">
			<img :src='"@/assets/medias/images/dms.jpg"' class="desc visible">
		</div>
		<div class="txt-title">
			<h1 style="text-shadow: 1px 1px 6px black;">Dor Most Service</h1>
			<p style="text-shadow: 1px 1px 8px black;" class="font-fat">Road and Bridge buildings</p>
		</div>
		<div class="scroll-down-bar" id="scrollbar" v-scroll-to="'#project-txt-intro'">
			<div class="scroll-down">
				<span >Scroll down</span>
				<div class="arrow-bottom">
					<span style="transform: rotate(35deg);" id="arrow_up"></span>
					<span style="transform: rotate(-35deg);" id="arrow_down"></span>
				</div>
			</div>
		</div>
    <!-- </ZoomScroll> -->
	</div>

	<div id="project-txt-intro" class="txt-content">

		<div class="grid grid-pad pad-top">

			<div>
				<p class="font-fat">The company "Dor Most Service" builds roads and bridges for Russia and is a major player in this industry.</p>
			</div>

		</div>

	</div>

</section>
<section id="content" style="border-bottom: inherit">

	<ul>

			<li class="img loaded">
                <img :src='"@/assets/medias/images/dms-1.png"'>
			</li>

			<li class="grid grid-pad pad-top">
				<h2>Tasks we completed</h2>
				<p class="font-fat">The company "Dor Most Service" turned to us to help implement a web-based CRM system for the company's internal affairs, in order to simplify the life of contractors who monitor the control of employees' work. The web system is internal and can only be accessed by authorized persons of the "Dor Most Service". The web system has been tested and put into professional operation.</p>
			</li>
			
			<li class="img loaded">

				<img :src='"@/assets/medias/images/dms-banner.jpg"'>

			</li>

			<li class="grid grid-pad pad-top">
				<h2>Some info</h2>
				<p class="font-fat">The company "Dor Most Service" has a multinational staff. The work is being carried out according to the schedule. Quality comes first.</p>
			</li>
            
            <li class="img video visible is-playing" style="background-color: inherit">
				<!-- <img src="" alt=""> -->
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAJCAYAAAA7KqwyAAAAFklEQVQoU2NkoBAwUqifYdQAhuEQBgANtgAKhIZC3wAAAABJRU5ErkJggg==">
                <video :src='"@/assets/medias/images/dms-video-2.mp4"' muted playsinline type='video/mp4;' autoplay="autoplay" class="show" loop></video>
            </li> 

	</ul>

</section>	



<section id="quote" class="height-600">
	<div class="vertical-align">
		<i>’’</i>
		<h3>Attention to detail, modern and advanced solutions for a flexible and stable project. A young and good team!</h3>
		<a href="#" style="text-decoration: none">
			<div class="author_image loaded">
				<img :src='"@/assets/medias/images/Pavel-Legkodimov.jpg"' class="desc">
			</div>
			<p><i>Pavel Legkodymov </i><br>Product Manager - Dor Most Service</p>
		</a>
	</div>
</section>


<section id="information" class="padding-y-140">

	<div class="grid">

		<div class="list col-1-2">
			<h2>Informations</h2>
			<ul>
				<li>
					<p>Client</p>
					Dor Most Service
				</li>

			
				<li>
					<p>Partner</p>
					Pavel Legkodymov / Product Manager<br>
				</li>
			

				<li>
					<p>Date</p>
					October 2020
				</li>
			</ul>
		</div>

		

		<div class="list col-1-2">
			<h2>Skills</h2>
			<ul class="chips">
				
				<li>Web and mobile design</li>
				
				<li>Web-system like CRM system</li>

				<li>Multi roles system</li>				
			</ul>
		</div>


	</div>

</section>

</section>
</template>

<script>
export default {
    mounted(){
        const ImgTag = document.getElementById('img_parallax');
		const AwrrowTag = document.getElementById('scrollbar');
		if(window.screen.width > 500){
			window.addEventListener("scroll", ()=>{
				var scroll = document.documentElement.scrollTop;
				ImgTag.style.transform = 'scale('+(100 + scroll/150)/100+')';
				AwrrowTag.style.opacity = (100 - scroll/5)/100;
	
			})
		};

    },

}
</script>

<style>
.zoom-scroll__content{
    background-image: none !important;
}
.technologies p{
	color: #000;
    line-height: 140%;
}
@media screen and (max-width: 703px){
	.height-600{
		height: auto !important;
	}
}
</style>