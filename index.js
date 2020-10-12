<<<<<<< HEAD
// Add your code here
=======
>>>>>>> 1a6c939b4c799ee83317c0a6663b0749bebf25da
function submitData(name, email) {
    let formData = {
        name,
        email
    }

    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify(formData)
    }

    return fetch('http://localhost:3000/users', configObj) 
    .then(function(response) {
        return response.json();
      })
    .then(function(object) {
    document.body.innerHTML = `${object.id}`;
    })
    .catch(function(error) {
<<<<<<< HEAD
        document.body.innerHTML = `${error}`;
      });
    
    
}






=======
    document.body.innerHTML = `${error}`;
  });
    
}
>>>>>>> 1a6c939b4c799ee83317c0a6663b0749bebf25da
