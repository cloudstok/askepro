// const GetRequest = (url) => {
//   return fetch(url, {
//     method: ""
//   }).then(response => {
//     if (response.ok) {
//       return response.json();
//     }
//     throw response;
//   })
//   .then(data => {
//     setData(data);
//   })
//   .catch(error => {
//     throw error;
//   });
// };

const PostRequest = (url, bData) => {  
  return fetch(url, {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(bData),
  })
  .then((response) => { 
    return response.json().then((data) => {
        return data;
    }).catch((err) => {
        console.log(err);
    });
  });
};

export {
  PostRequest
};