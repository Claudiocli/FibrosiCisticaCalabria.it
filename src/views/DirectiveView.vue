<template>
    <div class="container">
      <h2 style="margin-left: 1.2em;">Nuove cariche</h2>
      <p>
        Eletto nel corso dell'Assemblea Generale dei Soci Lifc Calabria, il nuovo Direttivo Regionale si riunira' in data 28 marzo 2025 per designare le nuove cariche istituzionali che saranno attive sino al prossimo 2028.
      </p>
      <br/>
      <div class="people-list">
        <PersonCard
          v-for="(person, index) in direttivo"
          :key="index"
          v-bind="person"
          :index="index"
        />
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import PersonCard from "../components/PersonCard.vue";
  
  export default {
    components: {
      PersonCard
    },
    data() {
      return {
        direttivo: [
          {name: 'Aiello Sergio', role: '', image: '/images/Sergio Aiello.jpg', description: ''},
          {name: 'Anfosso Francesco', role: '', image: '/images/Francesco Anfosso.jpg', description: ''},
          {name: 'Bokach Volha', role: '', image: '/images/Volha Bokach.jpg', description: ''},
          {name: 'Boragina Francesco', role: '', image: '/images/Boragina Francesco.jpg', description: ''},
          {name: 'Montesano Domenico', role: '', image: '/images/Domenico Montesano.jpg', description: ''},
          {name: 'Paone Angela', role: '', image: '/images/AngelaPaone.jpg', description: ''},
          {name: 'Rotella Michele', role: '', image: '/images/Michele Rotella.jpg', description: ''},
          {name: 'Sacco Maria Antonietta', role: '', image: '/images/Maria Antonietta Sacco.jpg', description: ''},
          {name: 'Scarlata Alfredo', role: '', image: '/images/Alfredo Scarlata.jpg', description: ''},
          {name: 'Sgrò Demetrio', role: '', image: '/images/Demetrio Sgrò.jpg', description: ''},
        ]
      };
    }
  }
  </script>
  
  <style scoped lang="scss">
  .container {
    min-height: calc(100vh - var(--footer-height, 29.2vh));
    font-size: larger;
    > p {
      text-align: center;
    }
  }
  </style>