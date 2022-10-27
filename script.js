function login(event){
    //Codigo da funcao fetch, obtida de: 
    //https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#uploading_json_data

    event.preventDefault() //previne o botao submit de recarregar a pagina

    const data = {
        "email": document.getElementById("email-input").value,
        "password": document.getElementById("password-input").value,
    };

    //"email": "eve.holt@reqres.in",
    //"password": "cityslicka"

    fetch('https://reqres.in/api/login', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);
            
            if(!data.error){
                //Caso nao haja erro no login, ira aparecer a barra de pesquisa:
                localStorage.setItem("token", data.token);

                document.getElementById("searchbar").classList.add("turnvisible");
                document.getElementById("logout-button").classList.add("turnvisible");
                document.getElementById("form-login").classList.add("turninvisible");
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
        
}

function logout(){
    localStorage.removeItem("token");
    document.getElementById("form-login").classList.add("turnvisible");
    document.getElementById("logout-button").classList.add("turninvisible");

    window.location.reload();
}

if(localStorage.getItem("token") != null) {
    document.getElementById("searchbar").classList.add("turnvisible");
    document.getElementById("form-login").classList.add("turninvisible");
}


// const xhr = new XMLHttpRequest();
//     xhr.open("POST", "https://reqres.in/api/login", true);

//     //Send the proper header information along with the request
//     xhr.setRequestHeader("Content-Type", "application/json");

//     xhr.onreadystatechange = () => {
//       // Call a function when the state changes.
//       if (xhr.readyState === XMLHttpRequest.DONE) {
//         let response = JSON.parse(xhr.responseText);
//         console.log(response);
//         if ("token" in response) {
//            //logado
//           localStorage.setItem("token", response.token);
//         } else {
//           //not logado
//         }
//       }
//     };
//     xhr.send(JSON.stringify({ email, password }));