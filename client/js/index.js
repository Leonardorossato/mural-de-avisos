
document.addEventListener('DOMContentLoaded',()=>{
   UpdatePosts();     
})

function UpdatePosts(){
    fetch('http://localhost:5000/api/all').then(res =>{
        return res.json()
    }).then((json) =>{

        let PostElements = '';
        let posts = JSON.parse(json);
        posts.forEach((post) =>{

        });
    })
}

function NewPost(){

}