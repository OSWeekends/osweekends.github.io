<template>
  <v-flex
    md5
    sm12
    class="meetup-info"
  >
    <template v-if="ev">
      <v-card class="card cursor">
        <h3 class="headline mb-0 name ">
          <a
            :href="ev.link"
            target="_blank">{{ ev.name }}</a>
        </h3>
        <v-card-text
          class="pt-0 pb-0"
          @click="goToEvent"
        >
          <section class="d-flex">
            <span class="date-display">
              <span class="day">{{ ev.daySimple }}</span>
              <span class="month">{{ ev.monthSimple }}</span>
            </span>
            <div class="ml-4">
              <div class="body-1 blue-grey--text mb-1">{{ ev.fullDate }}</div>
              <div class="body-1 mb-1">{{ ev.name }}</div>
              <div class="body-1 mb-1 place">
                <div class="item-1">
                  <v-icon color="red">place</v-icon>
                </div>
                <div class="item-2">
                  <p class="mb-0 main">
                    <span>{{ ev.venue.name }}</span>
                  </p>
                  <p class="mt-0 mb-0 sub">
                    <span class="grey--text text--darken-1">{{ ev.venue.address_1 }}</span>
                  </p>
                </div>
              </div>
              <div class="caption blue-grey--text d-flex justify-end mt-2">
                {{ ev.yes_rsvp_count }} {{ ev.group.who }} irán
              </div>
            </div>
          </section>
        </v-card-text>
      </v-card>
    </template>

  </v-flex>
</template>

<script>
  import moment from 'moment'

  export default {
    name: 'HomeHeaderMeetup',
    props: {
      ev: {
        required: true,
        type: Object,
      },
    },
    created() {
      moment.locale( 'es' )
      const format = 'YYYY-MM-DD'
      const hour = moment( this.ev.local_time, 'hh:mm' ).format( 'hh' )
      const minutes = moment( this.ev.local_time, 'hh:mm' ).format( 'mm' )
      this.ev.fullDate = moment( this.ev.local_date, format ).hour( hour ).minutes( minutes ).format( 'LLL' )
      this.ev.daySimple = moment(this.ev.local_date, format).format('DD') // 02
      this.ev.monthSimple = moment(this.ev.local_date, format).format('MMM')  // dic
    },
    methods: {
      goToEvent() {
        window.open( this.ev.link, '_blank' )
      },
    },
  }
</script>

<style scoped lang="stylus">
  .meetup-info
    color white

    .card
      margin-left 20px
      margin-right 20px
      padding 20px
      &.cursor:hover
        cursor pointer

      .date-display
        background #f6f7f8
        border 1px solid rgba(46, 62, 72, .12)
        border-radius 8px
        display inline-block
        min-height 60px
        min-width 50px
        max-width 100px
        padding 8px
        text-align center
        max-height 61px
        .day
          color #f13a59
          font-size 20px
          display block
          font-weight bolder
          line-height 1.1
        .month
          text-transform capitalize

      .name
        position relative
        overflow hidden
        text-overflow ellipsis
        white-space nowrap
        height 45px
        font-weight bolder
        a
          text-decoration none
          &:hover
            text-decoration underline

      .place
        margin-top 15px
        display flex
        justify-content start
        .item-1
          color red
        .item-2
          .main
            font-weight bold


</style>
