<template>
  <v-container>
    <!-- Seccion del formulario -->
    <v-layout row wrap align-center>
      <v-flex xs12 md4>
        <v-form ref="form" v-model="valid">
          <v-text-field
            v-model="activitie.name"
            :counter="30"
            label="Nombre"
            :rules="nameRules"
            required
          ></v-text-field>
          <v-text-field 
            v-model="activitie.price" 
            label="Precio" 
            :rules="priceRules" 
            required
          ></v-text-field>
          <v-textarea
            height="150"
            v-model="activitie.description"
            :counter="200"
            label="Descripción"
            :rules="descriptionRules"
            required
          ></v-textarea>
          <template v-if="edit ===false ">    
            <v-btn :disabled="!valid" color="success" @click="POST_Activitie">Crear actividad</v-btn>
            <v-btn color="warning" @click="reset">Borrar formulario</v-btn>
          </template>
          <template v-else="">
            <v-btn :disabled="!valid" color="success" @click="POST_Activitie">Actualizar</v-btn>
          </template>
        </v-form>
      </v-flex>
      <!-- Seccion del calendario -->
      <v-spacer></v-spacer>
      <v-flex xs12 md6>
        <v-sheet height="390">
          <v-card>
            <v-date-picker 
              v-model="activitie.date"
              full-width
              locale="es"
              :min="min"
            ></v-date-picker>
          </v-card>
        </v-sheet>
      </v-flex>
    </v-layout>
    <!-- Seccion de la tabla -->
<v-spacer></v-spacer>
<br>
 <table >
	<thead>
	<tr>
		<th>Nombre</th>
		<th>Precio</th>
		<th>Descripcion</th>
    <th>Fecha</th>
    <th>Activo</th>
    <th>Borrar</th>
    <th>Actualizar</th>
	</tr>
	</thead>
	<tbody>
	<tr v-for="item of activities" :key="item.id" >
		<td>{{item.name}}</td>
		<td>₡ {{item.price}}</td>
		<td>{{item.description}}</td>
		<td>{{item.date.substr(0,10)}}</td>
		<td>{{item._id}}</td>
		<td @click="DELETE_Activitie(item._id)"><v-icon small color="error" class="icons">delete</v-icon></td>
		<td @click="UPDATE_Activitie(item._id)"><v-icon small color="warning" class="icons">create</v-icon></td>
	</tr>
	</tbody>
</table>
    <!-- Seccion de la tabla -->
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
class Activitie {
  constructor(name, price, description, date) {
    (this.name = name), (this.price = price), (this.description = description), (this.date = date);
  }
}

export default {
  data() {
    return {
      // date: '',
      min: new Date().toISOString().substr(0, 10),
      valid: true,
      activitie: new Activitie(),
      activities: [],
      edit: false,
      actEdit: '', 
      nameRules: [
        v => !!v || "Por favor ingrese un nombre para actividad",
        v => (v && v.length >= 5) || "El nombre de la actividad es muy corto",
        v => (v && v.length <= 30) || "El nombre de la actividad es muy grande"
      ],
      priceRules: [
        v => !!v || "Por favor ingrese un precio",
        v => /^\d+$/.test(v) || "Solo se admiten números positivos"
      ],
      descriptionRules: [
        v => !!v || "Por favor ingrese una descripción",
        v =>
          (v && v.length >= 10) ||
          "La descripción de la actividad es muy pequeña",
        v =>
          (v && v.length <= 200) ||
          "La descripción de la actividad es muy grande"
      ],
    };
  },
  methods: {
   // ...mapActions(['GET_Activitie', "DELETE_Activitie"]),
    GET_Activitie(){
      fetch('http://localhost:3000/activities')
      .then(res => res.json())
      .then(data => {
        this.activities = data
        console.log(data)
      })
    },
    POST_Activitie() {
      if(this.edit === false){
        fetch("http://localhost:3000/activities", {
          method: "POST",
          body: JSON.stringify(this.activitie),
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
          }
        })
        .then(res => res.json())
        .then(data => {
          this.GET_Activitie()
        })
      } else {
        fetch(`http://localhost:3000/activities/${this.actEdit}`, {
          method: "PUT", 
          body: JSON.stringify(this.activitie),
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
          }
        })
        .then(res => res.json())
        .then(data =>{
          this.GET_Activitie()
          this.edit = false
        })
      }

      this.$refs.form.reset();
    },
    DELETE_Activitie(id){
      fetch(`http://localhost:3000/activities/${id}`, {
        method: 'DELETE', 
         headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        }
      })
      .then(res => res.json())
      .then(data => {
        this.GET_Activitie()
      })
    },
    UPDATE_Activitie(id){
      console.log(id)
      fetch(`http://localhost:3000/activities/${id}`)
        .then(res => res.json())
        .then(data => { 
          this.activitie = new Activitie(data.name, data.price, data.description)
          this.actEdit = data._id
          this.edit = true
        })
    },
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
      }
    },
    reset() {
      this.$refs.form.reset();
    }
  },
  //  computed: mapGetters(['allActivities']),
    created(){
    this.GET_Activitie()

 } 
};
</script>

<style scoped>

table { 
  width: 100%; 
  border-collapse: collapse; 
}
tr:nth-of-type(odd) { 
  background: #eee; 
  
}
th { 
  background: #333; 
  color: white; 
  font-weight: bold; 
  
}
td, th { 
  padding: 6px; 
  border: 1px solid #ccc; 
  text-align: left; 
}
.icons{
  cursor: pointer;
  
}

</style>