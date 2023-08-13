/*=============================++++ HTML ++++=================================*/
<template>
    <div class="register__information__list">
        <div class="register__information__list__item">
            <span class="mdi mdi-account-plus"></span>
            <p>Vous devez vous inscrire pour accéder au différente fonctionnalité de la calculatrice</p>
        </div>
        <div class="register__information__list__item">
            <span class="mdi mdi-account-plus"></span>
            <p>L'inscription étant gratuite, elle ne vous prendra que 2min</p>
        </div>
        <div class="register__information__list__item">
            <div class="register__information__list__item__top">
                <span class="mdi mdi-account-plus"></span>
                <p>Une fois connecté, vous aurez assez à diverses fonctionnalités d'une calculatrice. Telle
                    que :
                </p>
            </div>
            <ul class="fonctionnality__list">
                <li class="fonctionnality__list__item">
                    <h3>Fonctionnalité d'une calculatrice simple</h3>
                    <p>Cette calculatrice dispose d'une interface large et conviviale, offrant une
                        simplicité et une intuitivité qui la rendent parfaitement adaptée aux
                        utilisateurs de tous les âges et niveaux d'expérience</p>
                </li>
                <li class="fonctionnality__list__item">
                    <h3>Fonctionnalité d'une calculatrice scientifique</h3>
                    <p>Cette fonctionnalité offre une gamme complète de fonctions, comprenant des
                        fonctions trigonométriques, logarithmiques et exponentielles, ainsi que la
                        capacité de travailler avec des nombres complexes. Son interface conviviale et
                        son affichage clair la rendent facile à comprendre, même pour ceux qui ont moins
                        d'expérience en mathématiques avancées.</p>
                </li>
                <li class="fonctionnality__list__item">
                    <h3>Fonctionnalité d'une calculatrice graphique</h3>
                    <p>Cette fonctionnalité vous permet de tracer des graphes et d'analyser des
                        fonctions mathématiques sur son écran. Elle offre également la possibilité
                        d'afficher plusieurs lignes de texte ou de calcul en même temps.</p>
                </li>
                <li class="fonctionnality__list__item">
                    <h3>Fonctionnalité d'une calculatrice financière</h3>
                    <p>cette fonctionnalité est un précieux outil pour estimer la durée nécessaire
                        pour rembourser un prêt ou un investissement donné.Elle est
                        spécialement conçues pour aider les professionnels des finances, les étudiants
                        et
                        les particuliers à réaliser des calculs financiers complexes et à prendre des
                        décisions éclairées en matière d'investissement, de prêts et de planification
                        financière.
                    </p>
                </li>
                <li class="fonctionnality__list__item">
                    <h3>Fonctionnalité d'une calculatrice formelle</h3>
                    <p>Cette fonctionnalité de la calculatrice incluent le calcul de limites de
                        fonctions, l'étude des comportements asymptotiques et l'exécution de calculs liés
                        aux séries mathématiques. Elle autorisent la programmation pour effectuer des tâches
                        spécifiques et automatiser des calculs.Spécialement conçue pour les étudiants et les professionnels
                        en mathématiques, sciences, ingénierie et
                        domaines connexes pour une approche avancée et précise afin résoudre des problèmes mathématiques et
                        analytiques.
                    </p>
                </li>

            </ul>
        </div>
    </div>
</template>



/*=============================++++ CSS ++++=================================*/
<style scoped>
.register__information__list {
    display: flex;
    flex-direction: column;
    gap: 20px;
}
.register__information__list__item {
    display: flex;
    align-items: center;
    gap: 15px;
}
.register__information__list__item span {
    color: var(--color-white);
    font-size: 25px;
}
.register__information__list__item p {
    color: var(--color-white);
    line-height: 25px;
    letter-spacing: 1px;
}
.register__information__list__item:last-child {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.register__information__list__item__top {
    display: flex;
    align-items: center;
    gap: 15px;
}
.register__information__list__item__top span {
    color: var(--color-white);
    font-size: 25px;
}
.register__information__list__item__top p {
    color: var(--color-white);
    line-height: 25px;
    letter-spacing: 1px;
    white-space: wrap;
}
.fonctionnality__list {
    display: flex;
    flex-direction: column;
    gap: 10px;

}
.fonctionnality__list__item {
    display: flex;
    flex-direction: column;
    gap: 5px;
}
.fonctionnality__list__item h3 {
    font-size: 18px;
    color: var(--color-black);
}
.fonctionnality__list__item p {
    color: var(--color-white);
    line-height: 25px;
    letter-spacing: 1px;
    text-align: justify;
}
</style>