<template>
  <div class="login">
    <v-form v-model="valid">
    <v-text-field
      v-model="email"
      :rules="nameRules"
      label="email"
      required
    ></v-text-field>
    <v-text-field
      v-model="password"
      :rules="emailRules"
      label="password"
      required
    ></v-text-field>
    <v-btn @click="login">Enter</v-btn>
  </v-form>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'login',
  data() {
    return {
      valid: false,
      email: '',
      nameRules: [
        v => !!v || 'Mail is required',
        v => /.+@.+/.test(v) || 'Mail must be valid'
      ],
      password: '',
      emailRules: [
       v => !!v || 'Password is required',
        v => v.length <= 10 || 'Password must be less than 10 characters'
      ]
    }
  },
  methods: {
    login: function() {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
        user => {
          this.$router.replace('/')
        },
        function(err) {
          alert(`oooops ${err.message}`)
        }
      )
    }
  }
}
</script>

<style scoped>
.login{
  width: 500px;
  margin: auto;
}
</style>

