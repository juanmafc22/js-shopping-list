/*

JSON = JavaScript Object Notation
---------------------------------

- JSON is a lightweight data interchange format.
- JSON is language-independent.
- JSON is easy for humans to read and write.
- JSON is easy for machines to parse and generate.
- JSON is based on JavaScript object syntax, but JSON is text only.
- For example Github has a public API that returns JSON data.

    Example:
    [
        {
          "login": "mojombo",
          "id": 1,
          "node_id": "MDQ6VXNlcjE=",
          "avatar_url": "https://avatars.githubusercontent.com/u/1?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/mojombo",
          "html_url": "https://github.com/mojombo",
          "followers_url": "https://api.github.com/users/mojombo/followers",
          "following_url": "https://api.github.com/users/mojombo/following{/other_user}",
          "gists_url": "https://api.github.com/users/mojombo/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/mojombo/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/mojombo/subscriptions",
          "organizations_url": "https://api.github.com/users/mojombo/orgs",
          "repos_url": "https://api.github.com/users/mojombo/repos",
          "events_url": "https://api.github.com/users/mojombo/events{/privacy}",
          "received_events_url": "https://api.github.com/users/mojombo/received_events",
          "type": "User",
          "user_view_type": "public",
          "site_admin": false
        },
        {
          "login": "defunkt",
          "id": 2,
          "node_id": "MDQ6VXNlcjI=",
          "avatar_url": "https://avatars.githubusercontent.com/u/2?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/defunkt",
          "html_url": "https://github.com/defunkt",
          "followers_url": "https://api.github.com/users/defunkt/followers",
          "following_url": "https://api.github.com/users/defunkt/following{/other_user}",
          "gists_url": "https://api.github.com/users/defunkt/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/defunkt/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/defunkt/subscriptions",
          "organizations_url": "https://api.github.com/users/defunkt/orgs",
          "repos_url": "https://api.github.com/users/defunkt/repos",
          "events_url": "https://api.github.com/users/defunkt/events{/privacy}",
          "received_events_url": "https://api.github.com/users/defunkt/received_events",
          "type": "User",
          "user_view_type": "public",
          "site_admin": false
        },
        {
          "login": "pjhyett",
          "id": 3,
          "node_id": "MDQ6VXNlcjM=",
          "avatar_url": "https://avatars.githubusercontent.com/u/3?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/pjhyett",
          "html_url": "https://github.com/pjhyett",
          "followers_url": "https://api.github.com/users/pjhyett/followers",
          "following_url": "https://api.github.com/users/pjhyett/following{/other_user}",
          "gists_url": "https://api.github.com/users/pjhyett/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/pjhyett/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/pjhyett/subscriptions",
          "organizations_url": "https://api.github.com/users/pjhyett/orgs",
          "repos_url": "https://api.github.com/users/pjhyett/repos",
          "events_url": "https://api.github.com/users/pjhyett/events{/privacy}",
          "received_events_url": "https://api.github.com/users/pjhyett/received_events",
          "type": "User",
          "user_view_type": "public",
          "site_admin": false
        },
    ]

- The difference between JSON and JavaScript object literals is that JSON is a string
- JavaScript object literals are JavaScript objects.
- In JSON the keys must be strings, and the values must be valid JSON data types.

- We can also have JSON files that store data in JSON format.
- We can use JSON.stringify() to convert a JavaScript object into a JSON string.
- We can use JSON.parse() to convert a JSON string into a JavaScript object.

    Example:
    let person = {
        name: "John",
        age: 30,
        isMarried: false
    };

    // This is the date what I want to send to the server
    let personJSON = JSON.stringify(person);

    console.log(personJSON);

    let personObject = JSON.parse(personJSON);

    console.log(personObject);  
*/

const fs = require('fs');   // File System module  

const data = fs.writeFileSync('./dogs.json', 'utf-8');
const jsObjectData = JSON.parse.data;

let x;

// print out all the dogs
for (dog in jsObjectData) {
    console.log(dog);
}



console.log(x);