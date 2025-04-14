<template>
    <div class="container">
      <h2>Aiutaci a sostenere i pazienti e a combattere la Fibrosi Cistica</h2>
      <p>
        Con il tuo aiuto potrai contribuire concretamente a migliorare la qualità della vita e delle cure
        delle persone affette da fibrosi cistica, sostenendo i nostri progetti su tutto il territorio
        nazionale. Ti ricordiamo inoltre che la tua donazione è detraibile, ti basterà conservare la
        ricevuta del versamento ed allegarla alla tua dichiarazione dei redditi.
      </p>
      <h3 style="margin-top: 1em;">Scegli una delle modalità di donazione</h3>
      <h4>Tramite Paypal o con Carta di Credito</h4>

      <h4>Tramite Bonifico bancario</h4>
      <div class="bonifici-container">
        <div class="bonifici">
          <p title="copy Iban BCC del Catanzarese to clipboard" class="copyable" @click="copy('BCCC')">
            <em>BCC del Catanzarese</em>
            <br />
            Iban: {{ BCCC }}
            <span v-if="copied.BCCC" class="tooltip">Copied!</span>
          </p>
          <p title="copy Iban Poste Italiane to clipboard" class="copyable" @click="copy('PI')">
            <em>Poste Italiane</em>
            <br />
            Iban: {{ PI }}
            <span v-if="copied.PI" class="tooltip">Copied!</span>
          </p>
        </div>
        <div class="cpm">
          <img title="copy CF to clipboard" src="/images/5x1000.jpg" alt="Info sul 5 per 1000" class="copyable" @click="copy('CF')">
          <span v-if="copied.CF" class="tooltip cf-tooltip">Copied!</span>
        </div>
      </div>
    </div>
  </template>

  <script lang="ts">
  export default {
    data() {
      return {
        PI: 'IT27G0760104400000006693688',
        BCCC: 'IT88C0709104400000000154967',
        CF: '97060860794',
        copied: {
          PI: false,
          BCCC: false,
          CF: false
        }
      };
    },
    methods: {
      copy(type: 'PI'|'BCCC'|'CF') {
        navigator.clipboard.writeText(this[type]);
        this.copied[type] = true;
        setTimeout(() => this.copied[type] = false, 1500);
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
  h2, h3, h4, p {
    margin-left: 1em;
  }
  .bonifici > p {
    cursor: pointer;
  }
  .bonifici-container {
    display: flex;
    flex-direction: row;
    gap: 40%;
  }
  .cpm  {
    flex: 1;
    max-width: 40%;
    position: relative;
    top: -12vh;
    right: 16vw;
  }
  .copyable {
    position: relative;
    display: inline-block;
    cursor: pointer;
  }
  .tooltip {
    position: absolute;
    top: -1.5em;
    left: 8em;
    background: #016bb7;
    color: white;
    padding: 0.2em 0.5em;
    font-size: 0.8em;
    border-radius: 4px;
    white-space: nowrap;
    animation: fade 1.5s ease-in-out;
  }
  .cf-tooltip {
    position: absolute;
    top: -2em;
    left: 70% !important;
    transform: translateX(-50%);
  }
  @keyframes fade {
    0% { opacity: 0; transform: translateY(-10px); }
    10% { opacity: 1; transform: translateY(0); }
    90% { opacity: 1; }
    100% { opacity: 0; transform: translateY(-10px); }
  }
  @media (max-width: 768px) {
    .container  {
      min-height: calc(100vh - var(--footer-height, 21.2vh));
    }
    .bonifici-container {
      flex-direction: column;
    }
    .bonifici {
      display: flex;
      justify-content: space-evenly;
    }
    .cpm  {
      top: revert;
      right: revert;
      align-self: center;
      max-width: revert;
      > img {
        max-width: 80vw;
      }
    }
  }
  </style>
