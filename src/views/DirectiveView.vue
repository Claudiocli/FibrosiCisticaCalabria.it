<template>
    <div class="container">
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
          {name: 'Rotella Michele', role: 'Presidente', image: '/images/Michele Rotella.jpg', description: ''},
          {name: 'Montesano Domenico', role: 'Vice Presidente', image: '/images/Domenico Montesano.jpg', description: ''},
          {name: 'Boragina Francesco', role: 'Segretario', image: '/images/Boragina Francesco.jpg', description: ''},
          {name: 'Bokach Volha', role: 'Tesoriere', image: '/images/Volha Bokach.jpg', description: ''},
          {name: 'Scarlata Alfredo', role: 'Delegato Regionale al Direttivo Nazionale LIFC', image: '/images/Alfredo Scarlata.jpg', description: ''},
          {name: 'Anfosso Francesco', role: 'Responsabile Area Raccolta Fondi e Pubblicità', image: '/images/Francesco Anfosso.jpg', description: ''},
          {name: 'Paone Angela', role: 'Responsabile Area Divulgazione Conoscenza FC', image: '/images/AngelaPaone.jpg', description: ''},
          {name: 'Aiello Sergio', role: 'Consigliere', image: '/images/Sergio Aiello.jpg', description: ''},
          {name: 'Sacco Maria Antonietta', role: 'Consigliere', image: '/images/Maria Antonietta Sacco.jpg', description: ''},
          {name: 'Sgrò Demetrio', role: 'Consigliere', image: '/images/Demetrio Sgrò.jpg', description: ''},
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
