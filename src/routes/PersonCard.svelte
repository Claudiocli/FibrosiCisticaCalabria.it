<script lang="ts">
    export let name: string;
    export let role: string;
    export let image: string;
    export let description: string;
    export let index: number;
</script>
  
<div class="box {index % 2 === 0 ? 'left' : 'right'}">
    <img src={image} alt={name} class="profile-img" />
    <div class="info">
        <h3>{name}</h3>
        <em>{role}</em>
        <p>{description}</p>
    </div>
</div>
  
<style>
    .box {
      border: 4px solid #016bb7;
      border-radius: 40px;
      max-width: 40%;
      margin: 2em;
      display: flex;
      align-items: center;
      gap: 16px;
      padding: 1em;
    }
    .left {
      animation: slideinl 1s;
    }
    .right {
      position: relative;
      left: calc(55% - 0.5em);
      animation: slideinr 1s;
    }
    .profile-img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      object-fit: cover;
      margin: 2em;
    }
    .info {
      max-width: 60%;
    }
    h3 {
      font-size: 1.6em;
    }
    em {
      font-size: 1.2em;
      font-weight: 700;
    }
    @keyframes slideinl {
      from {
        margin-left: -100vw;
      }
      to {
        margin-left: 0;
      }
    }
    @keyframes slideinr {
      from {
        margin-left: 100vw;
      }
      to {
        margin-left: 0;
      }
    }
</style>