const upvoteApp = {
    data(){
        return{
            submissions: Seed.submissions
        }
    },
    computed: {
        sortedSubmissions(){
            return this.submissions.sort((a, b) => {
                return b.votes - a.votes
            });
        },
    },
    methods: {
        upvote(articleID){
            const article = this.submissions.find((article) => article.id === articleID);
            article.votes++;
        }
    },
};
Vue.createApp(upvoteApp).mount('#app')
