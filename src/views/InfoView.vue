<template>
    <div class="container">
      <h2 id="la-fibrosi-cistica">Cos'è la Fibrosi Cistica</h2>
      <div>
        <p class="intro">
          La <em>fibrosi cistica</em> è la <em>malattia genetica grave più diffusa</em>. <br />
          È una <em>patologia multiorgano</em>, che colpisce soprattutto <em>l’apparato respiratorio</em> e
          quello <em>digerente</em>. È dovuta ad un gene alterato, cioè mutato, chiamato <em>gene CFTR</em>
          (Cystic Fibrosis Transmembrane Regulator), che determina la produzione di <em>muco eccessivamente
          denso</em>. Questo muco chiude i bronchi e porta a infezioni respiratorie ripetute, ostruisce
          il pancreas e impedisce che gli enzimi pancreatici raggiungano l’intestino, di conseguenza
          i cibi non possono essere digeriti e assimilati.
        </p>
      </div>
      <ul>
        <li><em>difficoltà nella digestione</em> dei grassi, proteine, amidi</li>
        <li><em>carenza di vitamine</em> liposolubili</li>
        <li>perdita progressiva della <em>funzione polmonare</em></li>
      </ul>
      <p>
        La malattia non danneggia in alcun modo le capacità intellettive e non si manifesta
        sull’aspetto fisico né alla nascita né in seguito nel corso della vita, per questo viene definita
        la “malattia invisibile”.
      </p>

      <div class="box" v-for="(section, index) in sections" :key="index">
        <h3 :id="section.id">{{ section.title }}</h3>
        <p v-html="section.content"></p>
      </div>

      <p class="credits">
        Contenuti realizzati a cura della Prof.ssa Serena Quattrucci, Consulente Scientifico LIFC, ultimo aggiornamento Settembre 2017.
      </p>
    </div>
  </template>

  <script lang="ts">
  export default {
    data() {
      return {
        sections: [
          {
            id: "diffusione",
            title: "Diffusione della malattia",
            content: `Si stima che ogni 2.500-3.000 dei bambini nati in Italia, 1 è affetto da fibrosi cistica
              (circa 200 nuovi casi all’anno).<br/>
              La malattia colpisce indifferentemente maschi e femmine.
              Oggi quasi 6.000 bambini, adolescenti e adulti affetti da FC vengono curati nei
              <a href="https://www.fibrosicistica.it/lifc/centri-cura-associazioni-regionali/">Centri Specializzati in Italia</a>.`
          },
          {
            id: "cause",
            title: "Cause della Fibrosi Cistica",
            content: `La malattia si manifesta quando un bambino eredita due copie alterate, cioè mutate, del <em>gene
            CFTR</em>, una da ciascun genitore. Il gene CFTR codifica la sintesi della proteina CFTR, che se
            ben funzionante, regola il movimento del cloro, al quale segue il movimento dell’acqua.`
          },
          {
            id: "sintomi",
            title: "I sintomi della fibrosi cistica",
            content: `<ul>
              <li><em>Tosse persistente</em> dapprima stizzosa poi catarrale</li>
              <li><em>Respiro sibilante e affanno</em></li>
              <li><em>Infezioni bronchiali e polmonari</em> frequenti</li>
            </ul>`
          },
          {
            id: "cura",
            title: "Esiste una cura per la fibrosi cistica?",
            content: `<em>La terapia</em> di questa malattia ha avuto negli ultimi anni un <em>notevole sviluppo</em>.`
          }
        ]
      };
    }
  };
  </script>

  <style scoped>
  .spot {
    z-index: -1;
  }
  p {
    margin: 2em 2em;
  }
  h2 {
    margin: 1.2em;
  }
  h3 {
    margin: 1.55em;
  }
  h2, h3 {
    color: #fff;
    background-color: #016bb7;
    padding: 10px;
    border-radius: 6px;
    width: fit-content;
  }
  ul {
    padding-left: 2.8em;
  }
  a {
    text-decoration: none;
  }
  a:link {
    color: #e47129;
  }
  a:visited {
    color: #e43c29;
  }
  p.credits {
    text-align: end;
    font-style: italic;
    font-size: small;
  }
  div.box {
    border: 4px solid #016bb7;
    border-radius: 40px;
    margin-bottom: 2em;
    margin-left: 1em;
    margin-right: 1em;
  }
  em {
    color: #016bb7;
  }
  @media (max-width: 768px) {
    .container  {
      height: calc(100vh - var(--footer-height, 21.6vh));
    }
  }
  </style>
