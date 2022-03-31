<template>
    <!--  -->
    <div class="demo" @wheel="scrollCards($event)">
        <vue-card-stack :cards="cards" :stack-width="1200" :card-width="400" :speed="0.5">
            <template v-slot:card="{ card }">
                <div style="width: 100%; height: 100%; padding: 15px;" :style="{ background: card.background}" @click="clicked[card.data] = true" @mouseleave="clicked[card.data] = false">
                    <!-- <el-dropdown>
                        <el-button>
                            Dropdown List<i class="el-icon-arrow-down el-icon--right"></i>
                        </el-button>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item icon="el-icon-plus">Action 1</el-dropdown-item>
                            <el-dropdown-item icon="el-icon-circle-plus">Action 2</el-dropdown-item>
                            <el-dropdown-item icon="el-icon-circle-plus-outline">Action 3</el-dropdown-item>
                            <el-dropdown-item icon="el-icon-check">Action 4</el-dropdown-item>
                            <el-dropdown-item icon="el-icon-circle-check">Action 5</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown> -->
                    {{card.data}}
                    <el-row style="margin:10px">
                        <el-button type="primary" icon="el-icon-edit" circle></el-button>
                        <el-button type="success" icon="el-icon-check" circle></el-button>
                        <el-button type="danger" icon="el-icon-delete" circle></el-button>
                    </el-row>
                    <el-descriptions direction="horizontal" :column="1" border size="medium">
                    <el-descriptions-item label="Username">kooriookami</el-descriptions-item>
                    <el-descriptions-item label="Telephone">18100000000</el-descriptions-item>
                    <el-descriptions-item label="Place" :span="2">Suzhou</el-descriptions-item>
                    <el-descriptions-item label="Remarks">
                        <el-tag>School</el-tag>
                    </el-descriptions-item>
                    <el-descriptions-item label="Address">No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province</el-descriptions-item>
                    <el-descriptions-item ></el-descriptions-item>
                    </el-descriptions>
                </div>
            </template>

            <template v-slot:nav="{ activeCardIndex, onNext, onPrevious }">
                <nav class="nav">
                    <div class="counter">{{cards.length - activeCardIndex}}/{{cards.length}}</div>
                    <button v-on:click="onPrevious" class="button" ref="nextButton">
                        <span class="chevron left"> &lt; </span>
                    </button>
                    <button v-on:click="onNext" class="button" ref="prevButton">
                        <span class="chevron right"> &gt; </span>
                    </button>
                </nav>
            </template>
        </vue-card-stack>
    </div>
</template>

<script>
    import VueCardStack from "vue-card-stack";
    import * as session from '../js/session'
    let tasks = session.getJsonTasksArray()
    export default({
        name:'SchoolCompo',
        data(){
            return{
                SchoolName:'aaa',
                address:'bbb',
                cards: this.initCards(tasks),
                tasks: tasks,
                clicked: Array(5).fill(false),
                hidden: true
            }
        },
        methods: {
            getRandomColor(){
                const colors = ["#00659d", "#00abbc", "#e2c58a", "#fc8890", "#b35d7f"]
                return colors[Math.floor(Math.random() * colors.length)]
            },
            initCards(tasksJsonArray){
                let res = []
                for (let i = 0; i < tasksJsonArray.length; i++) {
                    let taskObj = {}
                    taskObj["background"] = this.getRandomColor()
                    taskObj["data"] = tasksJsonArray[i]
                    res.push(taskObj)
                }
                return res
            },
            scrollCards(e){
                e.preventDefault();
                const nextButton = this.$refs.nextButton
                const prevButton = this.$refs.prevButton
                if(e.deltaY > 0){
                    nextButton.click()
                }
                else{
                    prevButton.click()
                }
            },
            updateMouseover(cardIdx){
                this.clicked[cardIdx] = true
            },
            updateMouseLeave(cardIdx){
                this.clicked[cardIdx] = false
            }
        },
        components:{
            VueCardStack
        }
    })
</script>

<style>
    .hidden{
        display: none;
    }
</style>