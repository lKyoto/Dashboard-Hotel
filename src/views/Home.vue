<template>
    <div id="app">
   <v-app light>
    <v-toolbar class="white">
      <v-toolbar-title v-text="title">Hotel</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <section>
        <v-parallax src="https://cdn.vuetifyjs.com/images/parallax/material.jpg" >
          <v-layout
            column
            align-center
            justify-center
            class="white--text"
          >
            <h1 class="primary--text mb-2 display-1 text-xs-center"> Nombre del hotel </h1>
          </v-layout>
        </v-parallax>
      </section>

      <section>
        <v-layout
          column
          wrap
          class="my-5"
          align-center
        >
          <v-flex xs12 sm4 class="my-3">
            <div class="text-xs-center">
              <h2 class="headline">mas texto</h2>
            </div>
          </v-flex>
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="icon_color--text text--icon_color">hotel</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Habitaciones</div>
                    </v-card-title>
                    <v-card-text>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis doloribus ipsa totam iusto officia incidunt id odit commodi, quos dolores ab, laboriosam cupiditate, natus explicabo error corporis optio! Similique, placeat?
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="icon_color--text text--icon_color">directions_bike</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline">Actividades</div>
                    </v-card-title>
                    <v-card-text>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente ipsam eos, earum vel architecto odit, amet officia vero aperiam voluptates dicta sint possimus voluptatem quis consectetur asperiores sit optio in!
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="icon_color--text text--icon_color">restaurante</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Restaurante</div>
                    </v-card-title>
                    <v-card-text>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur aut debitis vitae, eius ab amet dolorem unde delectus, quam voluptates assumenda quo perspiciatis sequi deserunt repudiandae facilis accusamus. Voluptates, ad!
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>

      <section>
        <v-parallax src="https://cdn.vuetifyjs.com/images/parallax/material.jpg" height="380">
          <v-layout column align-center justify-center>
            <div class="headline white--text mb-3 text-xs-center">Texto </div>
            <em>Mas texto :V </em>
          </v-layout>
        </v-parallax>
      </section>

      <section>
        <v-container grid-list-xl>
          <v-layout row wrap justify-center class="my-5">
            <v-flex xs12 sm4>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Ubicación</div>
                </v-card-title>
                <v-card-text>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam nihil vel, culpa nesciunt ratione voluptates sit sint, dolorum eveniet molestias fuga a. Neque, minima! Exercitationem earum beatae impedit quod culpa. 
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 sm4 offset-sm1>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Contact us</div>
                </v-card-title>
                <v-card-text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                </v-card-text>
                <v-list class="transparent">
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="icon_color--text text--icon_color">phone</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>NÚMERO</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="icon_color--text text--icon_color">place</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>DIRECCIÓN</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="icon_color--text text--icon_color">email</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>CORREO DEL HOTEL</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </section>

      <v-footer class="primary">
        <v-layout row wrap align-center>
          <v-flex xs12>
              
          </v-flex>
        </v-layout>
      </v-footer>
    </v-content>
  </v-app>
 </div>
</template>

<script>
export default {
 data () {
    return {
      title: '',
      //
    }
  }
}
</script>

<style>

</style>
