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


