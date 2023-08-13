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
            <tbody class="body" v-if="usercalculation" v-for="element in usercalculation">
                <div class="verify" v-if="element.e_mail == userConnectData">
                    <tr class="body__content">
                        <td>{{ element.date }}</td>
                        <td>{{ element.hours }}</td>
                        <td>{{ element.calculation }}</td>
                    </tr>
                </div>
            </tbody>
            
        </table>
    </div>
</template>

<script lang="ts" setup>


import type { Calculation } from '@/Types/calculation'
import { userOpeationStore } from '@/stores/operation'
import { onMounted, ref } from 'vue'
import { storeToRefs } from 'pinia'
const { initialise } = userOpeationStore()
import { userConnectionStore } from '@/stores/connection'
const { usercalculation } = storeToRefs(userOpeationStore())
const { userConnectData,} = storeToRefs(userConnectionStore())
console.log(usercalculation.value); 

onMounted(async () => {
    await initialise()
})

/* const verifycation = usercalculation.value.filter(item =>(item.e_mail == userConnectData.value))
console.log(userConnectData.value);  */ 

</script>

<style scoped>
table {
    width: 100%;  
    border: 1px solid var(--base-color);
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

.body td{
    width: 100%;
    display: flex;
    padding: 8px;
    justify-content: center;
    letter-spacing: 2px;
    gap: 2px;
    background-color: var(--color-gray-tertiary);
    color: var(--base-color);
    font-weight: bold;
}


</style>