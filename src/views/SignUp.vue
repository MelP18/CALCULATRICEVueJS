/*=============================++++ HTML ++++=================================*/
<template>
    <div class="block">
        <div class="main__background">
            <div class="main__background__left">
                <!-- left rrgba vilet -->
            </div>
            <div class="main__background__right">
                <!-- right violet -->
            </div>
        </div>
        <div class="main__foreground">
            <div class="main__foreground__img">
                <img :src="image2" alt="">
                <div class="register">
                    <div class="register__field">
                        <Header class="header" />
                        <h3>Registration</h3>
                        <div class="error__part">
                            <p class="error">{{errorText }}</p>
                        </div>
                        <SignUpField @submit="submitRegistration" />
                        <!-- <div class="btn__submit">
                            <button type="submit">Submit</button>
                        </div> -->
                    </div>
                    <div class="register__information">
                        <SignUpInformation />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>



/*=============================++++ JS ++++=================================*/

<script lang="ts"  setup>
import Header from '@/components/Header.vue'
import image from '@/assets/images/impots2_1.jpg'
import image2 from '@/assets/images/remboursement-notes-de-frais.jpg'
/* import IconPlatform from '@/components/IconPlatform.vue'; */
import SignUpField from '@/components/SignUpField.vue'
import { useRegistrationsStore } from '@/stores/registration'
/*import { storeToRefs } from "pinia"; */
import type { UserAuth } from '@/Types/userauth'
import { supabase } from "@/lib/users";
import SignUpInformation from '@/components/SignUpInformation.vue'
/* import { onMounted } from 'vue'; */
import { useRouter } from 'vue-router'

import {ref} from 'vue'


/* const { initialise, addUser } = useRegistrationsStore()
const { users } = storeToRefs(useRegistrationsStore()) */
const router = useRouter()
const errorText = ref('')
async function submitRegistration(user: UserAuth) {
   
    const { data, error } = await supabase.auth.signUp({
        email: user.e_mail,
        password: user.password,
    })
    if (error) {
         errorText.value = error.message
         console.log(error);
    }else{
        router.replace('/user')
    } 
          

}
/* onMounted(async () => {
    await initialise()
}) */
</script>


/*=============================++++ CSS ++++=================================*/
<style scoped>
.block {
    display: flex;
    display: flex;
    justify-content: center;
    height: 100vh;
    align-items: center;
    overflow-x: hidden;
}

.main__background {
    position: absolute;
    width: 100%;
    height: 100vh;
    display: flex;
}

.main__background .main__background__left {
    padding: 15px;
    background-color: var(--rgba-background);
    background-color: var(--rgba-background);
    width: 70%;
    height: 100%;
}

.main__background .main__background__right {
    padding: 15px;
    background-color: var(--secondary-color);
    width: 30%;
    height: 100%;
}

.main__background img {
    position: absolute;
    opacity: 0.3;
    width: 100%;
    height: 100%;
}

.main__foreground {
    background-color: var(--color-black);
   
    /* display: flex;
    justify-content: center;
    align-items: center;  */
    width: 80%;
    height: 80vh;
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
}

.main__foreground__img {
    width: 100%;
    height: 100%;
}

.main__foreground__img img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.4;
}

.register {
    width: 100%;
    height: 100%;
    display: flex;
}

.register__field {
    width: 35%;
    width: 30.5rem;
    height: 100%;
    padding: 10px 20px;
    overflow-y: scroll;
    background-color: var(--secondary-color);
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 25px;
    overflow-x: hidden;
}

.register__field::-webkit-scrollbar {
    width: 5px;
}

.register__field::-webkit-scrollbar-thumb {
    background-color: var(--base-color);
    border-radius: 15px;
}

.register__field h3 {
    text-align: center;
    font-size: 18px;
    font-weight: bold;
    color: var(--base-color);
    font-family: var(--font-family-italic);
}

/* .btn__submit {
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
} */
.error__part {
    
    padding: 7px 5px;
    background-color: white;
    border-radius: var(--border-radius-primary);
}
.error {
     
    text-align: center;
    font-weight: bold;
    color: red;
}
.register__information {
    width: 65%;
    height: 100%;
    padding: 15px;
    overflow-y: scroll;
    overflow-x: hidden;
}

.register__information::-webkit-scrollbar {
    width: 5px;
}

.register__information::-webkit-scrollbar-thumb {
    background-color: var(--color-white);
    border-radius: 15px;
}
</style>