<template>
	<div id='settingsApp'>
        <h1 class='ui centered header'>Settings</h1>
        
        <div class='ui three column centered grid'>
            <div class='column'>
                <label>JWT auth token</label><br/>
                <input disabled v-model="jwt" size="64">
                <button @click="save">Save</button>
            </div>
        </div>
	</div>
</template>

<script type='text/javascript'>

import Vue from 'vue'

export default {
    props: ['settings'],
    data() {
        return {
            jwt: this.$store.state.jwt,
        }
    },
    methods: {
        save() {
            this.$store.commit('SET_JWT', this.jwt)
            Vue.http.interceptors.push((request, next) => {
                request.headers.set('Authorization', 'Bearer ' + this.jwt)
                next()
            })
        },
    },
    mounted() {
        this.$http.get("http://localhost:8080/api/v1/public").then(response => {
            this.jwt = response.body.token
        })
    }
};
</script>