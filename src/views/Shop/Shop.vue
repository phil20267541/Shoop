<template>
  <div class="shop-page">
    <h1>Shop</h1>

    <!-- Section Tabs -->
    <nav class="shop-nav">
      <router-link to="/Shop/cosmetics">Cosmetics</router-link>
      <router-link to="/Shop/accessories">Accessories</router-link>
      <router-link to="/Shop/themes">Themes</router-link>
      <router-link to="/Shop/pets">Pets</router-link>
    </nav>

    <!-- This is where child pages will load -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'Shop',
}
</script>

<style></style>