<template>
    <nav>
        <v-snackbar v-model="snackbar" :timeout="4000">
            <span>Awesome! You added a new project.</span>
            <v-btn variant="flat" color="white" @click="snackbar = false">Close</v-btn>
        </v-snackbar>
        <v-toolbar variant class="text-grey">
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title class="text-uppercase">
                <span class="font-weight-light">Todo</span>
                <span>Libin</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>


            <v-btn color="grey">
                <v-icon start>mdi-chevron-down</v-icon>
                <span>Menu</span>

                <v-menu activator="parent">
                    <v-list>
                        <v-list-item v-for="link in links" :key="link.text" :to="link.route">
                            <v-list-item-title>{{ link.text }}</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </v-btn>


            <v-btn variant>
                <span>Sign Out</span>
                <v-icon end>mdi-exit-to-app</v-icon>
            </v-btn>
        </v-toolbar>
        <v-navigation-drawer v-model="drawer" temporary color="primary">
            <v-row class="d-flex align-center">
                <v-col class="mt-5">
                    <v-avatar size="100">
                        <v-img src="/avatar-1.png"></v-img>
                    </v-avatar>
                    <p class="text-white text-subtitle-1 mt-1">
                        The Net Ninja
                    </p>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <PopupVue @projectAdded="snackbar = true" />
                </v-col>
            </v-row>
            <v-list density="compact">
                <v-list-item v-for="link in links" :key="link.text" :prepend-icon="link.icon" :title="link.text"
                    :to="link.route">
                    <!-- https://stackoverflow.com/questions/76311296/vuetify-3-v-list-highlighting-active-item -->
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>

<script>
import PopupVue from './PopupVue.vue';
export default {
    components: { PopupVue },
    data() {
        return {
            drawer: false,
            snackbar: false,
            links: [
                { icon: 'mdi-view-dashboard', text: 'Dashboard', route: '/' },
                { icon: 'mdi-folder', text: 'My Projects', route: '/projects' },
                { icon: 'mdi-account', text: 'Team', route: '/team' },
            ]
        }
    }
}
</script>