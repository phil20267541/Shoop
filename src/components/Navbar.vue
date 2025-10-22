<template>
  <div class="navbar-container">
    <router-link to="/Home"><img class="logo-image" src="../../public/favicon.ico" alt="Logo"></router-link>
    <ul class="navbar-bar">
      <NavItem v-for="page in pages" :key="page.title" :item="page" />
    </ul> 
  </div>
</template>

<script>
import NavItem from './NavItem.vue'

export default {
  components: { NavItem },
  data() {
    return {
      pages: [
        {"title": "My Shoop", "link": "/ShoopPet", "subpages": [
          {"title": "My Shoop", "link": "/ShoopPet"},
          {"title": "Stats", "link": "/ShoopStats"}
        ]},
        {"title": "Shop", "link": "/Shop"},
        {"title": "Adopt", "link": "/ShoopFarm"}
      ]
    };
  }
};
</script>

<style scoped>
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
  width: 40vw;
}

.logo-image {
  width: auto;
  height: 40px;
  padding: 10px;
  position: absolute;
  left: 20px;
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