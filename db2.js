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
        // Get post text
        const postText = document.querySelector('.post-text').value;
      
        // Create the new post object
        const newPost = { text: postText };
      
        // Send post object to the database
        fetch(USERS_URL + EXT, {
          method: 'POST',
          body: JSON.stringify(newPost)
        })
          .then(response => response.json())
          .then(data => {
            console.log('Success:', data);
      
            // Create new post element
            const newPostEl = document.createElement('div');
            newPostEl.classList.add('post-text');
            newPostEl.innerHTML = postText;
      
            // Create edit button
            function editPost(postEl) {
              const newPostText = prompt("Enter new post text:");
              if (newPostText) {
                postEl.innerHTML = newPostText;
      
                // Update post object in the database
                fetch(USERS_URL + EXT, {
                  method: 'PUT',
                  body: JSON.stringify({ text: newPostText })
                })
                  .then(response => response.json())
                  .then(data => {
                    console.log('Post updated:', data);
                  })
                  .catch(error => console.error('Error:', error));
              }
            }
      
            const editBtn = document.createElement('button');
            editBtn.innerHTML = "Edit";
            editBtn.classList.add('edit-btn');
            editBtn.addEventListener("click", () => {
              editPost(newPostEl);
            });
      
            // Implement deletePost function
            function deletePost(postEl) {
              if (confirm("Are you sure you want to delete this post?")) {
                // Delete post object from the database
                fetch(USERS_URL + EXT, {
                  method: 'DELETE'
                })
                  .then(response => response.json())
                  .then(data => {
                    console.log('Post deleted:', data);
                    postEl.remove();
                  })
                  .catch(error => console.error('Error:', error));
              }
            }
      
            const deleteBtn = document.createElement('button');
            deleteBtn.innerHTML = "Delete";
            deleteBtn.classList.add('delete-btn');
            deleteBtn.addEventListener("click", () => {
              deletePost(newPostEl);
            });
      
            // Create container for post, editBtn and deleteBtn
            const postContainer = document.createElement('div');
            postContainer.appendChild(newPostEl);
            postContainer.appendChild(editBtn);
            postContainer.appendChild(deleteBtn);
      
            // Append container to post list
            const postList = document.querySelector('.post-list');
            postList.appendChild(postContainer);
      
            // Clear post text input
            document.querySelector('.post-text').value = "";
          })
          .catch(error => console.error('Error:', error));
           }
