import { defineStore } from "pinia";
import { ref, computed } from 'vue'
import { supabase } from "@/lib/users";
import type { UserConnect } from '@/Types/userconnection'

export const userConnectionStore = defineStore("connection", () => {

    const usersconnect = ref<UserConnect[]>([])
    async function initialise() {
        const { data, error } = await supabase.from('connections').select('userName,e_mail')
        if (data) {
            usersconnect.value = data
        }
        console.log(data);
    } 
    async function addUserConnect(user:UserConnect) {
        const { data, error } = await supabase
        .from('connections')
        .insert(user)
        if (data) {
            usersconnect.value.push(data[0])
        }
        
    }
    const userConnectData  = ref()
    async function userData() {
        const {data} = await supabase.auth.getSession()
        if(data.session){
           userConnectData.value = data.session?.user.email
            console.log( userConnectData); 
            return  userConnectData
        }
    }
   /*  const userConnectUserEmail = computed(async()=> {
        const {data}= await supabase.auth.getSession()
        if(data.session){
            const user = data.session?.user.email
            console.log(user); 
            return {user}
        }
    } ) */
    return {addUserConnect, usersconnect, initialise, userConnectData, userData}
})