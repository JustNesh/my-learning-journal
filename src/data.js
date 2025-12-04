import pageBackground from "../public/images/page-background.jpg";

let postInfo = [
    {
        title:"My new journey as a bootcamp student.",
        date:"July 22, 2025",
        imagePath:"./images/featured-post-2.jpg",
        post: `
            <h4>How I stay committed to learning</h4>
            <p>
            I like to think of myself as a lifelong learner. I used to spend hours and hours learning, then try to create simple projects using what I learned or work new techniques into existing projects.

            While that was fun, I felt like it would be helpful to share what I was learning and most things about my journey with the world.
            </p>
            <h4>How I got started</h4>
            <p>
            I started simple and gradually grew my learning journal site. I would take notes about what I was learning. After each learning session, I'd use my notes to not only reflect on what I learned but also write short summaries of what I learned using my own words.

            That helped me grok what I was learning, and I realized that posting my learning summaries was also helping others learn and stay motivated.
            </p>
            `,
        subheading:"After several months of learning in the Frontend Developer Career Path,I've made the big jump over to the Bootcamp to get expert code reviews of my Solo Projects projects and meet like-minded peers.",
        uuid:"9ca3793e-e30b-4986-8f72-f1184f1cf333"
    },
    {
        title:"Blog One",
        date:"July 22, 2025",
        imagePath:"./images/article-image-01.png",
        post:`<p>I'm excited to start a new learning journey 
            as a Scrimba Bootcamp student! After several months of learning
            in the Frontend Developer Career Path.</p>`,
        subheading:`I'm excited to start a new learning journey 
            as a Scrimba Bootcamp student! After several months of learning
            in the Frontend Developer Career Path.`,
        uuid:"7d88ca87-f99c-4baa-bac7-9041a6495cd6"
    },
    {
        title:"Blog Two",
        date:"July 22, 2025",
        imagePath:"./images/article-image-02.png",
        post:`<p>I'm excited to start a new learning journey 
            as a Scrimba Bootcamp student! After several months of learning
            in the Frontend Developer Career Path.</p>`,
        subheading:`I'm excited to start a new learning journey 
            as a Scrimba Bootcamp student! After several months of learning
            in the Frontend Developer Career Path.`,
        uuid:"f45fcfdf-5072-4ba9-b2d3-a8b1a62bf30e"
    },
    {
        title:"Blog Three",
        date:"July 22, 2025",
        imagePath:"./images/article-image-03.png",
        post:`<p>I'm excited to start a new learning journey 
            as a Scrimba Bootcamp student! After several months of learning
            in the Frontend Developer Career Path.</p>`,
        subheading:`I'm excited to start a new learning journey 
            as a Scrimba Bootcamp student! After several months of learning
            in the Frontend Developer Career Path.`,
        uuid:"643d6d48-da63-4d72-b61b-f28f03877035"
    },
    {
        title:"Blog Four",
        date:"July 22, 2025",
        imagePath:"./images/article-image-04.jpg",
        post:`<p>I'm excited to start a new learning journey 
            as a Scrimba Bootcamp student! After several months of learning
            in the Frontend Developer Career Path.</p>`,
        subheading:`I'm excited to start a new learning journey 
            as a Scrimba Bootcamp student! After several months of learning
            in the Frontend Developer Career Path.`,
        uuid:"d7acb831-4c97-456c-b34d-61e89ab10a54"
    },
    {
        title:"Blog Five",
        date:"July 22, 2025",
        imagePath:"./images/article-image-05.jpg",
        post:`<p>I'm excited to start a new learning journey 
            as a Scrimba Bootcamp student! After several months of learning
            in the Frontend Developer Career Path.</p>`,
        subheading:`I'm excited to start a new learning journey 
            as a Scrimba Bootcamp student! After several months of learning
            in the Frontend Developer Career Path.`,
        uuid:"505e961a-07f4-4294-83b2-8b6de8b5c54b"
    },
    {
        title:"Blog Six",
        date:"July 22, 2025",
        imagePath:"./images/article-image-06.jpg",
        post:`<p>I'm excited to start a new learning journey 
            as a Scrimba Bootcamp student! After several months of learning
            in the Frontend Developer Career Path.</p>`,
        subheading:`I'm excited to start a new learning journey 
            as a Scrimba Bootcamp student! After several months of learning
            in the Frontend Developer Career Path.`,
        uuid:"4d5be919-537c-4bdb-b090-2a632badfad5"
    },
    {
        title:"CSS Grid",
        date:"November 30th, 2025",
        imagePath:"./images/css-grid-background.jpg",
        author:"Aleksandr Slavich",
        post:`  <h4>Summary</h4>
                <p>This is another way to organize your items in a way to make it look nice. Very similar to flexbox, and not a replacement for it. There's a time and a place for both, and you can use both for items. For example, you can have a body grid, but then have flex containers within that body grid.</p>
                <h4>Grid-Template-Columns & Grid-Template-Rows</h4>
                <p>There are explicit and implicit columns. Rows are often implicit and we don't need to always explicitly declare them, however, columns do need to be explicitly stated to achieve the format we want. 
                That being said, the way we declare how many columns we want is with the property Grid-Template-Columns on the grid-container class.</p>
                <pre>
                    <code>
.grid-container{
/* This means that there are 3 columns each divided evenly.*/
grid-template-columns: 1fr 1fr 1fr;
}

/* Optionally we can also do this*/

.grid-container{
    grid-template-columns: repeat(3, 1fr)
}
                    </code>
                </pre>`,
subheading:`CSS Grid. A simple tool that can lead to complex
designs.`,
uuid:"4ad256d7-bb1d-48dd-8214-d85241e34fce"
    },
    {
        title:"Blog Six",
        date:"July 22, 2025",
        imagePath:"./images/article-image-06.jpg",
        post:`<p>I'm excited to start a new learning journey 
            as a Scrimba Bootcamp student! After several months of learning
            in the Frontend Developer Career Path.</p>`,
        subheading:`I'm excited to start a new learning journey 
            as a Scrimba Bootcamp student! After several months of learning
            in the Frontend Developer Career Path.`,
        uuid:"4d5be919-537c-4bdb-b090-2a632badfad5"
    },
].reverse();

const subheadingSize = 30;  

//Creating Subheading from the post in the size of subheadingSize
// postInfo = postInfo.map((post)=>{
//     return {
//             ...post,
//             subheading : post.post.replace(/<[^>]*>/g,"").split(" ").slice(0,subheadingSize).join(" ") + "..."
//     }
// })

//Establish Featured Post
const featuredPost = postInfo[postInfo.length - 1];

//Remove Featured Post from the post list
postInfo = postInfo.filter((post)=>post!=featuredPost);

const aboutMePost = `
    <div class="background-image-container">
            <img src="${pageBackground}"/>
            <div class="bg-transition-top"></div>    
            <div class="bg-transition-bottom"></div>
        </div>
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

export {postInfo,featuredPost,aboutMePost};