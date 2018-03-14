const axios = require("axios");
const fetch = require("node-fetch");

//axios
//.get("https://jsonplaceholder.typicode.com/posts/1")
//.then(response => response.data)
//.then(json => console.log(json));

//fetch("https://jsonplaceholder.typicode.com/posts/1")
//.then(response => response.json())
//.then(console.log);

const post1 = "https://jsonplaceholder.typicode.com/posts/1";
const post2 = "https://jsonplaceholder.typicode.com/posts/2";
const post3 = "https://jsonplaceholder.typicode.com/posts/3";

const fetchJSON = url => fetch(url).then(response => response.json());

const fetchURLs = [post1, post2, post3];

//Promise.race(fetchURLs.map(fetchJSON)).then(console.log);

//console.log("before");
//Promise.all(fetchURLs.map(fetchJSON)).then(console.log);
//Promise.race(fetchURLs.map(fetchJSON)).then(console.log);
//console.log("after");

const sync = async () => {
  console.log("before");
  const data = await Promise.all(fetchURLs.map(fetchJSON));
  console.log(data);
  console.log("after");
};

sync();
