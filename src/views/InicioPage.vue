<template>
  <ion-content class="fondoinicio">
    <div class="main_content_div">

      <ion-buttons slot="start" class="menu_btn">
        <ion-menu-button color="light"></ion-menu-button>
      </ion-buttons>


      <div class="user_div">
        <div class="primer_div">
           <ion-label data-text="Informate Ahora" class="titulo">Informate Ahora</ion-label>
          
        </div>


        

        <div class="logo_back">

        </div>
      </div>
      <div class="content_div">
        <ion-label class="hola_lbl">Las Mejores Noticias a tu Alcance</ion-label>
        <ion-grid fixed>
          <ion-row>
            <ion-col size="6" v-for="opc in lista" :key="opc.id">
              <div class="col_div">
                <img :src="opc.imagen">
                <ion-label class="categoria_text"><a :href="opc.ruta" class="ruta_text">{{opc.categoria}}</a></ion-label>
                
                
              </div>
            </ion-col>
          </ion-row>
        </ion-grid>
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
  name: "InicioPage",
  components: {
  IonContent,
  IonButtons,
  IonLabel
  },

  data(){
    return{
      lista: [
        {
          id: 1,
          imagen:"https://www.sopitas.com/wp-content/uploads/2022/01/polisia-policia-san-luis-nuevas-patrullas-por-que-fotos-ortografia-potosi-02.jpeg",
          categoria: "Noticias Policiales",
          ruta: '/noticiaspoliciales'
        },

        {
          id: 2,
          imagen:"https://www.oas.org/ext/Portals/14/EasyDNNNews/2270/images/Image-300-300-p-L-97.jpg",
          categoria:"Noticias Culturales"
        },

         {
          id: 3,
          imagen:"https://www.zonamovilidad.es/fotos/2/Deportesvarios.jpg",
          categoria: "Noticias Deportivas",
          ruta: '/noticiasdeportivas'
          
        },

        {
          id: 4,
          imagen:"https://partidodeltrabajo.org.mx/2017/wp-content/uploads/2019/06/democracia.jpg",
          categoria: "Noticias Políticas"
        },

        {
          id: 5,
          imagen:"https://dospuntosrevista.com/wp-content/uploads/2020/02/Cientifica-mexicana.jpg",
          categoria: "Noticias Científicas"
        },

        {
          id: 6,
          imagen:"https://media.realinstitutoelcano.org/wp-content/uploads/2021/11/banderas-reinounido-eeuu-luxemburgo-alemania-1.jpg",
          categoria: "Noticias Extranjeras"
        }
      ]
    }
  }
});
</script>


