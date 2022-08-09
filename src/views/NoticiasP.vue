<template>
  <ion-content class="fondop2">
    <div class="main_content_div2">

      <ion-buttons slot="start" class="menu_btn">
        <ion-menu-button color="light"></ion-menu-button>
      </ion-buttons>


      <div class="logo_div">
        <div class="primer_div">
           <ion-label data-text="Noticias Policiales" class="titulo">Noticias Policiales</ion-label>
          
        </div>


        

        <div class="logo_back">

        </div>
      </div>
      <div class="content_div">


        <ion-card class="card">
  <ion-card-header class="card-header">
    <img class="img" src="https://contactohoy.com.mx/wp-content/uploads/2022/07/Cruz-Roja-15-1024x576.jpeg" alt="">
    <ion-card-subtitle>Noticias Policiales</ion-card-subtitle>
    <ion-card-title>Hallan Muerto a Profesor</ion-card-title>
  </ion-card-header>
  <ion-card-content class="card-content">
    Un maestro de educación física fue encontrado muerto durante la madrugada de este 
    lunes en la calle Ocampo, en el barrio de Tierra Blanca; tenía una lesión de arma
    de fuego en la cabeza.
  </ion-card-content>
   <ion-button class="button_n">Leer más...</ion-button>
</ion-card>


      </div>

    </div>
 </ion-content>
</template>
<script>
import { 
  IonContent,
  IonButtons,
  IonLabel

 } from '@ionic/vue';
 import {defineComponent} from "vue";

export default defineComponent({
  name: "NoticiasPPage",
  components: {
  IonContent,
  IonButtons,
  IonLabel
  }

});

  
</script>


