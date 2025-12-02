let postInfo = [
    {
        title:"My new journey as a bootcamp student.",
        date:"July 22, 2025",
        imagePath:"public/images/featured-post-2.jpg",
        post:"After several months of learning in the Frontend Developer Career Path,I've made the big jump over to the Bootcamp to get expert code reviews of my Solo Projects projects and meet like-minded peers.",
        subheading:""
    },
    {
        title:"Blog One",
        date:"July 22, 2025",
        imagePath:"public/images/article-image-01.png",
        post:`I'm excited to start a new learning journey 
            as a Scrimba Bootcamp student! After several months of learning
            in the Frontend Developer Career Path.`,
        subheading:""
    },
    {
        title:"Blog Two",
        date:"July 22, 2025",
        imagePath:"public/images/article-image-02.png",
        post:`I'm excited to start a new learning journey 
            as a Scrimba Bootcamp student! After several months of learning
            in the Frontend Developer Career Path.`,
        subheading:""
    },
    {
        title:"Blog Three",
        date:"July 22, 2025",
        imagePath:"public/images/article-image-03.png",
        post:`I'm excited to start a new learning journey 
            as a Scrimba Bootcamp student! After several months of learning
            in the Frontend Developer Career Path.`,
        subheading:""
    },
    {
        title:"Blog Four",
        date:"July 22, 2025",
        imagePath:"public/images/article-image-04.jpg",
        post:`I'm excited to start a new learning journey 
            as a Scrimba Bootcamp student! After several months of learning
            in the Frontend Developer Career Path.`,
        subheading:""
    },
    {
        title:"Blog Five",
        date:"July 22, 2025",
        imagePath:"public/images/article-image-05.jpg",
        post:`I'm excited to start a new learning journey 
            as a Scrimba Bootcamp student! After several months of learning
            in the Frontend Developer Career Path.`,
        subheading:""
    },
    {
        title:"Blog Six",
        date:"July 22, 2025",
        imagePath:"public/images/article-image-06.jpg",
        post:`I'm excited to start a new learning journey 
            as a Scrimba Bootcamp student! After several months of learning
            in the Frontend Developer Career Path.`,
        subheading:""
    },
];

const subheadingSize = 30;  

//Creating Subheading from the post in the size of subheadingSize
postInfo = postInfo.map((post)=>{
    return {
            ...post,
            subheading : post.post.replace(/<[^>]*>/g,"").split(" ").slice(0,subheadingSize).join(" ") + "..."
    }
})
//Establish Featured Post
const featuredPost = postInfo[0];

//Remove Featured Post from the post list
postInfo = postInfo.filter((post)=>post!=featuredPost);

export {postInfo,featuredPost};