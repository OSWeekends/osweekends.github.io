<template>
  <v-flex
    md5
    sm12
    class="meetup-info">
    <h2>Meetup Info</h2>
    <pre>{{ meetupData }}</pre>
  </v-flex>
</template>
<script>
  export default {
    name: 'HomeHeaderMeetup',
    data() {
      return {
        project: 'default',
        meetupData: {},
      }
    },
  }
</script>

<style scoped lang="stylus">
  .meetup-info
    color white
    text-align center

</style>
