<template>
  <v-flex
    md5
    sm12
    class="meetup-info">
    <h2>Meetup Info</h2>
    <pre>{{ getMeetupData }}</pre>
  </v-flex>
</template>
<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'HomeHeaderMeetup',
    data() {
      return {
        project: 'default',
      }
    },
    computed: {
      ...mapGetters( [ 'getMeetupData' ] ),
    },
  }
</script>

<style scoped lang="stylus">
  .meetup-info
    color white
    text-align center

</style>
