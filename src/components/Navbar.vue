<template>
  <div class="navbar-container">
    <img class="logo-image" src="../../public/favicon.ico" alt="Logo">
    <ul class="navbar-bar">
      <li v-for="page in pages" :key="page.title"><router-link :to="page.link">{{ page.title }}</router-link></li>
    </ul> 
  </div>
</template>

<script>
export default {
  data() {
    return {
      pages: [
        {"title": "Home", "link": "/Home"},
        {"title": "My Shoop", "link": "/ShoopPet"},
        {"title": "Shop", "link": "/Shop"},
        {"title": "About", "link": "/About"}
      ]
    };
  }
};
</script>

<style>
.navbar-container {
  width: 100vw;
  display: flex;
  background-color: #8C5230;
  justify-content: center;
  position: relative;
}

.navbar-bar {
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  width: 40vw;
}

.logo-image {
  width: auto;
  height: 40px;
  padding: 10px;
  position: absolute;
  left: 20px;
}

a {
  color: #F2D6A2;
  text-decoration: none;
  padding: 10px 16px;
  margin: 10px 16px;
}

a:active {
  border-radius: 20px;
  background-color: #8a5233;
  color: #F2D6A2;
}

a.router-link-active {
  border-radius: 20px;
  background-color: #F2D6A2;
  color: #261A0A;
  border: 2px solid #261A0A;
}
@media screen and (min-width: 481px) and (max-width: 768px) {
   
}

@media screen and (min-width: 769px) and (max-width: 1024px) {

}

@media screen and (min-width: 1025px){
  a:hover {
    border-radius: 20px;
    background-color: #a5623e;
    color: #F2D6A2;
  }
}
</style>