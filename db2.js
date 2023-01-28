
  
const USERS_URL = "https://social-media-mock-up-default-rtdb.firebaseio.com/newPost";
const EXT = `.json`;

  
  
  function change(btn) {
    let react = btn.querySelector('.react');
    if(react.innerHTML === 'Like'){
        react.innerHTML = 'Liked';
        react.style.color = 'blue';
        btn.style.backgroundColor = 'purple';
    }else{
        react.innerHTML = 'Like';
        react.style.color = 'black';
        btn.style.backgroundColor = 'goldenrod';
    }
}

let likeBtns = document.querySelectorAll('.likeBtn');
likeBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
        change(btn);
    });
});




function createPost() {
  // get post text
  var postText = document.querySelector('.post-text').value;

  //create the new post object
  var newPost = {text: postText};

  // send post object to the database
  fetch(USERS_URL + EXT, {
      method: 'POST',
      body: JSON.stringify(newPost)
  })
  .then(response => response.json())
  .then(data => {
      console.log('Success:', data);
      // create new post element
      var newPostEl = document.createElement('div');
      newPostEl.classList.add('post-text');
      newPostEl.innerHTML = postText;

      // create edit button
      let editBtn = document.createElement('button');
      editBtn.innerHTML = "Edit";
      editBtn.classList.add('edit-btn');
      editBtn.onclick = function() {
        editPost(newPostEl);
      }

      // create delete button
      let deleteBtn = document.createElement('button');
      deleteBtn.innerHTML = "Delete";
      deleteBtn.classList.add('delete-btn');
      deleteBtn.onclick = function() {
        deletePost(newPostEl);
      }

      //create container for post, editBtn and deleteBtn
      let postContainer = document.createElement('div');
      postContainer.appendChild(newPostEl);
      postContainer.appendChild(editBtn);
      postContainer.appendChild(deleteBtn);

      // append container to post list
      let postList = document.querySelector('.post-list');
      postList.appendChild(postContainer);

      // clear post text input
      document.querySelector('.post-text').value = "";
  })
  .catch(error => console.error('Error:', error));
}


// function createPost() {
//     // get post text
//     var postText = document.querySelector('.post-text').value;
  
//     // create new post element
//     var newPost = document.createElement('div');
//     newPost.classList.add('post-text');
//     newPost.innerHTML = postText;
  
//     // create edit button
//     let editBtn = document.createElement('button');
//     editBtn.innerHTML = "Edit";
//     editBtn.classList.add('edit-btn');
//     editBtn.onclick = function() {
//       editPost(newPost);
//     }
  
//     // create delete button
//     let deleteBtn = document.createElement('button');
//     deleteBtn.innerHTML = "Delete";
//     deleteBtn.classList.add('delete-btn');
//     deleteBtn.onclick = function() {
//       deletePost(newPost);
//     }
  
//     //create container for post, editBtn and deleteBtn
//     let postContainer = document.createElement('div');
//     postContainer.appendChild(newPost);
//     postContainer.appendChild(editBtn);
//     postContainer.appendChild(deleteBtn);
  
//     // append container to post list
//     let postList = document.querySelector('.post-list');
//     postList.appendChild(postContainer);
  
//     // clear post text input
//     document.querySelector('.post-text').value = "";
//   }
//   function deletePost(post) {
//     let postList = document.querySelector('.post-list');
//     postList.removeChild(post.parentNode);
// }
// function editPost(post) {
//     // get new post text
//     var newPostText = prompt("Enter new post text:");
//     // update post text
//     post.innerHTML = newPostText;
//   }