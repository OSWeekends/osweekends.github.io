<template>
  <div
    v-show="!cookiesConsent"
    class="cookie-consent">
    <div class="cookie-consent__text-box">
      <span>This website uses cookies to ensure you get the best experience on our website.
        <a
          class="cookie-consent__link"
          href="https://cookiesandyou.com/"
          target="_blank">Learn More
        </a>
      </span>
    </div>
    <div class="cookie-consent__btn-box">
      <button 
        class="cookie-consent__btn"
        @click="consentCookies()">Got It
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cookiesConsent: true
    };
  },
  created () {
    // Este if previene que se ejecute en server render para poder tener acceso al objeto window del browser
    if (process.browser) {
      this.checkLogalStorage()
    }
  },
   methods: {
    consentCookies() {
      localStorage.setItem("cookiesConsent", true);
      this.checkLogalStorage()
    },
    checkLogalStorage() {
      this.cookiesConsent = localStorage.cookiesConsent ? true : false
    }
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
    justify-content: space-around;

    &__link
      text-decoration none
      color #fff
      font-weight 600

      &:hover
        text-decoration underline

    &__btn
      padding: 10px 25px
      font-size 16px
      border: 1px solid #fff
      transition all 0.5s

      &:hover
        cursor pointer
</style>
