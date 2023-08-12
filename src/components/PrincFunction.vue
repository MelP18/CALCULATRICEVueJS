/*=============================++++ HTML ++++=================================*/
<template>
    <div class="bottom__left__bottom">
        <div class="calcultion__fonction" v-for="element in functionValue">
            <button @click="showfunct(element)" :style="{'background-color':element.color}">{{ element.function }}</button>
        </div>
    </div>
</template>


<script setup lang="ts">
import {ref} from 'vue'
import type {FunctionValue} from '@/Types/functionValue'
const emits = defineEmits(['seefunction'])
const functions = ref([
    {
        function:'a²',
        color:'#eaeaeaee'
    },
    {
        function:'ab',
        color:'#eaeaeaee'
    },
    {
        function:'|a|',
        color:'#eaeaeaee'
    },
    {
        function:'√',
        color:'#eaeaeaee'
    },
    {
        function:'n√',
        color:'#eaeaeaee'
    },
    {
        function:'π',
        color:'#eaeaeaee'
    },
    {
        function:'sin',
        color:'#eaeaeaee'
    },
    {
        function:'cos',
        color:'#eaeaeaee'
    },
    {
        function:'tan',
        color:'#eaeaeaee'
    },
        {
        function:'(',
        color:'#eaeaeaee'
    },
    {
        function:')',
        color:'#eaeaeaee'
    },
    {
        function:',',
        color:'#eaeaeaee'
    } 
])
const functionValue = functions.value
console.log(functionValue);

function showfunct(element:FunctionValue){
  emits('seefunction',element.functionval)
  console.log(element.functionval);
}
</script>
/*=============================++++ CSS ++++=================================*/
<style scoped>
.bottom__left__bottom {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 5px;
}
.calcultion__fonction button {
    cursor: pointer;
    width: 100%;
    padding: 6px;
    border: 2px solid var(--background-button);
    border-radius: var(--border-radius-primary);
}
.calcultion__fonction button:hover {
    background-color: var(--background-button-hover);
    border: 2px solid var(--background-button-hover);
}

sup {
    font-size: 8px;
}</style>