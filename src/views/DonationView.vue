<template>
    <div class="container">
      <h2>Aiutaci a sostenere i pazienti e a combattere la Fibrosi Cistica</h2>
      <p>
        Con il tuo aiuto potrai contribuire concretamente a migliorare la qualità della vita e delle cure
        delle persone affette da fibrosi cistica, sostenendo i nostri progetti su tutto il territorio
        nazionale. Ti ricordiamo inoltre che la tua donazione è detraibile, ti basterà conservare la
        ricevuta del versamento ed allegarla alla tua dichiarazione dei redditi.
      </p>
      <h3>Scegli una delle modalità di donazione</h3>
      <h4>Tramite Paypal o con Carta di Credito</h4>

      <h4>Tramite Bonifico bancario</h4>
      <div class="bonifici">
        <p title="copy Iban BCC del Catanzarese to clipboard" @click="copy(BCCC)">
          <em>BCC del Catanzarese</em>
          <br />
          Iban: {{ BCCC }}
        </p>
        <p title="copy Iban Poste Italiane to clipboard" @click="copy(PI)">
          <em>Poste Italiane</em>
          <br />
          Iban: {{ PI }}
        </p>
      </div>
    </div>
  </template>

  <script lang="ts">
  export default {
    data() {
      return {
        PI: 'IT27G0760104400000006693688',
        BCCC: 'IT88C0709104400000000154967',
      };
    },
    methods: {
      copy(iban: string) {
        navigator.clipboard.writeText(iban);
      }
    }
  };
  </script>

  <style lang="scss" scoped>
  .container {
    min-height: calc(100vh - var(--footer-height, 19.3em));
  }
  h2, h3, h4, em {
    color: #016bb7;
  }
  .bonifici > p {
    cursor: pointer;
  }
  @media (max-width: 768px) {
    .container  {
      min-height: calc(100vh - var(--footer-height, 21.2vh));
    }
  }
  </style>
