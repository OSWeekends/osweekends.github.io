<template>
  <v-container class="home-footer">
    <div class="home-footer__wrapper text-xs-center">
      <div class="home-footer__social-icons">
        <v-btn
          v-for="(site, index) in sites"
          :key="index"
          :title="site.site"
          :href="site.href"
          target="_blank"
          icon>
          <v-icon size="30px"> {{ site.icon }}</v-icon>
        </v-btn>        
      </div>
      <div class="home-footer__love">
        2018 — Made with
        <v-icon small>fas fa-heart</v-icon> by guilders.
      </div>
    </div>
  </v-container>
</template>


<script>
export default {
  data () {
      return {
        sites: [
          {
            site: 'Meetup',
            icon: 'fab fa-meetup',
            href: 'https://www.meetup.com/es/Open-Source-Weekends/',
          },
          {
            site: 'Github',
            icon: 'fab fa-github',
            href: 'https://github.com/osweekends',
          },
          {
            site: 'Twitter',
            icon: 'fab fa-twitter',
            href: 'https://twitter.com/os_weekends',
          },
          {
            site: 'Facebook',
            icon: 'fab fa-facebook-f',
            href: 'https://www.facebook.com/osweekends/',
          },
          {
            site: 'Medium',
            icon: 'fab fa-medium-m',
            href: 'https://medium.com/osweekends',
          },
          {
            site: 'Slack',
            icon: 'fab fa-slack-hash',
            href: 'http://invitations-osweekends.herokuapp.com/',
          }
        ]
      }
    }
}
</script>



<style lang="stylus" scoped>
.home-footer
  color #fff

  &__social-icons
    padding-bottom 10px

  & a,
  & i
    color #fff

</style>
