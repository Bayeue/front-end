<template>
  <div>
    <v-navigation-drawer v-model="drawer" app temporary>
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <NuxtLink to="/landing">
              <v-img
                :src="require('static/assets/bayeue.svg')"
                alt="Logo"
                width="40"
              ></v-img>
            </NuxtLink>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="title">Bayeue</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-list dense>
        <v-list-item
          v-for="([text, link], i) in items"
          :key="i"
          link
          @click="$vuetify.goTo(link)"
        >
          <v-list-item-content>
            <v-list-item-title class="subtitle-1">
              {{ text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      :color="color"
      :flat="flat"
      dark
      class="px-15"
      :class="{ expand: flat }"
    >
      <v-toolbar-title>
        <NuxtLink to="/landing">
          <v-img :src="require('static/assets/bayeue_white.svg')" />
        </NuxtLink>
      </v-toolbar-title>
      <v-spacer />
      <v-app-bar-nav-icon
        v-if="isXs"
        class="mr-4"
        @click.stop="drawer = !drawer"
      />
      <div v-else>
        <v-btn text @click="$vuetify.goTo('#home')">
          <span class="mr-2 text-capitalize font-weight-bold">Home</span>
        </v-btn>
        <v-btn text @click="$vuetify.goTo('#features')">
          <span class="mr-2 text-capitalize font-weight-bold">Features</span>
        </v-btn>
        <v-btn text @click="$vuetify.goTo('#about')">
          <span class="mr-2 text-capitalize font-weight-bold">About</span>
        </v-btn>
        <v-btn text @click="$vuetify.goTo('#ourteam')">
          <span class="mr-2 text-capitalize font-weight-bold">Our Team</span>
        </v-btn>
        <v-btn text @click="$vuetify.goTo('#faq')">
          <span class="mr-2 text-capitalize font-weight-bold">FAQ's</span>
        </v-btn>
        <v-btn
          depressed
          rounded
          color="white"
          light
          @click="$vuetify.goTo('#download')"
        >
          <span class="text-capitalize font-weight-bold">Download</span>
        </v-btn>
      </div>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: 'NavigationComponent',
  props: {
    color: String,
    flat: Boolean,
  },

  data: () => ({
    drawer: null,
    isXs: false,
    items: [
      ['Home', '#home'],
      ['Features', '#features'],
      ['About', '#about'],
      ['Our Team', '#ourteam'],
      ["FAQ's", '#faq'],
      ['Download', '#download'],
    ],
  }),
  watch: {
    isXs(value) {
      if (!value) {
        if (this.drawer) {
          this.drawer = false
        }
      }
    },
  },
  mounted() {
    this.onResize()
    window.addEventListener('resize', this.onResize, { passive: true })
  },
  methods: {
    onResize() {
      this.isXs = window.innerWidth < 850
    },
  },
}
</script>
<style lang="scss" scoped>
.v-toolbar {
  transition: 0.6s;
}
.expand {
  height: 80px !important;
  padding-top: 10px;
}
</style>
