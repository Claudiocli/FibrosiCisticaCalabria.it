<template>
    <div class="container">
      <router-link to="/" class="logo-link"><img class="logo" src="/images/logo_FC_no_bg.png" alt="logo Lega Fibrosi Cistica Calabria"></router-link>
      <div class="navbar borderXwidth">
        <router-link to="/">Home</router-link>
        <router-link to="/storia">Storia</router-link>
        <router-link to="/fibrosicistica">La Fibrosi Cistica</router-link>
        <router-link to="/direttivo">Il Direttivo</router-link>
        <router-link to="/crrc">CRR Calabria</router-link>
      </div>
      <span class="donation">
        <router-link to="/donation"><i class="fa-regular fa-heart fa-sm"></i> Donazioni</router-link>
      </span>
    </div>
  </template>

  <script lang="ts">
  export default {
    name: 'NavbarItem'
  }
  </script>

  <style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css2?family=Nunito');

  .logo {
    max-height: 5em;
    left: 2em;
    position: relative;
  }
  .container {
    background: #016bb7;
    padding: 2em 0;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: row;
    position: sticky;
    z-index: 1;
    top: 0;
    left: 0;
    max-height: 10em;
  }

  .navbar {
    flex-grow: 1;
    display: flex;
    flex-flow: row;
    justify-content: center;
  }

  .container a {
    color: #fff;
    text-decoration: none;
    font: 20px Nunito;
    margin: 0px 10px;
    padding: 10px 10px;
    position: relative;
    z-index: 0;
    cursor: pointer;
  }

  .donation {
    position: relative;
    right: 2em;
    border: 3.2px solid #e47129;
    background-color: #e47129;
    border-radius: 6px;
    padding: .3em;
  }
  .donation > a {
    align-items: center;
    gap: .2em;
    color: #fff;
    text-decoration: none;
  }
  .donation:hover {
    background-color: #fff;
    border-color: #fff;
  }
  .donation:hover > a {
    color: #e47129;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    .container {
      display: flex;
      flex-direction: row;
      padding: 4em 1em;
      position: relative;
      > a {
        padding: 0;
      }
    }
    .navbar {
      display: flex;
      flex-direction: column;
      > a {
        width: fit-content;
      }
    }
    .logo {
      max-height: 15em;
      width: 100vw;
      position: relative;
      opacity: .65;
      z-index: -1;
      left: 0;
      top: -3vh;
    }
    .logo-link {
      max-height: 10em;
      position: absolute !important;
      pointer-events: none;
    }
  }

  .borderXwidth a:before,
  .borderXwidth a:after {
    position: absolute;
    opacity: 0;
    width: 0%;
    height: 2px;
    content: '';
    background: #FFF;
    transition: all 0.3s;
  }

  .borderXwidth a:before {
    left: 0px;
    top: 0px;
  }

  .borderXwidth a:after {
    right: 0px;
    bottom: 0px;
  }

  .borderXwidth a:hover:before,
  .borderXwidth a:hover:after {
    opacity: 1;
    width: 100%;
  }
  </style>
