<template>
  <section id="home" class="page">
    <section id="about" class="height-full">
      <div class="col-1-2">
        <div class="vertical-align margin-50">
          <h1 class="fat">
            Mirllex, <br />Digital Studio<br />
          </h1>
        </div>
      </div>

      <div class="onePushed col-1-2">
        <a href="#" class="parsed">
        <!-- <a href="/en/zarinshop" class="parsed"> -->
          <div class="img loaded">
            <img
              :src='"@/assets/medias/images/zarinshop.jpg"'
              class="visible"
            />
          </div>
        </a>

        <a href="#" class="onePushed-button parsed" style="">
        <!-- <a href="/en/zarinshop" class="onePushed-button parsed" style=""> -->
          <h2 style="padding-right: 200px">Zarin Shop</h2>
          <p>Website - Mobile apps</p>
          <i class="ico-arrow" style="color: white">
            <svg width="8px" height="8px">
              <use xlink:href="#ico-arrow">
                <svg id="ico-arrow" viewBox="0 0 75.5 66.5">
                <g>
                <g>
                <path d="M73.1,27.4L48.1,2.4c-3.3-3.2-8.5-3.2-11.8,0s-3.2,8.5,0,11.8l10.7,10.7H8.3c-4.6,0-8.3,3.7-8.3,8.3s3.7,8.3,8.3,8.3h38.8
                      L36.4,52.3c-3.3,3.2-3.3,8.5,0,11.8c3.2,3.3,8.5,3.3,11.8,0l24.9-24.9C76.3,35.9,76.3,30.7,73.1,27.4
                      C73.1,27.4,73.1,27.4,73.1,27.4z">
                </path></g>
                </g>
                </svg>
              </use>
            </svg>

          </i>
        </a>

        <span class="onePushed-label">Latest Project</span>
      </div>
    </section>

    <section id="projects">
      <div class="filters shown">
        <ul class="margin-50">
          <li class="active">
            ALL <span>3</span>
          </li>

          <li class="">
            Mobile Apps <span>1</span>
          </li>

          <li>
            Web Systems <span>3</span>
          </li>

          <!-- <li>
            Digital <span>53</span>
          </li>

          <li>
            Interior <span>4</span>
          </li>  -->

        </ul>
      </div>

      <ul class="items cat-selection shown" data-description="">

        <li class="col-1-3 cat-digital cat-selection cat-tous">
          <a href="#" class="parsed">
          <!-- <a href="/en/aep" class="parsed"> -->

            <div class="item-image">
              <div class="img cat-selection">
                <img :src='"@/assets/medias/images/aep.jpg"' />
              </div>
            </div>

            <div>
              <h2>AEP GROUP</h2>
              <p>Website - Websystem</p>
              <i class="ico-arrow">
                <svg width="8px" height="8px">
                  <use xlink:href="#ico-arrow"></use>
                </svg>
              </i>
            </div>

          </a>
        </li>

        <li class="col-1-3 cat-content cat-selection cat-tous">
          <a href="#" class="parsed">
          <!-- <a href="/en/dormostservice" class="parsed"> -->
            <div class="item-image">
              <div class="img cat-selection cat-identite cat-digital cat-interieur cat-tous">
                <img :src='"@/assets/medias/images/dms.jpg"'/>
              </div>
            </div>
            <div>
              <h2>Dor Most Service</h2>
              <p>Website - Websystem</p>
              <i class="ico-arrow">
                <svg width="8px" height="8px">
                  <use xlink:href="#ico-arrow"></use>
                </svg>
              </i>
            </div>
          </a>
        </li>

      </ul>
    </section>

    <section id="discover">
      <div>
        <h2 class="fat">
          <!-- Influenced by art, architecture, <br />object design and applied arts,
          <br />Bonhomme breaks borders <br />to offer a powerfull and global
          <br />brand experience. -->
          By prioritizing performance, <br /> availability, and freshness, 
          <br />Mirllex achieves high results.<br />  Strategic approach, 
          discipline and communication skills<br />
          make young talents ready for global projects.
        </h2>
        <a href="#" class="parsed">Discover studio</a>
        <!-- <a href="/en/about" class="parsed">Discover studio</a> -->
      </div>
    </section>

  </section>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style scoped>
html,
body {
  background-color: #fff;
}
.image{
  transition: transform .5s ease;
}
.image:hover {
  transform: scale(1.5);
}
</style>
