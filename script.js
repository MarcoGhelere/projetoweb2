


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