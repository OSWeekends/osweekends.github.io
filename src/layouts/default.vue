<template>
  <v-app id="app">
    <cookie-consent />
    <v-navigation-drawer
      :clipped="clipped"
      v-model="drawer"
      temporary
      fixed
      app
    >
      <v-list>
        <v-list-tile
          v-for="(item, i) in items"
          :to="item.to"
          :key="i"
          router
          exact
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"/>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"/>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      :clipped-left="clipped"
      :dark="isHome"
      class="elevation-0"
      color="transparent"
      absolute
      fixed
      app
    >
      <v-toolbar-side-icon
        class="hidden-md-and-up"
        @click="drawer = !drawer"
      />
      <v-toolbar-title>
        <nuxt-link to="/">
          <img
            src="/logo-osw.png"
            height="35px"
            alt="OSWeekends Logo">
        </nuxt-link>
      </v-toolbar-title>

      <v-spacer/>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          v-for="(item,i) in items"
          :to="item.to"
          :key="i"
          flat>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <HomeHeader
      v-if="isHome"
      msg="La comunidad de software libre que hace cosas 😎"/>

    <nuxt/>

    <br>
    <footer class="footer-section">
      <home-footer/>
    </footer>
  </v-app>
</template>

<script>
import HomeHeader from "~/components/HomeHeader/Index.vue";
import HomeFooter from "~/components/HomeFooter/Index.vue";
import CookieConsent from "~/components/Cookieconsent/Index.vue";

export default {
  components: {
    HomeHeader,
    HomeFooter,
    CookieConsent
  },
  data() {
    return {
      clipped: false,
      drawer: false,
      items: [
        { icon: "bubble_chart", title: "Welcome", to: "/Welcome" },
        { icon: "apps", title: "Guilds", to: "/guilds" },
        { icon: "code", title: "Proyectos", to: "/proyectos" }
      ],
      title: "OSWeekends"
    };
  },
  computed: {
    isHome() {
      return this.$nuxt.$route.path === "/";
    }
  },
  created() {
    // this.cookies();
  },
  methods: {
    cookies() {
      // Este if previene que se ejecute en server render para poder tener acceso al objeto window del browser
      if (process.browser) {
        window.cookieconsent.initialise({
        container: document.getElementById("app"),
        palette: {
          popup: { background: "#003ea5" },
          button: { background: "transparent", border: "#fff", text: "#fff", padding: '5px 40px' }
        },
        revokable: true,
        onStatusChange: function(status) {
          console.log(
            this.hasConsented() ? "enable cookies" : "disable cookies"
          );
        },
        law: {
          regionalLaw: false
        },
        location: true
      });
      }
      
    }
  }
};
</script>

<style lang="stylus" scoped>
.footer-section {
  background-color: #121212;
}
</style>

