<template>
  <div class="cookie-consent"><p>This website uses cookies to ensure you get the best experience on our website.
    <a
      href="https://cookiesandyou.com/"
      target="_blank">Learn More
  </a> </p></div>
</template>

<script>
export default {
  data() {
    return {
      titulo: 'Hola'
    };
  }
};
</script>

<style lang="stylus" scoped>
.cookie-consent 
    position: fixed;
    width: 100%;
    height: 10%;
    top: 90%;
    color: #fff;
    background-color: #003ea5;
    z-index: 90;
    display: flex;
    align-items: center;
    justify-content: center;

</style>
