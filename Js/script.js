
  
  const container = document.getElementById("postsContainer");
  
  posts.forEach(post => {
    const div = document.createElement("div");
    div.classList.add("post");
    div.innerHTML = `
      <h3>${post.titulo}</h3>
      <p>${post.resumo}</p>
      <a href="${post.link}">Leia mais</a>
    `;
    container.appendChild(div);
  });
  