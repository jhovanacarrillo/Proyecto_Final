<template>
  <ion-page>
    
    
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Blank</ion-title>
        </ion-toolbar>
      </ion-header>
    
      <div class="principal-container">
        <div class="title">
        <ion-title class="container-title">EL TIEMPO DE </ion-title>
        </div>
        <ion-img class="container-img" src="https://i.pinimg.com/564x/fa/e2/19/fae219ff0e8f67ff58be362da33859c7.jpg"> </ion-img>
        <ion-title class="container-title2"> LA INFORMACIÓN</ion-title>
        <div class="button">
        <ion-button @click="Comenzar()" shape="round" color="danger">Comenzar...</ion-button>
         
</div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomePage',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButton
  },

  methods: {
  Comenzar(){
    this.$router.push('/inicio')
  }
}

});


</script>

<style scoped>
#container {
  text-align: center;
  
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  
  color: #8c8c8c;
  
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
