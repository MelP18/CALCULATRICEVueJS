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
                <div class="login">
                    <div class="login__field">
                        <Header class="header"/>
                        <h3>Connection</h3>
                        <LoginField/>  
                    </div>
                    <div class="login__video">
                       <!--  <video :src="video"  controls loop></video> -->
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
import video from '@/assets/video/A partir de hoy; Marco Di Mauro ft. Maite Perroni - letra.mp4'

import image2 from '@/assets/images/remboursement-notes-de-frais.jpg'
import IconPlatform from '@/components/IconPlatform.vue';
import LoginField from '@/components/LoginField.vue'


</script>


/*=============================++++ CSS ++++=================================*/
<style scoped>
.block {
    display: flex;
    display: flex;
    justify-content: center;
    height: 100vh;
    align-items: center;
}

.main__background {
    position: absolute;
    width: 100%;
    height: 100vh;
    display: flex;
}

.main__background .main__background__left {
    padding: 15px;
  /*   background-color: var(--rgba-background);
    background-color: var(--base-color); */
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
    opacity: 0.2;
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

.login {
    width: 100%;
    height: 100%;
    display: flex;
}

.login__field {
    width: 35%;
    width: 30.5rem;
    height: 100%;
    padding: 10px 20px;
    overflow-y: scroll;
    overflow-x: hidden;
    background-color: var(--secondary-color);
    display: flex;
    flex-direction: column;
    justify-content: center;
   /*  align-items: center; */
    gap: 20px;
}

.login__field::-webkit-scrollbar {
    width: 5px;
}

.login__field::-webkit-scrollbar-thumb {
    background-color: var(--base-color);
    border-radius: 15px;
}

/* .header {
    margin-top: 25px;
} */
.login__field h3 {
    text-align: center;
    font-size: 18px;
    font-weight: bold;
    color: var(--base-color);
    font-family: var(--font-family-italic);
}


.login__video {
    width: 65%;
    height: 100%;
   /*  padding: 15px; */
   /*  overflow-y: scroll; */
}

/* .login__video::-webkit-scrollbar {
    width: 5px;
}

.login__video::-webkit-scrollbar-thumb {
    background-color: var(--color-white);
    border-radius: 15px;
}  */
.login__video{
    overflow: hidden;
}
.login__video video{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>