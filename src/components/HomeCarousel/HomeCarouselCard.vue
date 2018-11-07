<template>
  <div class="guilds-card">
    <v-card>
      <v-img
        :src="avatar"
        aspect-ratio="2.75"
        class="guilds-card__img"
      />
      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-0">{{ name }}</h3>
          <div> {{ description }}</div>
        </div>
      </v-card-title>

      <v-card-actions>
        <v-btn
          v-if="github"
          :href="'https://github.com/OSWeekends/'+github_repo"
          title="github"
          target="_blank"
          flat
          color="#003ea5">Github</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
      default: 'worknpm'
      },
    description: {
      type: String,
      required: true,
      default: 'Lorem ipsun text'
      },
    avatar: {
      type: String,
      required: true,
      default: 'name'
      },
    github_repo: {
      type:  String,
      required: false,
      default: ''
    },
    website: {
      type: String,
      required: false,
      default: ''
    }
  }
}
</script>


<style lang="stylus" scoped>
.guilds-card
  background-color rgba(#fff, 0.75)
  margin 10px 20px
  border-radius 3px
  overflow hidden
  box-shadow 0 15px 40px rgba(#000, .15)

  &__img
    min-height 200px
  
  v-card theme--dark
   background-color rgba(#fff, 0.75)

</style>
