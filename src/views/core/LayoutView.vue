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
          <v-dialog
          v-model=signInCheck
          width="auto"
          >
          <v-card class="mx-auto px-6 py-8" width="344">
            <v-card-text>
              <h1 style="text-align: center;">LOGIN</h1>
            </v-card-text>
            <v-form
        v-model="form"
        @submit.prevent="onSubmit"
      >
        <v-text-field
          v-model="email"
          :readonly="loading"
          :rules="[required]"
          class="mb-2"
          clearable
          label="Email"
        ></v-text-field>

        <v-text-field
          v-model="password"
          :readonly="loading"
          :rules="[required]"
          clearable
          label="Password"
          placeholder="Enter your password"
        ></v-text-field>

        <br>

        <v-btn
          :disabled="!form"
          :loading="loading"
          block
          color="success"
          size="large"
          type="submit"
          variant="elevated"
        >
          Sign In
        </v-btn>

        <br/>

        <v-btn
          block
          color="success"
          size="large"
          variant="elevated"
          @click="moveToSignUp"
        >
          Sign Up
        </v-btn>
      </v-form>
          </v-card>
          </v-dialog>
          <v-dialog
          v-model="signUpDialog"
          width="auto">
            <v-card class="mx-auto px-6 py-8" width="344">
            <v-card-text>
              <h1 style="text-align: center;">SIGN UP</h1>
            </v-card-text>
            <v-form
        v-model="form"
        @submit.prevent="onSubmit"
      >
        <v-text-field
          v-model="email"
          :readonly="loading"
          :rules="[required]"
          class="mb-2"
          clearable
          label="Email"
        ></v-text-field>

        <v-text-field
          v-model="password"
          :readonly="loading"
          :rules="[required]"
          clearable
          label="Password"
          placeholder="Enter your password"
        ></v-text-field>

        <br/>

        <v-btn
          block
          color="success"
          size="large"
          variant="elevated"
          @click="signUpDialog=false"
        >
          Sign Up
        </v-btn>
      </v-form>
          </v-card>
          </v-dialog>
          <div class="pa-2">
            <v-btn @click="signInCheck=true" block>
              LogIn
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
import { ref } from 'vue';
export default {
  setup() {
      const name = "Sakura Tunes"
      const signInCheck = ref(false)
      const signUpDialog = ref(false)

      const moveToSignUp = () => {
        signInCheck.value = false
        signUpDialog.value = true
      }
      return { 
        name,
        signInCheck,
        signUpDialog,
        moveToSignUp
      }
  }
}
</script>

<style>

</style>