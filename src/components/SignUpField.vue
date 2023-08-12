/*=============================++++ HTML ++++=================================*/
<template>
    <div class="register__field__list">
        <!-- <div class="register__field__list__item">
            <label for="">Username</label>
            <div class="register__field__list__item__input">
                <span class="mdi mdi-account"></span>
                <input type="text" placeholder="yourUserName" v-model="userData.userName" >
            </div>
        </div> -->
        <!-- <div class="register__field__list__item">
            <label for="">Photo</label>
            <input type="file" placeholder="monnom@exemple.com">
        </div> -->
        <div class="register__field__list__item">
            <label for="">E-mail</label>
            <div class="register__field__list__item__input">
                <span class="mdi mdi-mail"></span>
                <input type="email" placeholder="name@exemple.com" v-model="userData.e_mail">
            </div>
        </div>
        <div class="register__field__list__item">
            <label for="">Password</label>
            <div class="register__field__list__item__input__pass">
                <span class="mdi mdi-lock"></span>
                <input type="password" v-model="userData.password" >
                <!-- <span class="mdi mdi-eye"></span>
                <span class="mdi mdi-eye-off"></span> -->
            </div>
        </div>
        <div class="register__field__list__item">
            <label for="">Confirm Password</label>
            <div class="register__field__list__item__input__pass">
                <span class="mdi mdi-lock"></span>
                <input type="password" v-model="userData.password">
                <!-- <span class="mdi mdi-eye"></span>
                <span class="mdi mdi-eye-off"></span> -->
            </div>
        </div>
    </div>
    
    <div class="btn__submit">
        <button type="submit" @click="setRegistration">Submit</button>
    </div>
</template>




/*=============================++++ JS ++++=================================*/
<script lang="ts" setup>
import {ref} from 'vue'
import {createClient} from '@supabase/supabase-js'
import type { UserConnect } from '@/Types/userconnection'

 const userData = ref({     
    userName:'',
    e_mail:'',
    password:''
  })

const emits = defineEmits(['submit'])

async function setRegistration(){
   emits('submit',userData.value)
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
