<template>
  <div class="navbar-container">
    <router-link to="/Home"><img class="logo-image" src="../../public/favicon.ico" alt="Logo"></router-link>
    <ul class="navbar-bar">
      <NavItem v-for="page in pages" :key="page.title" :item="page" />
    </ul> 
    <router-link v-if="!signed_in" to="/Login" class="login-button" @click="Login">Login</router-link>
    <router-link v-else-if="signed_in" to="/Profile" class="profile-button" @click="Login">Profile</router-link>
  </div>
</template>

<script>
import NavItem from './NavItem.vue'

export default {
  components: { NavItem },
  data() {
    return {
      pages: [
        {title: "My Shoop", link: "/ShoopPet", subpages: [
          {title: "My Shoop", link: "/ShoopPet"},
          {title: "Stats", link: "/ShoopStats"}
        ]},
        {title: "Shop", link: "/Shop", subpages: [
          {title: 'Shop', link: '/Shop'},
          {title: 'Hats', link: '/Shop/hats'},
          {title: 'Tops', link: '/Shop/tops'},
          {title: 'Boots', link: '/Shop/boots'},
          {title: 'Colors', link: '/Shop/colors'},
          {title: 'Themes', link: '/Shop/themes'}
        ]},
        {title: "Adopt", link: "/ShoopFarm"},
        {title: "Wiki", link: "/Wiki"}
      ],
      signed_in: false
    };
  },
  methods: {
    Login() {
      this.signed_in = !this.signed_in
    }
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
  width: 40px;
  height: 40px;
  padding: 10px;
  position: absolute;
  left: 20px;
}

.login-button, .profile-button {
  position: absolute;
  right: 20px;
  align-self: center;
  color: #261A0A;
  text-decoration: none;
  padding: 6px 10px;
  border: 1px solid #261A0A;
  border-radius: 20px;
  background-color: #F2D6A2;
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