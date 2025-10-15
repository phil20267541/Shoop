<template>
  <h1>App.vue</h1>
  <p>The component has two div tags with one slot in each.</p>
  <slot-comp>
    <template v-slot:bottomSlot>
      <h4>To the bottom slot!</h4>
      <p>This p tag and the h4 tag above are directed to the bottom slot with the v-slot directive used on the template tag.</p>
    </template>
    <p>This goes into the default slot</p>
  </slot-comp>
</template>

<script></script>

<style>
  #app {
    width: 300px;
  }
</style>   