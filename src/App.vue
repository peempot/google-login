<template>
  <div class=" bg-[#FAFAFA] ">
    <nav class="flex justify-between  h-3rem w-full bg-white">
      <div class="flex justify-center my-5 ml-6 max-lg ">
        <div>
          gola
        </div>
        <div class="flex justify-end">
          <div class=" h-3 w-3 bg-[#EBFB48] my-2 mx-2 "></div>
        </div>
        <div>
          templat
        </div>
      </div>

      <div class="flex col-3  mr-6 gap-2  underline">
        <div class="my-auto">template.gola.io</div>
        <svg class="my-auto" width="12" height="12" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.0039 3.91402L2.39691 12.521L0.98291 11.107L9.58891 2.50002H2.00391V0.500023H13.0039V11.5H11.0039V3.91402Z" fill="#242424"/>
        </svg>

        <div class="my-auto">
          <button @click="login" type="button"
            class=" text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55  my-auto">
            <svg class="w-4 h-4 mr-2 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
              viewBox="0 0 18 19">
              <path fill-rule="evenodd"
                d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
                clip-rule="evenodd" />
            </svg>
            Signin Google
          </button>
        </div>
      </div>
    </nav>

    <div data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="1000" data-aos-offset="0">
      <div class="text-center from-neutral-950  py-8  text-6xl  max-lg">
        <div>Check out my other</div><span>Webflow Templates</span>
      </div>
    </div>

    <div data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="2000" data-aos-offset="0">
      <div class=" flex justify-center py-4 ">
        <button type="button"
          class="flex justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300  rounded-sm text-ml px-8 py-4  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 underline">See
          all Template</button>
         
      </div>
    </div>


    <div class="container flex justify-center mx-auto h-[576] w-[1482]  relative ">

      <p1 class="absolute left-0 bottom-0  ">
        <div data-aos="fade-right" data-aos-duration="3000">
          <img class="max-lg h-[600] w-[343]" src="../poto/po3.png" alt="">
        </div>
      </p1>

      <div class="relative flex justify-center z-10 ">
        <div data-aos="fade-up" data-aos-duration="2000">
          <img class="max-lg h-[481] w-[800]" src="../poto/image.png" alt="">
        </div>
      </div>

      <div class="absolute bottom-0 right-0">
        <div data-aos="fade-left" data-aos-duration="3000">
          <img class="max-lg h-[346] w-[600]" src="../poto/po4.png" alt="">
        </div>
      </div>


    </div>
  </div>




  <!-- <div class="hello">s

<div
  data-aos="zoom-in"
  data-aos-offset="200"
  class="card"
  style="width: 18rem; margin: 100px auto;">
  <img
    src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
    class="card-img-top"
    alt="..."
  />
  <div class="card-body">
    <h5 class="card-title">Card 1</h5>
    <p class="card-text">
      Some quick example text to build on the card title and make up the
      bulk of the card's content.
    </p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>


<div
  data-aos="zoom-out"
  data-aos-offset="200"
  data-aos-easing="ease-in-out"
  class="card"
  style="width: 18rem; margin: 200px auto;"
>
  <img
    src="https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
    class="card-img-top"
    alt="..."
  />
  <div class="card-body">
    <h5 class="card-title">Card 2</h5>
    <p class="card-text">
      Some quick example text to build on the card title and make up the
      bulk of the card's content.
    </p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>


<div
  data-aos="fade-right"
  data-aos-duration="2000"
  class="card"
  style="max-width: 18rem; margin: 200px auto;"
>
  <img
    src="https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
    class="card-img-top"
    alt="..."
  />
  <div class="card-body">
    <h5 class="card-title">Card 3</h5>
    <p class="card-text">
      Some quick example text to build on the card title and make up the
      bulk of the card's content.
    </p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>


<div
  data-aos="fade-left"
  data-aos-duration="2000"
  class="card"
  style="width: 18rem; margin: 200px auto;"
>
  <img
    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
    class="card-img-top"
    alt="..."
  />
  <div class="card-body">
    <h5 class="card-title">Card 4</h5>
    <p class="card-text">
      Some quick example text to build on the card title and make up the
      bulk of the card's content.
    </p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

<div
  data-aos="flip-left"
  data-aos-duration="300"
  class="card"
  style="width: 18rem; margin: 200px auto  ;"
>
  <img
    src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80"
    class="card-img-top"
    alt="..."
  />
  <div class="card-body">
    <h5 class="card-title">Card 5</h5>
    <p class="card-text">
      Some quick example text to build on the card title and make up the
      bulk of the card's content.
    </p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div> -->

</template>



<script setup lang="ts">
import { onMounted } from "vue";
import AOS from "aos";
onMounted(() => {
  AOS.init();
});
import {  googleSdkLoaded } from "vue3-google-login"
const login = () => {
  googleSdkLoaded((google) => {
    google.accounts.oauth2.initTokenClient({
      client_id: '353917699074-htrmtcqmm1g1e6b3jeimage8jbu3bbkb.apps.googleusercontent.com',
      scope: 'email profile openid',
      callback: (response) => {
        console.log("Handle the response", response)
      }
    }).requestAccessToken();
  })
}



</script>



