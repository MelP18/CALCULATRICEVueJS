<template>
    <div class="error__page">
        <div class="page__not__found">
            <p>Page Not Found</p>
        </div>
    </div>
</template>

<style scoped>
.error__page{
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.page__not__found{
    background-color: var(--base-color);
    width: 20%;
    text-align: center;
}
.page__not__found p{
    color: var(--color-white);
}
</style>