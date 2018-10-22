<template>
  <v-container class="home-projects">
    <v-layout
      row
      wrap
      class="home-projects__title-row text-xs-center text-sm-left">
      <v-flex 
        xs12
        sm1
        class="home-projects__icon-wrapper" >
        <i class="home-projects__icon material-icons"> code </i>
      </v-flex>
      <v-flex
        xs12
        sm11>
        <h2 class="home-projects__title">Proyectos</h2>
        <h3 class="home-projects__subtitle">Proyectos que se han hecho en la comunidad: </h3>
      </v-flex>
    </v-layout>
    <v-layout
      row
      wrap>
      <v-flex
        v-for="(project, index) in projects"
        :key="index"
        xs12
        sm4
        class="text-xs-center home-projects__cards">
        <home-projects-card
          :title="project.title"
          :description="project.description"
          :img="project.img"
          :website="project.website"
          :github="project.github"
          class="home-projects__card" />
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
import HomeProjectsCard from '~/components/HomeProjects/HomeProjectsCard.vue'
import { mapGetters } from 'vuex'

  export default {
    components: {
      HomeProjectsCard
    },
    data () {
      return {
      }
    },
    computed: {
      ...mapGetters( [ 'projects' ] ),
    } 
  }
</script>

<style lang="stylus" scoped>

.home-projects

  &__title-row
    padding-left 20px
    margin-bottom 40px
    color #003ea5


  &__icon-wrapper
    display flex
    align-items  center
    justify-content center

  &__icon
    font-size 72px


  &__title
    font-size 40px

</style>
