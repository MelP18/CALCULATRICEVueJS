/*=============================++++ HTML ++++=================================*/
<template>
    <div class="error__part">
        <p class="error">{{ errorText }}</p>
    </div> 
    <div class="register__field__list">
        <div class="register__field__list__item">
            <label for="">E-mail</label>
            <div class="register__field__list__item__input">
                <span class="mdi mdi-mail"></span>
                <input type="text" v-model="connectUserData.e_mail">
            </div>
        </div>
        <div class="register__field__list__item">
            <label for="">Password</label>
            <div class="register__field__list__item__input__pass">
                <span class="mdi mdi-lock"></span>
                <input type="password" v-model="connectUserData.password">
            </div>
        </div>
    </div>
    <div class="btn__submit">
        <button type="submit" @click="userConnection">Login</button>
    </div>
</template>

/*=============================++++ JS ++++=================================*/
<script lang="ts" setup>

import { userConnectionStore } from "@/stores/connection";
import { useRouter } from "vue-router";
import { supabase } from "@/lib/users";
import type { UserRegistration } from '@/Types/userregistration'

import {ref} from 'vue'
const router = useRouter()
const errorText = ref('')

const connectUserData = ref({
    e_mail: '',
    password: ''
})

const { addUserConnect } = userConnectionStore()

    async function userConnection() {
        
        const { data, error } = await supabase.auth.signInWithPassword({
            email: connectUserData.value.e_mail,
            password: connectUserData.value.password,
        })
        if (error) {
            errorText.value = error.message
            console.log(error);
        }else{
            router.replace('/user')
        }
     
    }

</script>



/*=============================++++ CSS ++++=================================*/
<style scoped>
.register__field__list {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.register__field__list__item {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.register__field__list__item label {
    font-weight: bold;
    color: var(--color-white);
}

.register__field__list__item__input {
    display: flex;
}

.register__field__list__item__input span {
    font-size: 18px;
    padding: 7px;
    color: var(--color-white);
    background-color: var(--base-color);
    border-top-left-radius: var(--border-radius-primary);
    border-bottom-left-radius: var(--border-radius-primary);
}

.register__field__list__item__input input {
    padding-left: 8px;
    width: 100%;
    outline: 0;
    border: none;
    background-color: var(--color-white);
    border-top-right-radius: var(--border-radius-primary);
    border-bottom-right-radius: var(--border-radius-primary);
}

.register__field__list__item__input input::placeholder {
    color: var(--secondary-color);
}

.register__field__list__item__input__pass {
    display: flex;
}

.register__field__list__item__input__pass span.mdi-lock {
    font-size: 18px;
    padding: 7px;
    color: var(--color-white);
    background-color: var(--base-color);
    border-top-left-radius: var(--border-radius-primary);
    border-bottom-left-radius: var(--border-radius-primary);
}

.register__field__list__item__input__pass input {
    padding-left: 8px;
    width: 100%;
    outline: 0;
    background-color: none;
    border: none;
    border-top-right-radius: var(--border-radius-primary);
    border-bottom-right-radius: var(--border-radius-primary);
}

.register__field__list__item__input__pass span.mdi-eye,
.register__field__list__item__input__pass span.mdi-eye-off {
    cursor: pointer;
    font-size: 18px;
    padding: 7px;
    color: var(--color-white);
    background-color: var(--base-color);
    border-top-right-radius: var(--border-radius-primary);
    border-bottom-right-radius: var(--border-radius-primary);
}

.error__part { 
    display: flex;
    justify-content: center;
    align-items: center;  
}
.error {
    border-radius: var(--border-radius-primary);
    font-size: 18px;
    text-align: center;
    font-weight: bold;
    color: rgb(237, 17, 17);
}

.btn__submit {
    display: flex;
    justify-content: center;
    align-items: center;
}

.btn__submit button {
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    padding: 8px 25px;
    color: var(--color-white);
    background-color: var(--base-color);
    border-radius: var(--border-radius-primary);
}
</style>