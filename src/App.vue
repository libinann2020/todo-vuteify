<template>
  <v-app class="bg-grey-lighten-3">
    <NavbarVue />
    <v-main class="mx-4 mb-4">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import NavbarVue from './components/NavbarVue.vue'

export default {
  name: 'App',
  components: { NavbarVue },
  data: () => ({
    //
  }),
}
</script>
