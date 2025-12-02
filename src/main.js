import {postInfo,featuredPost} from "./data";
const postsContainer = document.querySelector("#posts-container");
const loadMoreBtn = document.querySelector("#load-more");
let isHome = true;

loadMoreBtn.addEventListener("click",()=>{
    const currentPostsLength = postsContainer.children.length;
    const amountOfPostsToAdd = 3;
    //If there's no more posts
    if(currentPostsLength === postInfo.length){
        alert("bitch stop there's no more posts");
    }
    //If there's more posts, but less than we want to add. So just give us the rest.
    else if((currentPostsLength + amountOfPostsToAdd) > postInfo.length){
        renderPosts(postInfo.length)
    } 
    //Load the additional amountOfPostsToAdd
    else {
        renderPosts(currentPostsLength+amountOfPostsToAdd);
    }
})

function renderFeaturedPost(){
        document.querySelector("#featured-post").innerHTML = createHTMLPost(featuredPost.title,featuredPost.date,featuredPost.imagePath,featuredPost.subheading)
}

function renderPosts(amount){
    isHome && renderFeaturedPost()    
    let output = "";

    if(amount>=postInfo.length){
        amount = postInfo.length
    }
     
    for(let i=0; i<amount; i++){
        output+=`
        <section class="post">
            ${createHTMLPost(postInfo[i].title,postInfo[i].date,postInfo[i].imagePath,postInfo[i].subheading)}
        </section>
        `
    }
    postsContainer.innerHTML = output;
}

function createHTMLPost(title,date,imagePath,subheading){
    return `
            <img src="${imagePath}"/>
            <p class="date">${date}</p>
            <h2>${title}</h2>
            <p class="post-text">${subheading}
            </p>`
}

renderPosts(6);