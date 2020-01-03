<template>
    <div>
        <h1>{{ msg }}</h1>

        <div>
            <ul>
                <li>{{items.title}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: 'ABout',
        props: {
            msg: String
        },
        data() {
            return {
                items: ''
            }
        },
        created() {
            axios.get('https://jsonplaceholder.typicode.com/posts/1')
                .then(res =>{
                    this.items = res.data
                })
        },
        methods:{
            getPost(){

            }
        }
    }
</script>




