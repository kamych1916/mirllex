<template>
  <div id="common">
    <header id="header" class="shown show sticky">
      <div class="outer-container">
        <a href="/" class="parsed">M<i>.</i></a>
        <ul class="primary-nav">
              
            <li class="active"><a href="/en/" class="parsed">Projects</a></li>
          
            <li ><a href="#" class="parsed">About</a></li>
            <!-- <li ><a href="/en/about/" class="parsed">About</a></li> -->
          
            <li ><a href="#" class="parsed">Contact</a></li>          
            <!-- <li ><a href="/en/contact/" class="parsed">Contact</a></li>           -->
        </ul>
      </div>
    </header>
      <Nuxt />
    <footer class="px-4 d-flex justify-content-center">
      <h2 class="logo">© Mirllex Digital Studio, 2020-2021 </h2>
    </footer>
  </div>
</template>
<script>

export default {
  data() {
    return {
    };
  },
  mounted(){
    const HeaderTag = document.getElementById('header');;
    HeaderTag.style.borderBottom = "none";
    HeaderTag.style.backgroundColor = "transparent";
    window.addEventListener("scroll", ()=>{
      if(window.pageYOffset > 0){
        HeaderTag.style.borderBottom = "1px solid #efefef"
        HeaderTag.style.backgroundColor = "#fff"
      }else{
        HeaderTag.style.borderBottom = "none"
        HeaderTag.style.backgroundColor = "transparent"
      }
    })
  }
};
</script>  
<style>



</style>
