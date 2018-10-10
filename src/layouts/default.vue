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
      fixed
      app
    >
      <v-toolbar-side-icon
        class="hidden-md-and-up"
        @click="drawer = !drawer"
      />
      <v-toolbar-title v-text="title"/>
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
      msg="La comunidad de software libre que hace cosas 😎"
    />
    <v-content>
      <v-container>
        <nuxt/>
      </v-container>
    </v-content>
    <br>
    <v-footer
      fixed
      app
      mt-5
    >
      <span class="ml-1">&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
  import HomeHeader from '~/components/HomeHeader.vue'

  export default {
    components: { HomeHeader },
    data() {
      return {
        clipped: false,
        drawer: false,
        items: [
          { icon: 'home', title: 'Home', to: '/' },
          { icon: 'apps', title: 'Guilds', to: '/guilds' },
          { icon: 'bubble_chart', title: 'Welcome', to: '/Welcome' },
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
