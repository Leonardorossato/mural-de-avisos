module.exports = {

    posts: [
        {
            id: "ds232",
            title: "dbhsaudaç",
            description: "hndsfdsnf"
        },
    ],

    getAll(){
        return this.posts;
    },

    NewPost(title, description){
        console.log(title, description);
        this.posts.push({ id: GenerateRandomId(), title, description });
    }
}

function GenerateRandomId(){
    return Math.random().toString(36).substr(2,9);
};