<template>
    <div :class="['box', index % 2 === 0 ? 'left' : 'right']">
        <img :src="image" :alt="name" class="profile-img" />
        <div class="info">
            <h3>{{ name }}</h3>
            <em>{{ role }}</em>
            <p>{{ description }}</p>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        name: {
            type: String,
            required: true
        },
        role: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        index: {
            type: Number,
            required: true
        }
    }
});
</script>

<style scoped>
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