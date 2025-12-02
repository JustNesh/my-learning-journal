import {postInfo,featuredPost} from "./data";
const postsContainer = document.querySelector("#posts-container");
let isHome = true;
function renderFeaturedPost(){
        document.querySelector("#featured-post").innerHTML = createHTMLPost(featuredPost.title,featuredPost.date,featuredPost.imagePath,featuredPost.subheading)
}

function renderPosts(amount){
    isHome && renderFeaturedPost()    
    let output = "";
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