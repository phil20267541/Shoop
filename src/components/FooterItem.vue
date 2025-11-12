<template>
  <ul v-if="!item.subpages">
    <li :key="item.title">
      <router-link :to="item.link">{{ item.title }}</router-link>
    </li>
  </ul>
  <ul v-else>
    <li v-for="sub in item.subpages" :key="sub.title">
      <router-link :to="sub.link">{{ sub.title }}</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    item: Object
  },
  data() {
    return {
    };
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
  li {
    margin-bottom: 3px;
  }
  a {
    color: #F2D6A2;
    text-decoration: none;
    font-size: 20px;
  }
  a:hover {
    text-decoration: underline;
  }
}


</style>