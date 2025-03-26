// Helper function to make an XMLHttpRequest (AJAX request)

document.getElementById("btn").addEventListener("click",function(){



function ReqSender(url, callback) {
   let xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onload = function() {
        if (xhr.status === 200) {
            callback(JSON.parse(xhr.responseText));
        } else {
            console.error("Error fetching data from", url);
        }
    };
    xhr.send();
}

// Helper function to fetch a random user image from randomuser.me API
function fetchImage(callback) {
    ReqSender('https://randomuser.me/api/', function(response) {
        callback(response.results[0].picture.large);
    });
}

// Fetching data from all APIs
function fetchData() {
    // Fetch users data
    ReqSender('https://jsonplaceholder.typicode.com/users', function(users) {
        // Fetch posts data
        ReqSender('https://jsonplaceholder.typicode.com/posts', function(posts) {
            // Fetch comments data
            ReqSender('https://jsonplaceholder.typicode.com/comments', function(comments) {

                // Now fetch a random user image for each card
                let num =document.getElementById("num").value;
                users.slice(0, num).forEach(function(user) {

                    fetchImage(function(userImage) {

                        // Find a post written by this user
                       let userPost = posts.find(post => post.userId === user.id);
                        // Find a comment on this post
                       let  postComment = comments.find(comment => comment.postId === userPost.id);

                        // Create the card element dynamically
                        createCard(user, userPost, postComment, userImage);
                    });
                });
            });
        });
    });
}

// Create and display the combined card
function createCard(user, userPost, postComment, userImage) {
    let container = document.getElementById("card-container");
    // let loadingMessage = document.getElementById("loading");
    // Hide loading message after data is ready

     
     
    container.innerHTML += `
    <div class="card">
        <img src="${userImage}" alt="${user.name} profile picture">
        <h3>${user.name}</h3>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>City:</strong> ${user.address.city}</p>
        <p><strong>Post Title:</strong> ${userPost.title}</p>
        <p>${userPost.body}</p>
        <p><strong>Comment:</strong> ${postComment.body}</p> </div>
    `;

     
}

// Initialize fetching of data
fetchData();
})