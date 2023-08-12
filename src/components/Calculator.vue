/*=============================++++ HTML ++++=================================*/
<template>
    <div class="main__content">
        <div class="calculator">
            <div class="calculator__content">
                <div class="calculator__top">
                    <div class="calculation__head">
                        <div class="calculator__name">
                            <h2>CalMelp</h2>
                            <p>Toute fonction</p>
                        </div>
                        <div class="day__info">
                            <ul class="day__info__list">
                                <li class="day__info__list__item">
                                    <span class="mdi mdi-calendar-month-outline"></span>
                                    <p v-text="dayDate"></p>
                                </li>
                                <li class="day__info__list__item">
                                    <span class="mdi mdi-hours-24"></span>
                                    <p v-text="DayTime"></p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="calculation__result">
                        <p> {{ calculation }}</p>
                        <p> {{ calculate }} </p>
                    </div>
                </div>
                <div class="calculator__bottom">
                    <!-- <Function/>  -->
                    <SimpleCalculation @show="see" />
                    <BtnOther @delete="clear"/>
                </div>
            </div>
        </div>
    </div>
</template>



/*=============================++++ JS ++++=================================*/
<script lang="ts" setup>
import base from '@/assets/base.css'
import Function from '@/components/Function.vue'
import SimpleCalculation from '@/components/SimpleCalculation.vue'
import BtnOther from '@/components/BtnOther.vue'
import { userOpeationStore } from '@/stores/operation'
const { addCalculation } = userOpeationStore()
import { ref } from 'vue'

/*========================= CALCULATION AND PUSH IN SUPABASE =========================*/
let calculation = ''
let calculate = ''
let result = ''
function see(element) {
    if (element !== "=") {
        calculation += element
        calculate = eval(calculation)
    }
    else {
        calculate = eval(calculation)
        result = calculation + '=' +  calculate
        calculation = ''
        console.log(result);
        const dataCalculation = {
            date: dayDate,
            hours:DayTime.value,
            calculation: result
        }
        addCalculation(dataCalculation)
        console.log(dataCalculation);
        
    }
    return {result }
}
function clear(){
    calculate = ''
    calculation = ''
}
/*========================= DAY =========================*/
let dayDate = ''
function date() {
    let date = new Date()
    let newDate = date.toLocaleString('fr-Fr', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
    })
    dayDate = newDate
}
const DayDate = date()

/*========================= HOURS =========================*/
let DayTime = ref('')

async function time() {
    let date = new Date()
    let time = date.toLocaleString('fr-Fr', {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    })
    DayTime.value = time
}
const TimeR = time()
setInterval(time, 1)
/* Mth.sqrt():racine carré
/*Math.floor(): entier d'un nombre decimal
Math.ceil():arrondi qlqe soir le nombre apès la virgule
Math.round():arrondi normalement
Math.pow: le carr"
Remainder(%) :modulo
Math.abs: valur absolu
Math.PI : pi,
Math.log : ln
Math.log10 : log
Math.exp : E

*/

</script>

/*=============================++++ CSS ++++=================================*/
<style scoped>
.main__content {
    z-index: -1;
}
.calculator {
    padding: 5px 0 15px;
    border-radius: var(--border-radius-base);
    background-color: var(--background-button-number);
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5),
    inset 2px 2px 3px rgba(255, 255, 255, 0.25),
    inset -3px -3px 5px rgba(0, 0, 0, 0.5);
}

.calculator__content {
    padding: 15px;
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.calculator__top {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
}

.calculation__head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px;
}

.calculator__name {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.day__info {
    display: flex;
    align-items: center;
    gap: 5px;
}
.day__info__list{
    display: flex;
    flex-direction: column;
    gap: 5px;
}
.day__info__list__item{
    display: flex;
    align-items: center;
    gap: 5px;
   
}
.day__info__list__item p{
    color: var(--secondary-color);
    font-weight:bold ;
}
.day__info__list__item span{
    color: var(--base-color);
    font-size: 18px;
}

.calculation__result {
    display: flex;
    height: 78px;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
    background-color: var(--color-gray-primary);
    border-radius: var(--border-radius-base);
}

sup {
    font-size: 8px;
}

.calculation__result p {
    text-align: right;
    color: var(--color-white);
}

.calculation__result p:last-child {
    font-size: 25px;
    font-weight: bold;
    color: var(--color-white);
}

.calculator__bottom {
    display: flex;
    justify-content: space-between;
    gap: 25px;
    padding: 25px;
    width: 100%;
    background-color: var(--color-gray-tertiary);
    border-radius: var(--border-radius-base);
}
</style>