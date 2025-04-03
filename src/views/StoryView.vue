<template>
  <div class="info-lfcc-container">
    <p class="info-lfcc">
      Per volontà di alcuni genitori e pazienti calabresi nel <em>2019</em> nasce
      <em>l'Associazione Fibrosi Cistica Calabria</em> che aderisce alla
      <em>Lega Italiana Fibrosi Cistica</em>, l'unica associazione a carattere nazionale che opera in favore dei pazienti con FC e dei loro familiari.
    </p>
    <p>
      Inizia così un <em>lavoro costante</em> per migliorare la loro <em>qualità della vita</em>,
      della <em>qualità delle cure</em> e la <em>difesa sociale</em> con l'attivazione di un apposito
      Patronato. Da una precaria e inidonea struttura ospedaliera a Soverato, si passa a quella
      moderna e ben strutturata dell'Ospedale di Lamezia Terme dove otteniamo un
      <em>intero reparto dedicato alla cura della fibrosi cistica</em>.
    </p>
    <p>
      La Lega Italiana Fibrosi Cistica, raccoglie così il frutto di un costante lavoro dedicato al raggiungimento
      di questo importante obiettivo. <em>Quattro stanze di degenza</em> con letto per
      l'accompagnatore e bagno privato e prestanza dedicata alla sterilizzazione.
      <em>Due ambulatori</em>
      medici, <em>una palestra</em> e quanto necessario per il massimo confort del paziente. Otteniamo
      di conseguenza medici e paramedici non più precari ma destinati al reparto FC a tempo
      indeterminato. Dai 50 pazienti di Soverato, si passa ad assistere <em>oltre 150 pazienti</em>
      che rientrano in Calabria dagli altri CRR presso cui si curavano.
    </p>
    <p>
      La <em>dottoressa Mimma Caloiero</em> assume la responsabilità del Reparto e ben presto
      organizza un gruppo di lavoro formato da
      <em>due medici, due fisioterapisti, una psicologa, 7 infermieri e una OSS</em>. Un gruppo di
      seri professionisti sempre a disposizione dei pazienti calabresi.
    </p>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'InfoLfccComponent',
  }
</script>

<style lang="scss" scoped>
  .info-lfcc-container {
    min-height: calc(100vh - var(--footer-height, 20.05em));
  }
  p {
    font-family: Nunito;
    margin-top: 2em;
    margin-left: 2em;
    margin-right: 50%;
  }
  em {
    color: #016bb7;
  }
  @media (max-width: 768px) {
    .info-lfcc-container  {
      min-height: calc(100vh - var(--footer-height, 21.8vh));
    }
  }
</style>
