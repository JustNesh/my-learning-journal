import {postInfo,featuredPost} from "./data";
const postsContainer = document.querySelector("#posts-container");
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
    mainEl.innerHTML = `
    <h2>Hi there! My name is Justin and welcome to my learning journal.</h2>
    <img class="profile-photo" src="./images/profile-photo.jfif"}"/>
        <div class="post-container">
            <p> After several months of learning in the Frontend Developer Career Path,
                I've made the big jump over to the Bootcamp to get expert code reviews of
                my Solo Projects projects and meet like-minded peers.</p>
            <h4>How I stay commited to learning</h4>
            <p> I like to think of myself as a lifelong learner. I used to spend hours and
                hours learning, then try to create simple projects using what I learned or work
                new techniques into existing projects.</p>
            <p>While that was fun, I felt like it would be helpful to share what I was learning 
            and most things about my journey with the world.</p>
            <h4>How I got started</h4>
            <p>I started simple and gradually grew my learning journal site. I would take notes
            about what I was learning. After each learning session, I'd use my notes to not 
            only reflect on what I learned but also write short summaries of what I learned 
            using my own words.</p>
            <p>That helped me grok what I was learning, and I realized that posting my 
            learning summaries was also helping others learn and stay motivated.</p>
        </div>
        <div class="content-seperator"></div>
        <h3>Recent Posts</h3>
    `;
}

function handleHomeButton(){
    handleNavigation(true,false,false);
    mainEl.innerHTML = "";
}
function handleLoadButton(){
    const currentPostsLength = postsContainer.children.length;;
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
    if(amount>=postInfo.length){
        amount = postInfo.length
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