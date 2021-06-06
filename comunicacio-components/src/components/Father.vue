<template>
    <div class="bg-secondary">
        <br>
        <h3 class="text-white">Component Pare</h3>
        <div class="container">
            <Son class="col-3 bg-white border border-success" v-for="item in itemSon" v-bind:key="item.id" :name="item.name" @more="item.counter++" :counter="item.counter"></Son>
        </div>
    </div>
</template>

<script src="../scripts/Father.js"></script>