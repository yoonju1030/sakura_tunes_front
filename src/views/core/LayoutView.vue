<template>
  <v-card style="width: 100%">
    <v-layout>
      <v-navigation-drawer
        class="bg-pink"
        theme="dark"
        permanent
      >
        <v-list color="transparent">
          <v-list-item prepend-icon="mdi-view-dashboard" :title="name"></v-list-item>
          <v-list-item prepend-icon="mdi-account-box" title="Account"></v-list-item>
          <v-list-item prepend-icon="mdi-gavel" title="Admin"></v-list-item>
        </v-list>

        <template v-slot:append>
          <div class="pa-2">
            <v-btn block>
              Logout
            </v-btn>
          </div>
        </template>
      </v-navigation-drawer>
      <v-main style="height: 100vh; width: 100%" fluid>
        <router-view />
      </v-main>
    </v-layout>
  </v-card>

</template>
<script>
export default {
  setup() {
      const name = "Sakura Tunes"
      return { name }
  }
}
</script>

<style>

</style>