<template>
  <v-app>
    <v-navigation-drawer
      temporary
      v-model="mobileNav"
    >
      <v-list>
        <v-list-tile
          v-for="(menu, i) in menuItems"
          :key="i"
          :to="{ name: menu.route }"
          exact
        >
          <v-list-tile-action>
            <v-icon>{{ menu.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ menu.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      dense
      dark
      fixed
      color="primary"
    >
      <v-toolbar-side-icon @click.stop="mobileNav = !mobileNav" class="hidden-sm-and-up"></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link :to="{ name: 'Home' }" tag="span">ALC Students Project</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          flat
          v-for="(menu, i) in menuItems"
          :key="i"
          :to="{ name: menu.route }"
          exact
        >
          <v-icon>{{ menu.icon }}</v-icon>
          &nbsp;
          {{ menu.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <main class="mt-5">
      <router-view></router-view>
    </main>
    <v-footer
      color="primary"
      class="pa-3"
      dark
    >
      <v-spacer></v-spacer>
      <div>
        Designed &amp; Developed by <a href="http://www.twitter.com/emmy_rald" target="_blank">Emmanuel Akinpelu</a>
      </div>
      <v-spacer></v-spacer>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        mobileNav: false,
        menuItems: [
          {
            icon: 'home',
            title: 'Home',
            route: 'Home'
          },
          {
            icon: 'people',
            title: 'View Students',
            route: 'ViewStudents'
          },
          {
            icon: 'person_add',
            title: 'Create Student',
            route: 'CreateStudent'
          }
        ]
      }
    }
  }

</script>

<style scoped>
  .toolbar__title {
    cursor: pointer;
  }
  .footer {
    color: #fff;
  }
  .footer a {
    text-decoration: none;
    color: #ccc;
    font-weight: bold;
  }
</style>
