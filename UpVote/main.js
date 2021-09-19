const articleComponent = {
    template: `<div style="display: flex; width: 100%">
                <figure class="media-left">
                    <img :src="article.submissionImage" alt="" class="image is-64x64">
                </figure>
                <div class="media-content">
                    <div class="content">
                        <p>
                            <strong>
                                <a :href="article.url" class="has-text-info">
                                    {{ article.title }}
                                </a>
                                <span class="tag is-small">#{{ article.id }}</span>
                            </strong>
                            <br>
                            {{ article.description }}
                            <br>
                            <small class="is-size-7">
                                Submitted by:
                                <img :src="article.avatar" alt="" class="image is-24x24">
                            </small>
                        </p>
                    </div>
                </div>
                <div class="media-right">
                    <span class="icon is-small" @click="upvote(article.id)">
                        <i class="fa fa-chevron-up"></i>
                        <strong class="has-text-info">{{ article.votes }}</strong>
                    </span>
                </div>
            </div>`,
    props: ["submissions", "article"],
    methods: {
        upvote(articleID) {
            const article = this.submissions.find((article) => article.id === articleID);
            article.votes++;
        }
    },
            
};



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
    
    components:{
        "article-component": articleComponent
    }
};
Vue.createApp(upvoteApp).mount('#app')
