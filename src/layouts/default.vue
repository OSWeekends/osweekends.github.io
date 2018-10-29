<template>
  <v-app>
    <v-navigation-drawer
      :clipped="clipped"
      v-model="drawer"
      temporary
      fixed
      app
    >
      <v-list>
        <a
          v-for="(item,i) in items"
          :key="i"
          :href= "item.to">
          <v-list-tile
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
        </a>
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
        <a
          v-for="(item,i) in items"
          :key="i"
          :href= "item.to">
          <v-btn
            flat>
            {{ item.title }}
          </v-btn>
        </a>
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
  import HomeHeader from '~/components/HomeHeader/Index.vue'
  import HomeFooter from '~/components/HomeFooter/Index.vue'


  export default {
    components: {
      HomeHeader,
      HomeFooter,
    },
    data() {
      return {
        clipped: false,
        drawer: false,
        items: [
          /*{ icon: 'bubble_chart', title: 'Welcome', to: '/Welcome' },
          { icon: 'apps', title: 'Guilds', to: '/guilds' },
          { icon: 'code', title: 'Proyectos', to: '/proyectos' },*/
          { icon: 'bubble_chart', title: 'Welcome', to: 'https://osweekends.gitbook.io/community-manual/'},
          { icon: 'apps', title: 'Guilds', to: 'https://osweekends.gitbook.io/community-manual/#guilds' },
          { icon: 'code', title: 'Proyectos', to: 'https://osweekends.gitbook.io/community-manual/#proyectos' },
        ],
        title: 'OSWeekends',
      }
    },
    computed: {
      isHome() {
        return this.$nuxt.$route.path === '/'
      },
    },
  }
</script>

<style lang="stylus" scoped>

  a
    text-decoration none
    margin-top 15px

  .footer-section
    background-color #121212
</style>
