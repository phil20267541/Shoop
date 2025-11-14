<template>
  <header>
    <h1>Welcome to Shoop</h1>
  </header>
  <div class="content-box"> 
    <section class="content">
      <h2>This is a Shoop</h2>
      <h2>Shoop are fluffy</h2>
      <h2>Shoop are warm</h2>
      <h2>And Shoop are happy</h2><br>
      <h1>BUT</h1><br>
      <h2>They need your help to stay happy</h2>
      <div class="cta-box">
        <router-link to="/Login" class="cta">Join Now</router-link>
      </div>
    </section>
    <img src="/shoop.png">
  </div>
</template>

<script></script>

<style>
.content-box {
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.content {
  justify-items: center;
}

.cta-box {
  margin-top: 20px;
}

.cta {
  padding: 10px 18px;
  border: 1px solid #261A0A;
  border-radius: 20px;
  background-color: #8C5230;
  font-size: 30px;
  color: #F2D6A2;
  text-decoration: none;
  
}

.cta:hover {
  text-decoration: underline;
  background-color: #a5623e;
}
</style>