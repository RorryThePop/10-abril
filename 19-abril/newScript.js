const leftTrigger = document.querySelector(".triggers .left");
const rightTrigger = document.querySelector(".triggers .right");
const root = document.querySelector("#root");

let initialState = 1;

function Post(title, body) {
    this.title = title
    this.body = body
}

function FormattedPost(title, body, addInfo) {
    Post.call(this, title, body)
    this.postId = addInfo
}




function createPost(title, body, id) {
  root.innerHTML = "";
  const container = document.createElement("div");
  const newTitle = document.createElement("h3");
  const newDescription = document.createElement("p");
  container.classList.add("container");
  
  newTitle.innerText = title;
  newDescription.innerText = body;
  container.append(newTitle, newDescription);
  root.append(container);

  return new FormattedPost(title, body, id)
}

async function fetchPostsApi(postId) {
  const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error();
    }
    const data = await res.json();
    createPost(data.title, data.body, data.id);
  } catch (e) {
    console.error("Request was not sent", e);
  }
}

leftTrigger.addEventListener("click", () => {
  if (initialState >= 1) {
    // initialState = initialState - 1
    initialState--;
  }
  fetchPostsApi(initialState);
});

rightTrigger.addEventListener("click", () => {
  // initialState = initialState + 1
  initialState++;
  fetchPostsApi(initialState);
});

fetchPostsApi(initialState);
