<template>
    <div>
        <form @submit.prevent="addData">
            <input type="text" placeholder="" v-model="name">
            <button type="submit">Submit</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: "data",
        data(){
          return{
              name: '',
              dataArray: {}
          }
        },
        methods:{
            addData(){
                this.dataArray = {name: this.name};
            }
        }
    }
</script>

