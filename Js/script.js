const posts = [
    {
      titulo: "Como montar sua loja virtual do zero",
      resumo: "Veja os passos essenciais para começar a vender online.",
      link: "post-loja-virtual.html"
    },
    
    {
        titulo: "5 dicas para aumentar suas vendas no Instagram",
        resumo: "Use o poder das redes sociais para crescer seu e-commerce.",
        link: "post-instagram.html"
      }
      
  ];
  
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
  