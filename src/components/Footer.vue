<template>
  <div class="footer-container">
    <div class="sign-up-container">
      <h1 class="sign-up-title">Join Shoop Now</h1>
      <router-link to="Login" class="sign-up-button">Sign Up Here</router-link>
    </div>
    <div class="quick-links-container">
      <p>Quick Links</p>
      <div class="links-container">
        <FooterItem v-for="page in pages" :key="page.title" :item="page" class="footer-item"/>
      </div>
    </div>
  </div>
</template>

<script>
import FooterItem from './FooterItem.vue'

export default {
  components: { FooterItem },
  data() {
    return {
      pages: [
        {title: "Home", link: "/Home", subpages: [
          {title: "Home", link: "/Home"},
          {title: "About", link: "/About"},
          {title: "Contact", link: "/Contact"}
        ]},
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

      ]
    };
  }
};
</script>

<style>
.footer-container {
  width: 60vw;
  color: #F2D6A2;
  padding: 20px 0;
  display: flex;
  justify-content: space-around;
}

.sign-up-container, .quick-links-container {
  justify-items: center;
  width: 30vw;
  p {
    margin-bottom: 20px;
    font-size: 30px;
  }
  > .sign-up-button {
    text-decoration: none;
    font-size: 30px;
    color: #261A0A;
    padding: 10px 16px;
    border: 1px solid #261A0A;
    border-radius: 20px;
    background-color: #F2D6A2;
  }
  > .sign-up-button:hover {
    color: #F2D6A2;
    background-color: #a5623e;
  }
}

.sign-up-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  > .sign-up-title {
    color: #F2D6A2;
    font-size: 40px;
    margin-bottom: 30px;
  }
}

.links-container {
  display: flex;
  justify-content: space-around;
}

.footer-item {
  margin: 0 40px;
}

</style>