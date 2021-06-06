<template>
    <div class="item-component mx-auto p-2 my-4">
        <h2>{{name}}</h2>
        <button @click="$emit('more')" class="btn btn-success">{{counter}}</button>
    </div>
</template>

<script src="../scripts/Son.js"></script>