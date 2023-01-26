// function change() {
  // var buttons = document.getElementsByClassName("likeBtn");
  // for (var i = 0; i < buttons.length; i++) {
  //   var button = buttons[i];
  //   if (button.innerHTML === "Like") {
  //     button.innerHTML = "Unlike";
  //     button.style.color = "red";
  //   } else {
  //     button.innerHTML = "Like";
  //     button.style.color = "initial";
  //   }
  // }
  function change(btn) {
    let react = btn.querySelector('.react');
    if(react.innerHTML === 'Like'){
        react.innerHTML = 'Liked';
        react.style.color = 'blue';
        btn.style.backgroundColor = 'lightblue';
    }else{
        react.innerHTML = 'Like';
        react.style.color = 'black';
        btn.style.backgroundColor = 'white';
    }
}

let likeBtns = document.querySelectorAll('.likeBtn');
likeBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
        change(btn);
    });
});




// // Create a new post
// function createPost() {
//     var postText = document.querySelector(".post-text").value;
//     if (postText) {
//       // Add post to the list of posts
//       var postList = document.querySelector(".post-list");
//       var newPost = document.createElement("div");
//       newPost.innerHTML = postText;
//       newPost.classList.add("post");
//       postList.appendChild(newPost);
  
//       // Clear the input field
//       document.querySelector(".post-text").value = "";
  
//       // Add edit and delete buttons to the new post
//       var editBtn = document.createElement("button");
//       editBtn.innerHTML = "Edit";
//       editBtn.onclick = function() {
//         editPost(newPost);
//       };
//       newPost.appendChild(editBtn);
  
//       var deleteBtn = document.createElement("button");
//       deleteBtn.innerHTML = "Delete";
//       deleteBtn.onclick = function() {
//         deletePost(newPost);
//       };
//       newPost.appendChild(deleteBtn);
//     }
//   }
  
//   // Edit a post
//   function editPost(post) {
//     var newText = prompt("Enter new post text:");
//     if (newText) {
//       post.innerHTML = newText;
//     }
//   }
  
//   // Delete a post
//   function deletePost(post) {
//     post.remove();
//   }
  

//   // create post function
//   function createPost() {
//     // get post text
//     var postText = document.querySelector('.post-text').value;

//     // create new post element
//     var newPost = document.createElement('div');
//     newPost.classList.add('post-text');
//     newPost.innerHTML = postText;

//     // create edit button
//     var editBtn = document.createElement('button');
//     editBtn.innerHTML = "Edit";
//     editBtn.onclick = function() {
//       editPost(newPost);
//     }

//     // create delete button
//     var deleteBtn = document.createElement('button');
//     deleteBtn.innerHTML = "Delete";
//     deleteBtn.onclick = function() {
//       deletePost(newPost);
//     }

//     // append elements to post list
//     var postList = document.querySelector('.post-list');
//     postList.appendChild(newPost);
//     postList.appendChild(editBtn);
//     postList.appendChild(deleteBtn);

//     // clear post text input
//     document.querySelector('.post-text').value = "";
//   }

//   // edit post function
//   function editPost(post) {
//     // get new post text
//     var newPostText = prompt("Enter new post text:");

//     // update post text
//     post.innerHTML = newPostText;
//   }

//   // delete post function
//   function deletePost(post) {
//     var postList = document.querySelector('.post-list');
//     postList.removeChild(post);
//   }


  // create post function
  function createPost() {
    // get post text
    var postText = document.querySelector('.post-text').value;

    // create new post element
    var newPost = document.createElement('div');
    newPost.classList.add('post-text');
    newPost.innerHTML = postText;

    // create edit button
    var editBtn = document.createElement('button');
    editBtn.innerHTML = "Edit";
    editBtn.classList.add('edit-btn');
    editBtn.onclick = function() {
      editPost(newPost);
    }

    // create delete button
    var deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = "Delete";
    deleteBtn.classList.add('delete-btn');
    deleteBtn.onclick = function() {
      deletePost(newPost);
    }

    // append elements to post list
    var postList = document.querySelector('.post-list');
    postList.appendChild(newPost);
    postList.appendChild(editBtn);
    postList.appendChild(deleteBtn);

    // clear post text input
    document.querySelector('.post-text').value = "";
  }

  // edit post function
  function editPost(post) {
    // get new post text
    var newPostText = prompt("Enter new post text:");

    // update post text
    post.innerHTML = newPostText;
  }

  // delete post function
  function deletePost(post) {
    var postList = document.querySelector('.post-list');
    postList.removeChild(post);
  }

