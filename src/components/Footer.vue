<template>
  <div class="footer-container">
    <div class="sign-up-container">
      <p>Sign Up Here</p>
    </div>
    <div class="quick-links-container">
      <p>Quick Links</p>
      <div class="links-container">
        <FooterItem v-for="page in pages" :key="page.title" :item="page" />
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
  width: 100vw;
  color: #F2D6A2;
  padding: 20px;
  display: flex;
  justify-content: space-around;
}

.sign-up-container, .quick-links-container {
  justify-items: center;
  width: 40vw;
  p {
    text-decoration: underline;
    margin-bottom: 20px;
  }
}

.links-container {
  display: flex;
  justify-content: space-around;
}

</style>