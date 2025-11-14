<template>
  <nav>
      <navbar/>
  </nav>
  <main>
    <RouterView></RouterView>
  </main>
  <footer>
    <footer-bar/>
  </footer>
  
</template>

<script></script>

<style>
  * {
    padding: 0;
    margin: 0;
  }

  header {
    background-color: #F2D6A2;
    padding: 20px;
    h1 {
      justify-self: center;
      color: #261A0A;
      font-size: 80px;
    }
  }



  nav {
    background-color: #8C5230;
    justify-items: center;
    border-bottom: 1px solid #261A0A;
    position: sticky;
    top: 0;
  }

  main {
    background-color: #F2D6A2;
    padding: 20px;
  }

  footer {
    background-color: #8C5230;
    justify-items: center;
    border-top: 1px solid #261A0A;
  }

  @media screen and (min-width: 481px) and (max-width: 768px) {
    
  }

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    
  }

  @media screen and (min-width: 1025px){

  }
</style>   