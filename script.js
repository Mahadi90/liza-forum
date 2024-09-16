const loadPost = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/retro-forum/posts"
  );
  const data = await res.json();
  const posts = data.posts;
  displayPost(posts);
};

const displayPost = (posts,searchPosts) => {
  const postContainer = document.getElementById("content-div");
  postContainer.innerHTML = '';
  if(!searchPosts){
    
    posts.forEach((post) => {
      // console.log(post);
      const postcard = document.createElement("div");
      postcard.classList =
        "flex border-2 border-gray-500 rounded-3xl bg-slate-200 py-8 px-12";
      postcard.innerHTML = `
                <div class="relative">
                <img class="w-20 h-20 me-6 rounded-lg" src=${
                  post.image
                } alt="img" />
                <div class="absolute -top-2 -right-2 md:right-4 w-6 h-6 ${
                  post.isActive == true ? "bg-green-500" : "bg-red-500"
                } rounded-full border-2 border-slate-200"></div></div>
               
                   <div id="content-details" class="space-y-4 ms-2 md:ms-0">
                    <div class="flex flex-col md:flex-row text-gray-800">
                      <p>#${post.category}</p>
                      <p class="md:ms-4">Authore : ${post.author?.name}</p>
                    </div>
                    <h2 class="text-2xl font-bold">${post.title}</h2>
                    <p class="border-b-2 border-dashed border-gray-600 pb-6 text-gray-500">
                      ${post.description}
                    </p>
                    <div class="flex">
                      <a href=""><i class="fa-regular fa-comment"></i> ${
                        post.comment_count
                      }</a>
                      <a class="ms-4" href=""><i class="fa-regular fa-eye"></i> ${
                        post.view_count
                      }</a>
                      <a class="grow ms-4" href=""
                        ><i class="fa-regular fa-clock"></i
                      > ${post.posted_time}</a>
                      <button onclick="handleRead('${post.title}', '${
        post.view_count
      }')"><i class="fa-regular fa-envelope bg-green-500 text-white p-2 rounded-full"></i></button>
                    </div>
                  </div>
          `;
      postContainer.appendChild(postcard);
    });
  }
  else{
    searchPosts.forEach((post) => {
      // console.log(post);
      const postcard = document.createElement("div");
      postcard.classList =
        "flex border-2 border-gray-500 rounded-3xl bg-slate-200 py-8 px-12";
      postcard.innerHTML = `
                <div class="relative">
                <img class="w-20 h-20 me-6 rounded-lg" src=${
                  post.image
                } alt="img" />
                <div class="absolute -top-2 -right-2 md:right-4 w-6 h-6 ${
                  post.isActive == true ? "bg-green-500" : "bg-red-500"
                } rounded-full border-2 border-slate-200"></div></div>
               
                   <div id="content-details" class="space-y-4 ms-2 md:ms-0">
                    <div class="flex flex-col md:flex-row text-gray-800">
                      <p>#${post.category}</p>
                      <p class="md:ms-4">Authore : ${post.author?.name}</p>
                    </div>
                    <h2 class="text-2xl font-bold">${post.title}</h2>
                    <p class="border-b-2 border-dashed border-gray-600 pb-6 text-gray-500">
                      ${post.description}
                    </p>
                    <div class="flex">
                      <a href=""><i class="fa-regular fa-comment"></i> ${
                        post.comment_count
                      }</a>
                      <a class="ms-4" href=""><i class="fa-regular fa-eye"></i> ${
                        post.view_count
                      }</a>
                      <a class="grow ms-4" href=""
                        ><i class="fa-regular fa-clock"></i
                      > ${post.posted_time}</a>
                      <button onclick="handleRead('${post.title}', '${
        post.view_count
      }')"><i class="fa-regular fa-envelope bg-green-500 text-white p-2 rounded-full"></i></button>
                    </div>
                  </div>
          `;
      postContainer.appendChild(postcard);
    });
  }
  
};

const handleRead = (title, view) => {
  //  read count
  const readCountBox = document.getElementById("read-count");
  const readBoxText = readCountBox.innerText;
  const readBoxTextInt = parseInt(readBoxText);
  readCountBox.innerText = readBoxTextInt + 1;

  // display title and view count
  const readContainer = document.getElementById("title-container");
  const readPost = document.createElement("div");
  readPost.classList =
    "my-2 flex justify-between items-center p-4 rounded-xl bg-slate-200";
  readPost.innerHTML = `
    <h2 class="text-xl">${title}</h2>
    <p class="text-gray-500"><i class="fa-regular fa-eye"></i> ${view}</p>
   `;
  readContainer.appendChild(readPost);
};

// search post
const loadPostBySearch = async() => {
  const searchBox = document.getElementById("search-box");
  const searchText = searchBox.value;
  const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${searchText}`);
  const data = await res.json();
  const searchPosts = data.posts;
  displayPost(searchPosts)

};
loadPost();
