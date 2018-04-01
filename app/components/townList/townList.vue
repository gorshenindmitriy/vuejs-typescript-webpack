<template>
    <div class="list-group" v-model="selected" style="width: 400px" id="townList">
        <a v-for="item in options" :id="item.name+'_'+item.id" :townName="item.name" v-model="options" :href="'/details.html?town='+item.name" class="list-group-item" v-on:click="onClick(item.name+'_'+item.id)">
            {{item.caption}}
        </a>
    </div>
   <!-- <ul class="list-group" v-model="selected">
        <li v-for="item in options" class="list-group-item" :id="item.name+'_'+item.id" :townName="item.name" v-model="options">{{item.caption}}</li>
    </ul>-->
</template>
<script lang="ts" src="./townList.ts"></script>
<style lang="css" src="./townList.css"></style>