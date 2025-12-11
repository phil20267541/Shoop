<template>
  <li
    class="nav-item"
    :class="{ active: isActive }"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    @click="handleClick"
  >

    
    <router-link :to="item.link">
      {{ item.title }}
    </router-link>

    <ul v-if="item.subpages && showDropdown" class="dropdown">
      <li v-for="sub in item.subpages" :key="sub.title">
        <router-link :to="sub.link">{{ sub.title }}</router-link>
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  props: {
    item: Object
  },
  data() {
    return {
      showDropdown: false,
      isMobile: false
    };
  },
  computed: {
    isActive() {
      const current = this.$route.path;
      
      // If the current path is exactly the item's link (e.g. /Shop)
      // OR starts with the item's path (e.g. /Shop/hats)
      return current === this.item.link || current.startsWith(this.item.link + '/');
    }
  },
  mounted() {
    this.checkDevice();
    window.addEventListener("resize", this.checkDevice);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.checkDevice);
  },
  methods: {
    checkDevice() {
      this.isMobile = window.innerWidth <= 768;
    },
    handleMouseEnter() {
      if (!this.isMobile) this.showDropdown = true;
    },
    handleMouseLeave() {
      if (!this.isMobile) this.showDropdown = false;
    },
    handleClick(event) {
      if (this.isMobile && this.item.subpages) {
        event.preventDefault();
        this.showDropdown = !this.showDropdown;
      }
    }
  }
};
</script>


<style scoped src="/src/assets/css/components/nav-item.css">
.nav-item {
  position: relative;
  list-style: none;
}

.nav-item a {
  color: #F2D6A2;
  text-decoration: none;
  padding: 10px 16px;
  margin: 10px 16px;
  display: inline-block;
}

.nav-item.active > a {
  border-radius: 20px;
  background-color: #F2D6A2;
  color: #261A0A;
  border: 2px solid #261A0A;
}

.nav-item a:active {
  border-radius: 20px;
  background-color: #8a5233;
  color: #F2D6A2;
}

.nav-item > a.router-link-active {
  border-radius: 20px;
  background-color: #F2D6A2;
  color: #261A0A;
  border: 2px solid #261A0A;
}

/* Dropdown container */
.dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #8C5230;
  list-style: none;
  padding: 0;
  margin: 0;
  border-radius: 0 0 8px 8px;
  min-width: 180px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
  z-index: 100;
}

/* Dropdown items */
.dropdown li {
  padding: 8px 16px;
}

.dropdown a {
  color: #F2D6A2;
  display: block;
  text-decoration: none;
  margin: 0;
}

.dropdown a.router-link-active{
  border-radius: 20px;
  background-color: #8C5230;
  color: #F2D6A2;
  border: none;
}

.dropdown a:hover {
  background-color: #a5623e;
}

@media screen and (min-width: 481px) and (max-width: 768px) {
   .nav-item {
    width: 100%;
  }

  .dropdown {
    position: static; /* makes dropdown push content below */
    box-shadow: none;
    background-color: #A0623B;
  }

  .dropdown li {
    border-top: 1px solid #7b4222;
  }
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
