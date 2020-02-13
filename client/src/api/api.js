const api = "http://localhost:3001"


// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token;

if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8);

const headers = {
  'Accept': 'application/json',
  'Authorization': token,
  'Content-Type': 'application/json'
};

export const getCategories = () =>
  fetch(`${api}/categories/`, { headers })
    .then(response => response.json())
    .then(data => data.categories);

/* POSTS */
export const getPost = (postId) =>
  fetch(`${api}/posts/${postId}`, { headers })
    .then(response => response.json());

export const getPostsFromCategory = async (categoryPath) => {
  if (categoryPath) {
    const response = await fetch(`${api}/${categoryPath}/posts`, { headers });
    return await response.json();
  } else {
    const response_1 = await fetch(`${api}/posts`, { headers });
    return await response_1.json();
  }
};

export const addPost = async (post) => {
  const body = JSON.stringify(post);

  const response = await fetch(`${api}/posts/`, { method: 'POST', headers, body });
  return await response.json();
};

export const updatePost = async (post) => {
  const body = JSON.stringify(post);

  const response = await fetch(`${api}/posts/${post.id}`, { method: 'PUT', headers, body });
  return await response.json();
};

export const votePost = async (postId, option) => {
  const body = JSON.stringify({ option });

  const response = await fetch(`${api}/posts/${postId}`, { method: 'POST', headers, body });
  return await response.json();
};

export const deletePost = (postId) => {
  return fetch(`${api}/posts/${postId}`, { method: 'DELETE', headers });
};



/* COMMENTS */
export const getCommentsFromPost = (postId) =>
  fetch(`${api}/posts/${postId}/comments`, { headers })
    .then(response => response.json());

export const voteComment = async (commentId, option) => {
  const body = JSON.stringify({ option });

  const response = await fetch(`${api}/comments/${commentId}`, { method: 'POST', headers, body });
  return await response.json();
};

export const addComment = async (comment) => {
  const body = JSON.stringify(comment);

  const response = await fetch(`${api}/comments/`, { method: 'POST', headers, body });
  return await response.json();
};

export const updateComment = async (comment) => {
  const body = JSON.stringify(comment);

  const response = await fetch(`${api}/comments/${comment.id}`, { method: 'PUT', headers, body });
  return await response.json();
};

export const deleteComment = async (commentId) => {
  const response = await fetch(`${api}/comments/${commentId}`, { method: 'DELETE', headers });
  return await response.json();
};