document.addEventListener("DOMContentLoaded", function () {
  // Load Header
  fetch("header.html")
    .then(function (response) {
      return response.text();
    })
    .then(function (data) {
      const headerElement = document.querySelector("header");
      if (headerElement) {
        headerElement.innerHTML = data;
      }
    });

  // Load Footer
  fetch("footer.html")
    .then(function (response) {
      return response.text();
    })
    .then(function (data) {
      const footerElement = document.querySelector("footer");
      if (footerElement) {
        footerElement.innerHTML = data;
      }
    });

  // Load Blog Posts
  const blogList = document.getElementById("blog-list");
  if (blogList) {
    fetch("data/posts.json")
      .then(function (response) {
        return response.json();
      })
      .then(function (posts) {
        posts.forEach(function (post) {
          const postElement = document.createElement("article");
          postElement.className = "blog-post";
          postElement.innerHTML =
            "<h2>" + post.title + "</h2>" +
            "<small>Posted on " + post.date + "</small>" +
            "<p>" + post.content + "</p>";
          blogList.appendChild(postElement);
        });
      });
  }
});
