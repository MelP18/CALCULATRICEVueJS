/*=============================++++ HTML ++++=================================*/
<template>
    <div class="register__field__list">
        <!--  <div class="register__field__list__item">
            <label for="">Username</label>
            <div class="register__field__list__item__input">
                <span class="mdi mdi-account"></span>
                <input type="text" placeholder="yourUserName" v-model="username.userName" >
            </div>
        </div> -->
        <div class="register__field__list__item">
            <label for="">E-mail</label>
            <div class="register__field__list__item__input">
                <span class="mdi mdi-account"></span>
                <input type="text" placeholder="yourE-mail" v-model="connectUserData.e_mail">
            </div>
        </div>
        <div class="register__field__list__item">
            <label for="">Password</label>
            <div class="register__field__list__item__input__pass">
                <span class="mdi mdi-lock"></span>
                <input type="password" v-model="connectUserData.password">
                <!-- <span class="mdi mdi-eye "></span>
                <span class="mdi mdi-eye-off active" ></span> -->
            </div>
        </div>
    </div>
    <div class="error__part">
        <p class="error">{{ errorText }}</p>
    </div> 
    <div class="btn__submit">
        <button type="submit" @click="userConnection">Login</button>
    </div>
</template>

/*=============================++++ JS ++++=================================*/
<script lang="ts" setup>
/* import { onMounted, ref } from "vue"; */
/* import type { User } from '@/Types/userregistration' */
/* import { useRegistrationsStore } from '@/stores/registration' */
import { userConnectionStore } from "@/stores/connection";
/* import type { UserConnect } from "@/Types/userconnection"; */
/* import { storeToRefs } from "pinia"; */
import { useRouter } from "vue-router";
import { supabase } from "@/lib/users";
import type { UserRegistration } from '@/Types/userregistration'

/* const { users } = storeToRefs(useRegistrationsStore())
const { initialise } = useRegistrationsStore() */
import {ref} from 'vue'
const router = useRouter()
const errorText = ref('')
/* onMounted(async () => {
    await initialise()
})
 */
const connectUserData = ref({
    e_mail: '',
    password: ''
})
/* const username= ref({
    userName:''
}) */
const { addUserConnect } = userConnectionStore()
/* async function userConnection() {
    const connectUser = connectUserData.value
    console.log(connectUser);
    const usersValue = users.value
    console.log(usersValue);
    const verifyConnectUserData = usersValue.find(item => item.userName === connectUser.e_mail&& item.password === connectUser.password)
    console.log(verifyConnectUserData);
    if (verifyConnectUserData) {
        addUserConnect(connectUser)
        router.replace('/user')
    }  */
    async function userConnection() {
        
    const { data, error } = await supabase.auth.signInWithPassword({
        email: connectUserData.value.e_mail,
        password: connectUserData.value.password,
    })
    if (error) {
         errorText.value = error.message
         console.log(error);
    }else{
        /* const usermail = connectUserData.value.e_mail
        const userName = username.value.userName
        const datauser = {
            userName:userName,
            e_mail:usermail
        } 
        addUserConnect(datauser)*/ 
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
    padding: 7px 5px;
    background-color: white;
    border-radius: var(--border-radius-primary);
}

.error {
    text-align: center;
    font-weight: bold;
    color: var(--color-black);
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