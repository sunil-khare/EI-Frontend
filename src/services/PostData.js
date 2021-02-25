export function PostData(type, method, userData) {
  let baseUrl = "http://localhost:3001/"

  return new Promise((resolve, reject) => {
    //Post Method Initiate
    if (method === 'POST') {
      let postData= {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'content-type': 'application/json'
        },
        body: JSON.stringify(userData)

      }
      fetch(baseUrl + type, postData)
        .then((response) => response.json())
        .then((res) => {
          resolve(res);
        })
        .catch((error) => {
          reject(error);
        });

    } else if (method === 'GET') {  // GET Method Initiat
      fetch(baseUrl + type)
        .then((response) => response.json())
        .then((res) => {
          resolve(res);
        })
        .catch((error) => {
          reject(error);
        });
    }
  })
}