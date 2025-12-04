import {postInfo,featuredPost,aboutMePost} from "./data";
import pageBackground from "../public/images/page-background.jpg"
const postsContainer = document.querySelector("#posts-container");
const loadButton =  document.querySelector("#load-more");
const mainEl = document.querySelector("main");
const basePostsToRender = 3;
const amountOfPostsToAdd = 3;
let isHome = true;
let isArticle = false;
let isAboutPage = false;

document.addEventListener("click", (event)=>{
    if(event.target.dataset.postUuid){
        handleArticle(event);
    }
})
document.querySelector("#load-more").addEventListener("click",handleLoadButton);
document.querySelector("#home").addEventListener("click", handleHomeButton);
document.querySelector("#about-me").addEventListener("click",handleAboutMe);

function handleNavigation(home,article,aboutPage){
    if(home){
        isHome = true;
        isArticle = false;  
        isAboutPage = false;   
    } else if(article){
        isArticle = true;
        isHome = false;
        isAboutPage = false;
    } else if(aboutPage){
        isArticle = false;
        isHome = false;
        isAboutPage = true;
    }
    renderFeaturedPost();
    renderPosts(basePostsToRender);
}

function handleArticle(event){
    handleNavigation(false,true,false);
    let clickedPost = postInfo.filter((post)=> post.uuid === event.target.dataset.postUuid)[0];
    clickedPost = clickedPost || featuredPost;
    mainEl.innerHTML = `
    <div class="background-image-container">
        <img src="${pageBackground}"/>
        <div class="bg-transition-top"></div>    
        <div class="bg-transition-bottom"></div>
    </div>
    <p class="date">${clickedPost.date}</p>
    <h2 class="title">${clickedPost.title}</h2>
    <p class="subheading">${clickedPost.subheading}</p>
    <img src="${clickedPost.imagePath}"/>
    <div class="post-container">${clickedPost.post}</div>
    <div class="content-seperator"></div>
    <h3>Recent Posts</h3>
    `;
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // smooth scrolling
    });
}

function handleAboutMe(){
    handleNavigation(false,false,true);
    mainEl.innerHTML = aboutMePost;
}

function handleHomeButton(){
    handleNavigation(true,false,false);
    mainEl.innerHTML = "";
}
function handleLoadButton(){
    const currentPostsLength = postsContainer.children.length;;
    //If there's no more posts
    if(currentPostsLength === postInfo.length){
        return
    }
    //If there's more posts, but less than we want to add. So just give us the rest.
    else if((currentPostsLength + amountOfPostsToAdd) > postInfo.length){
        renderPosts(postInfo.length)
    } 
    //Load the additional amountOfPostsToAdd
    else {
        renderPosts(currentPostsLength+amountOfPostsToAdd);
    }
}

function renderFeaturedPost(){
    const featuredPostEl = document.querySelector("#featured-post");
    if(isHome){
        featuredPostEl.innerHTML = createHTMLPost(featuredPost)
        featuredPostEl.classList.remove("hidden");
    } else{
        featuredPostEl.innerHTML = "";
        featuredPostEl.classList.add("hidden");
    }
}

function renderPosts(amount){
    let output = "";
    loadButton.textContent = "Load More";
    if(amount>=postInfo.length){
        amount = postInfo.length;
        loadButton.textContent = "No More Content!";
    }

    for(let i=0; i<amount; i++){
        output+=`
        <section class="post">
            ${createHTMLPost(postInfo[i])}
        </section>
        `
    }
    postsContainer.innerHTML = output;
}

function createHTMLPost({title,date,imagePath,subheading,uuid}){
    return `
            <img src="${imagePath}" data-post-uuid="${uuid}"/>
            <p class="date">${date}</p>
            <h2 data-post-uuid="${uuid}">${title}</h2>
            <p class="subheading">${subheading}</p>
        `
}

renderFeaturedPost()    
renderPosts(basePostsToRender);