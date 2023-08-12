import { defineStore } from "pinia";
import { ref } from 'vue'
import { supabase } from "@/lib/users";
import type { Calculation } from "@/Types/calculation";

export const userOpeationStore = defineStore("operation", () => {

    const usercalculation = ref<Calculation[]>([])
    async function initialise() {
        const { data, error } = await supabase.from('calculates').select('date,hours,calculation')
        if (data) {
            usercalculation.value = data
        }
        console.log(data);
    } 
    async function addCalculation(calculation:Calculation) {
        const { data, error } = await supabase
        .from('calculates')
        .insert(calculation) 
    /*     .select('date,hours,calculation') */
        if (data) {
            usercalculation.value.push(data[0])
        }
        
    }
    /* const userConnectData  = ref()
    async function userData() {
        const {data} = await supabase.auth.getSession()
        if(data.session){
           userConnectData.value = data.session?.user.email
            console.log( userConnectData); 
            return  userConnectData
        }
    } */
    return {addCalculation, usercalculation, initialise}
}) 