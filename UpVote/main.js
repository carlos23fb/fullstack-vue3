const upvoteApp = {
    data(){
        return{
            submissions: Seed.submission
        }
    }
};
Vue.createApp(upvoteApp).mount('#app')
