
document.addEventListener('DOMContentLoaded',()=>{
   UpdatePosts();     
})

function UpdatePosts(){
    fetch("http://localhost:5000/Api/all").then(res =>{
        return res.json()
    }).then((json) =>{

        let PostElements = '';
        let posts = JSON.parse(json);
        posts.forEach((post) =>{
            let PostElements = `
            <div id=${post.id} class="card mb-4">
                <div class="card-header">
                    <h5 class="card-title">${post.title}</h5>
                </div>
            </div>
            <div class="card-body">
                <div class="card-text">${post.description}</div>
            </div>
            `
            PostElements += PostElements;
        });
        document.getElementById('posts').innerHTML = PostElements;
    })
}

function NewPost(){

}