module.exports = {

    posts: [
        {
        },
    ],

    getAll(){
        return this.posts;
    },

    NewPost(title, description){
        this.posts.push({id: GenerateRandomId(), title, description});
    }
}

function GenerateRandomId(){
    return Math.random().toString(36).substr(2,9);
};