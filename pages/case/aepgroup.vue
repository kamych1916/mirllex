<template>
<section id="project" class="page">
    <header class="is-full-right light shown sticky">
	<div class="outer-container">
		<nuxt-link to="/" class="parsed">M<i>.</i></nuxt-link>
		
			<div class="header-title">
				<div class="vertical-align">
					<h2>AEP GROUP</h2>
					<p>Agency "United Contractor"</p>
				</div>
			</div>
		
		<ul class="secondary-nav">
			<li><nuxt-link to="/case/zarinshop" class="parsed"><i class="prev"></i></nuxt-link></li>
			<li><nuxt-link to="/" class="parsed"><i class="next"></i></nuxt-link></li>
			<li><nuxt-link to="/" class="parsed"><i class="close"></i></nuxt-link></li>
		</ul>
	</div>
    </header>
<section id="description">
	<div id="featured">
    <!-- <ZoomScroll v-on:stateChange="yourFunction($event)" > -->
		<div class="img loaded" id="img_parallax" style="transform: scale(1);">
			<img :src='"@/assets/medias/images/aep.jpg"' class="desc visible">
		</div>
		<div class="txt-title">
			<h1 style="text-shadow: 1px 1px 6px black;">AEP GROUP</h1>
			<p style="text-shadow: 1px 1px 8px black;" class="font-fat">Agency "United Contractor"</p>
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
				<p class="font-fat">Agency "United Contractor" any complex work in the field of construction and maintenance of buildings and structures, including housing stock.</p>
			</div>

		</div>

	</div>

</section>
<section id="content" style="border-bottom: inherit">

	<ul>

			<li class="img loaded">
                <img :src='"@/assets/medias/images/aep-1.png"'>
			</li>

			<li class="grid grid-pad pad-top">
				<h2>Tasks we completed</h2>
				<p class="font-fat">The Agency "United Contractor" turned to us for help in developing a web system for automating requests from customers and objects, for a more detailed and simplified interaction. The web system is internal and can only be accessed by authorized persons of the AEP Group. The web system has been tested and put into professional operation.</p>
			</li>
			
			<li class="img loaded">

				<img :src='"@/assets/medias/images/aep-mockups.png"'>

			</li>

			<li class="grid grid-pad pad-top">
				<h2>Video</h2>
				<p class="font-fat">The Agency "United Contractor" brought together a number of specialists and specialized organizations in the field of general construction, construction and repair and construction works of the operation of buildings and structures in residential and non-residential premises, as well as cleaning, transport services, etc.</p>
			</li>
            
            <li class="img video visible is-playing" style="background-color: inherit">
				<!-- <img src="" alt=""> -->
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAJCAYAAAA7KqwyAAAAFklEQVQoU2NkoBAwUqifYdQAhuEQBgANtgAKhIZC3wAAAABJRU5ErkJggg==">
                <video :src='"@/assets/medias/images/aepvideo.mp4"' muted playsinline type='video/mp4;' autoplay="autoplay" class="show" loop></video>
            </li> 

	</ul>

</section>	



<section id="quote" class="height-600">
	<div class="vertical-align">
		<i>’’</i>
		<h3>High professionalism and productivity. Great architecture. Completed the project quickly!</h3>
		<a href="#" style="text-decoration: none">
			<div class="author_image loaded">
				<img src='https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png' class="desc">
			</div>
			<p><i>Sergei Timohin </i><br>Product Manager - AEP GROUP</p>
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
					AEP GROUP
				</li>

			
				<li>
					<p>Partner</p>
					Sergei Timohin / Product Manager<br>
					Sergei Yudin / Team Lead Serenity
				</li>
			

				<li>
					<p>Date</p>
					November 2020
				</li>
			</ul>
		</div>

		

		<div class="list col-1-2">
			<h2>Skills</h2>
			<ul class="chips">
				
				<li>Web and mobile design</li>
				
				<li>Web-system</li>

				<li>Multi roles system</li>				
			</ul>
		</div>


	</div>

</section>

<!-- <section id="projects">

	

	
		<ul class="items">
			
				<li class="col-1-3">
					<a href="/en/baudin" data-track-interaction="click" data-track-context="project-previews" data-track-action="go-baudin" class="parsed">
						
							<div class="img loaded">
								<img src="blob:https://bonhommeparis.com/46632b42-02e8-4e28-b96d-86a6bdcc79d6" data-src-1024="https://bonhommeparis.com/api/content/uploads/2020/12/Baudin-1-1024x576.jpg" class="">
							</div>
						
						<div>
							<h2>Baudin</h2>
							<p>Interior</p>
							<i class="ico-arrow">
								<svg width="8px" height="8px">
									<use xlink:href="#ico-arrow"></use>
								</svg>
							</i>
						</div>
					</a>
				</li>
			
				<li class="col-1-3">
					<a href="/en/tag-heuer-cw2020" data-track-interaction="click" data-track-context="project-previews" data-track-action="go-tag-heuer-cw2020" class="parsed">
						
							<div class="img loaded">
								<img src="blob:https://bonhommeparis.com/0ec9e939-1ced-4cc2-a8e2-8b445ece212d" data-src-1024="https://bonhommeparis.com/api/content/uploads/2022/04/TAG-Heuer_CW2020-1024x576.jpg" class="">
							</div>
						
						<div>
							<h2>TAG HEUER CW</h2>
							<p>Content - Digital</p>
							<i class="ico-arrow">
								<svg width="8px" height="8px">
									<use xlink:href="#ico-arrow"></use>
								</svg>
							</i>
						</div>
					</a>
				</li>
			
				<li class="col-1-3">
					<a href="/en/tag-heuer-rs" data-track-interaction="click" data-track-context="project-previews" data-track-action="go-tag-heuer-rs" class="parsed">
						
							<div class="img loaded">
								<img src="blob:https://bonhommeparis.com/ddf153bc-0ee3-47bc-9a58-7aab3edbee72" data-src-1024="https://bonhommeparis.com/api/content/uploads/2019/11/Bonhomme-Tag-Heuer-1024x576.jpg" class="">
							</div>
						
						<div>
							<h2>TAG Heuer RS</h2>
							<p>Branding - Content</p>
							<i class="ico-arrow">
								<svg width="8px" height="8px">
									<use xlink:href="#ico-arrow"></use>
								</svg>
							</i>
						</div>
					</a>
				</li>
			
		</ul>
	

</section> -->


</section>
</template>

<script>
// import  ZoomScroll  from  "vue-zoom-scroll"
export default {
    // components: {
    //     ZoomScroll
    // },
    data(){
        return{
            // zoomScrollDetails: {},
        }
    },
    mounted(){
        const ImgTag = document.getElementById('img_parallax');
		const AwrrowTag = document.getElementById('scrollbar');
		if(window.screen.width > 768){
			window.addEventListener("scroll", ()=>{
				var scroll = document.documentElement.scrollTop;
				ImgTag.style.transform = 'scale('+(100 + scroll/150)/100+')';
				AwrrowTag.style.opacity = (100 - scroll/5)/100;
	
			})
		};

    },
    methods:{
            // yourFunction(data) {
            //     this.zoomScrollDetails = data;
            // }
    }
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
</style>