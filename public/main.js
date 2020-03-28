var trash = document.getElementsByClassName("fa-trash");
var likeShow = document.getElementsByClassName("likeShow");

Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const showName= this.parentNode.parentNode.childNodes[1].innerText
        console.log(showName)
        fetch('deleteShow', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'showName': showName
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});

  Array.from(likeShow).forEach(function(element) {
    element.addEventListener('click', function(event){
        const showName = this.parentNode.parentNode.childNodes[1].innerText
        console.log(element)
        const userName = event.target.getAttribute('name')
        console.log(userName);
        fetch('like', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'showName': showName,
            'userName': userName
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
    });
  })
