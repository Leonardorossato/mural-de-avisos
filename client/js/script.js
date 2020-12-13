
document.addEventListener('DOMContentLoaded',()=>{
   UpdatePosts();     
})

function UpdatePosts(){
    fetch("http://localhost:5000/Api/all").then(res=>{
        return res.json();
    }).then(json=>{
        let PostElements = '';
        let posts = JSON.parse(json);

        posts.forEach((post)=>{
            let PostElement = `
                <div id=${post.id} class="card mb-4">
                    <div class="card-header">
                        <h5 class="card-title">${post.title}</h5>
                    </div>
                    <div class="card-body">
                        <div class="card-text">${post.description}</div>
                    </div>
                </div>`;
                PostElements += PostElement;
        })
        document.getElementById("posts").innerHTML= PostElements;
    })
}

function NewPost(){

    let title = document.getElementById("title").value;
    let description = document.getElementById("description").value;

    let post = {title, description};

    const options = {
        method: "POST",
        headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify(post)
    }

    fetch("http://localhost:5000/Api/new", options).then(res=>{
        console.log(res);
        UpdatePosts();
        document.getElementById("title").value = "";
        document.getElementById("description").value = "";
    }).catch((err)=>{
        console.error(err.message);
    })
}