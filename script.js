const loadPost = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/retro-forum/posts"
  );
  const data = await res.json();
  const posts = data.posts;
  displayPost(posts);
};

const displayPost = (posts) => {
  const postContainer = document.getElementById("content-div");
  posts.forEach((post) => {
    console.log(post);
    const postcard = document.createElement("div");
    postcard.classList =
      "flex border-2 border-gray-500 rounded-3xl bg-slate-200 py-8 px-12";
    postcard.innerHTML = `
        <img class="w-20 h-20 me-6 rounded-lg" src=${post.image} alt="img" />
                <div id="content-details" class="space-y-4">
                  <div class="flex flex-col md:flex-row text-gray-800">
                    <p>#${post.category}</p>
                    <p class="md:ms-4">Authore : ${post.author?.name}</p>
                  </div>
                  <h2 class="text-2xl font-bold">${post.title}</h2>
                  <p class="border-b-2 border-dashed border-gray-600 pb-6 text-gray-500">
                    ${post.description}
                  </p>
                  <div class="flex">
                    <a href=""><i class="fa-regular fa-comment"></i> ${post.comment_count}</a>
                    <a class="ms-4" href=""><i class="fa-regular fa-eye"></i> ${post.view_count}</a>
                    <a class="grow ms-4" href=""
                      ><i class="fa-regular fa-clock"></i
                    > ${post.posted_time}</a>
                    <a href=""><i class="fa-regular fa-envelope bg-green-500 text-white p-2 rounded-full"></i></a>
                  </div>
                </div>
        `;
    postContainer.appendChild(postcard);
  });
};
loadPost();
