<template>
    <div class="block">
        <div class="user__main__title">
            <h1>HISTORIQUE</h1>
            <hr>
        </div>
        <table>
            <thead>
                <tr class="head">
                    <td> Day </td>
                    <td> Hours </td>
                    <td> Calculation </td>
                    
                </tr>
            </thead>
            <tbody class="body" v-for="element in usercalculation">
                <tr class="body__content">
                    <td>{{ element.date }}</td>
                    <td>{{ element.hours }}</td>
                    <td>{{ element.calculation }}</td>
                </tr>
            </tbody>
            
        </table>
    </div>
</template>

<script lang="ts" setup>


import type { Calculation } from '@/Types/calculation'
import { userOpeationStore } from '@/stores/operation'
/* import { supabase } from "@/lib/users"; */
import { onMounted, ref } from 'vue'
import { storeToRefs } from 'pinia'
const { initialise } = userOpeationStore()
const { usercalculation } = storeToRefs(userOpeationStore())

onMounted(async () => {
    await initialise()
})

</script>

<style scoped>
table {
    width: 100%;  
}
thead{
    width: 100%;
}
tbody{
    width: 100%;
}
.head{
    width: 100%;
    display: flex;
    gap: 2px;
    text-align: center;
}
.head td{
    width: 100%;
    padding: 10px 0;
    text-align: center;
    background-color: var(--base-color);
    color: var(--color-white);
    font-size: 18px;
    font-weight: bold;
}
.body__content{
    width: 100%;
    display: flex;
    gap: 2px;
    
}
.body:nth-child(even) td{
    width: 100%;
    display: flex;
    padding: 8px;
    justify-content: center;
    gap: 2px;
    background-color:var(--color-gray-primary);
    color: var(--color-white);
    font-weight: bold;
}
.body td{
    width: 100%;
    display: flex;
    padding: 8px;
    justify-content: center;
    gap: 2px;
    background-color: var(--secondary-color);
    color: var(--color-white);
     font-weight: bold;
}


</style>