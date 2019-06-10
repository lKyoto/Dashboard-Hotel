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
        </v-flex>
      </v-layout>
    </v-container>
  </v-form>
</template>

content_copy
First name

<script>
export default {

}
</script>

<style>

</style>
