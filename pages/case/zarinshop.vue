<template>
<section id="project" class="page">
    <header class="is-full-right light shown sticky">
	<div class="outer-container">
		<nuxt-link to="/" class="parsed">M<i>.</i></nuxt-link>
		
			<div class="header-title">
				<div class="vertical-align">
					<h2>Zarin Shop</h2>
					<p>Home Textile</p>
				</div>
			</div>
		
		<ul class="secondary-nav">
			<li><nuxt-link to="/case/dmsportal" class="parsed"><i class="prev"></i></nuxt-link></li>
			<li><nuxt-link to="/case/aepgroup" class="parsed"><i class="next"></i></nuxt-link></li>
			<li><nuxt-link to="/" class="parsed"><i class="close"></i></nuxt-link></li>
		</ul>
	</div>
    </header>
<section id="description">
	<div id="featured">
    <!-- <ZoomScroll v-on:stateChange="yourFunction($event)" > -->
		<div class="img loaded" id="img_parallax" style="transform: scale(1);">
			<img :src='"@/assets/medias/images/zarinshop.jpg"' class="desc visible">
		</div>
		<div class="txt-title">
			<h1 style="text-shadow: 1px 1px 6px black;">Zarin Shop</h1>
			<p style="text-shadow: 1px 1px 8px black;" class="font-fat">Home Textile</p>
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
				<p class="font-fat">Zarin Shop produces high quality home textile products in Uzbekistan. Zarin Shop produces both household textiles and pajamas for adults and children. Delivery of goods is carried out throughout the republic. </p>
			</div>

		</div>

	</div>

</section>
<section id="content" style="border-bottom: inherit">

	<ul>

			<li class="img loaded">
                <img :src='"@/assets/medias/images/zarinshopbanner-3.png"'>
			</li>

			<li class="grid grid-pad pad-top">
				<h2>Tasks we completed</h2>
				<p class="font-fat">The Zarin Shop company turned to us for help to implement an online store for web platforms and mobile applications. The placement and sale of Zarin Shop products through an Internet store was implemented, tested and released into production..</p>
			</li>
			
			<li class="img loaded">

				<img :src='"@/assets/medias/images/zarinshopmockups.png"'>

			</li>

			<li class="grid grid-pad pad-top">
				<h2>Some info</h2>
				<p class="font-fat">The process of jewelry sewing plays a primary role in the invention of top-end textile products, as well as in the process of literal development - the final project becomes reliable and perfect..</p>
			</li>
            
            <li class="img video visible is-playing" style="background-color: inherit">
				<!-- <img src="" alt=""> -->
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAJCAYAAAA7KqwyAAAAFklEQVQoU2NkoBAwUqifYdQAhuEQBgANtgAKhIZC3wAAAABJRU5ErkJggg==">
                <video :src='"@/assets/medias/images/zarinshopvideo.mp4"' muted playsinline type='video/mp4;' autoplay="autoplay" class="show" loop></video>
            </li> 

	</ul>

</section>	



<section id="quote" class="height-600">
	<div class="vertical-align">
		<i>’’</i>
		<h3>A real pleasure to work with a team so involved, reactive and passionate. The attention to detail and style!</h3>
		<a href="https://www.instagram.com/fara.mdm/" style="text-decoration: none">
			<div class="author_image loaded">
				<img :src='"@/assets/medias/images/ZarinshopClient.jpg"' class="desc">
			</div>
			<p><i>Farruh Madaminov </i><br>Brand Manager - Zarin Shop</p>
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
					Zarin Shop
				</li>

			
				<li>
					<p>Partner</p>
					Farruh Madaminov / Brand Manager
				</li>
			

				<li>
					<p>Date</p>
					January 2021
				</li>
			</ul>
		</div>

		

		<div class="list col-1-2">
			<h2>Skills</h2>
			<ul class="chips">
				
				<li>Web and mobile design</li>
				
				<li>Web-system</li>
				
				<li>Mobile-apps</li>
				
				<li>SEO</li>
				
				<li>Online shop</li>
				
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