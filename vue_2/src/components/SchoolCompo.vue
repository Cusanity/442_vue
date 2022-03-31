<template>
    <!--  -->
    <div class="demo" @wheel="showName($event)">
        <vue-card-stack :cards="cards" :stack-width="1200" :card-width="400" :speed="0.5">
            <template v-slot:card="{ card }">
                <div style="width: 100%; height: 100%;" :style="{ background: card.background}">
                    <h3>{{ card.name }}</h3>
                </div>
            </template>

            <template v-slot:nav="{ activeCardIndex, onNext, onPrevious }">
                <nav class="nav">
                    <div class="counter">{{cards.length - activeCardIndex}}/{{cards.length}}</div>
                    <button v-on:click="onPrevious" class="button" id="nextButton">
                        <span class="chevron left"> &lt; </span>
                    </button>
                    <button v-on:click="onNext" class="button" id="prevButton">
                        <span class="chevron right"> &gt; </span>
                    </button>
                </nav>
            </template>
        </vue-card-stack>
    </div>
</template>

<script>
    import VueCardStack from "vue-card-stack";
    export default({
        name:'SchoolCompo',
        data(){
            return{
                SchoolName:'aaa',
                address:'bbb',
                cards: [
                    { background: "#00659d", name:"aaa"},
                    { background: "#00abbc", name:"eee" },
                    { background: "#e2c58a", name:"ddd" },
                    { background: "#fc8890", name:"ccc" },
                    { background: "#b35d7f", name:"bbb" },
                ],
            }
        },
        methods: {
            showName(e){
                e.preventDefault();
                const nextButton = document.getElementById("nextButton")
                const prevButton = document.getElementById("prevButton")
                if(e.deltaY > 0){
                    console.log("next")
                    nextButton.click()
                }
                else{
                    console.log("prev")
                    prevButton.click()
                }
            }
        },
        components:{
            VueCardStack
        }
    })
</script>

<style>
</style>