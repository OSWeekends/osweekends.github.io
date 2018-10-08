<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      temporary
      fixed
      app
    >
      <v-list dense>
        <v-list-tile
          v-for="(item, i) in items"
          :key="i"
          @click="demo"
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      app
      dark
      class="elevation-0"
      color="transparent">
      <v-toolbar-side-icon
        class="hidden-md-and-up"
        @click.stop="drawer = !drawer"/>
      <v-toolbar-title v-text="title"/>
      <v-spacer/>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          v-for="(item, i) in items"
          :key="i"
          flat> {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <header v-if="isHome">
      <HomeHeader/>
    </header>
    <v-content>
      <v-container>
        <nuxt/>
      </v-container>
    </v-content>

    <v-footer app>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
  import HomeHeader from '~/components/HomeHeader.vue'

  export default {
    components: {
      HomeHeader,
    },
    data() {
      return {
        drawer: false,
        items: [
          { title: 'Inicio', icon: 'home', to: '/' },
          { title: 'Guilds', icon: 'home', to: '/guilds' },
          { title: 'Proyectos', icon: 'home', to: '/projects' },
        ],
        title: 'OSWeekends',
      }
    },
    computed: {
      isHome() {
        return this.$nuxt.$route.path === '/'
      },
    },
    methods: {
      demo() {
        console.log( 'DEMO' )
      },
    },
  }
</script>
