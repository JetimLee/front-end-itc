const blogPost = {
  title: "my title",
  body: "my body",
  author: "your mama",
  views: "over 9000",
  comments: [{ author: "some dude", body: "another post" }],
  isLive: true,
};
console.log(blogPost);

function Blog(title, body, author) {
  (this.title = title),
    (this.body = body),
    (this.author = author),
    (this.views = 0),
    (this.comments = []),
    (this.isLive = false);
}

const myBlogPost = new Blog(
  "chipotle is great",
  "chipotle is great, omg",
  "Gavin Coulson",
  10000,
  [{ author: "bobby", body: "i do love chipotle" }],
  true
);
console.log(myBlogPost);
