<template>
  <v-form v-model="valid">
    <v-container>
      <v-layout align-center justify-center column fill-height>
        <v-flex
          xs12
          md4
        >
          <v-text-field
            v-model="email"
            :rules="nameRules"
            :counter="10"
            label="Correo"
            required
          ></v-text-field>
        </v-flex>

        <v-flex
          xs12
          md4
        >
          <v-text-field
            v-model="password"
            :rules="nameRules"
            :counter="10"
            label="Contraseña"
            required
          ></v-text-field>
        </v-flex>

        <v-flex
          xs12
          md4
        >
            <template>
                <v-btn :disabled="!valid" color="success"  @click="login()">Login</v-btn>
            </template>
            <template>
                <v-btn :disabled="!valid" color="success">Login</v-btn>
            </template>
         </v-flex>
      </v-layout>
    </v-container>
  </v-form>
</template>

<script>
import axios from 'axios'
import router from '../../router'
import EventBus from '../EventBus'

export default {
    name: 'Login',
    data(){
        return{
            email: '',
            password: ''
        }
    },
    methods: {
        login(){
            axios.post('/users/login', {
                email: this.email,
                password: this.password
            })
            .then(res => {
                localStorage.setItem('usertoken', res.data)
                this.email = ''
                this.password = ''
                router.push({name: 'home'})
            })
            .catch(err => {
                console.log(err)
            })
            this.emitMethod()
        },
        emitMethod(){
            EventBus.$emit('logged-in', 'loggedin')
        }
    }
}
</script>

<style>

</style>
