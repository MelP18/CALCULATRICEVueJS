

import { defineStore } from "pinia";
import { ref, computed} from 'vue'
import { supabase } from "@/lib/users";
import type { UserAuth } from '@/Types/userauth'
import type { UserRegistration } from "@/Types/userregistration";

export const useRegistrationsStore = defineStore("registration", () => {

    const usersauth = ref<UserAuth[]>([])
    const userregistration = ref<UserRegistration[]>([])
    async function addUser() {
        const { data, error } = await supabase.from('registrations').insert('userName,e_mail')
        if (data) {
            userregistration.value = data
        }
        console.log(data);
    }
   /*  async function addUser(user: UserRegistration) {
        const { data, error } = await supabase
            .from('registrations')
            .insert('userName',)
        if (data) {
            userregistration.value.push(data[0])
        }
    } */
     
/*     const userConnectData = supabase.auth.getSession() */
   /*  const userConnectUserName = computed(async()=> {
        const {data}= await supabase.auth.getSession()
        if(data.session){
            const user = data.session?.user
            console.log(user);
            
        }
    } ) */
    
    return { usersauth, addUser }
})