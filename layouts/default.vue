<template>
  <div id="common">
    <header id="header" class="shown show sticky">
      <div class="outer-container">
        <nuxt-link to="/" class="parsed">M<i>.</i></nuxt-link>
        <ul class="primary-nav">
              
            <li :class="$nuxt.$route.name === 'index' ? 'active' : ''">
              <nuxt-link to="/" class="parsed">Projects</nuxt-link>
              <!-- <a href="/en/" class="parsed">Projects</a> -->
            </li>
          
            <li :class="$nuxt.$route.name === 'about' ? 'active' : ''">
              <nuxt-link  to="/about" class="parsed">About</nuxt-link>
              <!-- <a href="#" class="parsed">About</a> -->
            </li>
            <!-- <li ><a href="/en/about/" class="parsed">About</a></li> -->

            <li :class="$nuxt.$route.name === 'contact' ? 'active' : ''" >
              <nuxt-link  to="/contact" class="parsed">Contact</nuxt-link>
              <!-- <a href="/contact" class="parsed">Contact</a> -->
            </li>    
                  
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
    //   is_active_main: false,
    //   is_active_about: false,
    //   is_active_contact: false,
    };
  },
  mounted(){
    // this.$nuxt.$route.name == 'contact' ? this.is_active_contact = true : ''
    // console.log(this.is_active_contact)
    // this.$nuxt.$route.name == 'about' ? this.is_active_about = true : ''
    // this.$nuxt.$route.name == 'main' ? this.is_active_main = true : ''
    const HeaderTag = document.getElementById('header');
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
    });
    // alert(this.$nuxt.$route.name)

  },
};
</script>  
<style>



</style>
