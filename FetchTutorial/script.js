// GET
function fetchGet() {
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((err) => console.log(err));
}
// POST
function fetchPost() {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((err) => console.log(err));
}
// GET
const fetchGetAsync = async () => {
  console.log("Fetch get async");
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const body = await response.json();
    console.log("Body", body);
  } catch (err) {
    console.log(err);
  }
};

// //Obj of data to send in future like a dummyDb
// const data = { username: "example" };
// //POST request with body equal on data in JSON format
// fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST",
//   body: JSON.stringify({
//     title: "foo",
//     body: "bar",
//     userId: 1,
//   }),
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(data),
// })
//   .then((response) => response.json())
//   //Then with the data from the response in JSON...
//   .then((data) => {
//     console.log("Success:", data);
//     console.log(typeof data);
//   })
//   //Then with the error genereted...
//   .catch((error) => {
//     console.error("Error:", error);
//   });

// //Obj of data to send in future like a dummyDb
// const data = {
//   title: "foo",
//   body: "bar",
//   userId: 1,
// };
// //POST request with body equal on data in JSON format
// fetch("https://jsonplaceholder.typicode.com/posts", {
// method: "POST",
//   headers: {
//   "Content-Type": "application/json",
// },
// body: JSON.stringify(data),
// })
// .then((response) => response.json())
// //Then with the data from the response in JSON...
// .then((data) => {
//   const str = JSON.stringify(data)
//   console.log("Success:", data);
//   console.log(typeof data);
//   console.log("Success:", str);
//   console.log(typeof str);
// })
// //Then with the error genereted...
// .catch((error) => {
//   console.error("Error:", error);
// });

// POST
const fetchPostAsync = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: "foo",
        body: "bar",
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const body = await response.json();
    console.log("Body", body);
  } catch (err) {
    console.log(err);
  }
};
// PUT
const fetchPutAsync = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1",
      {
        method: "PUT",
        body: JSON.stringify({
          title: "foo",
          body: "bar",
          userId: 27,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
    const body = await response.json();
    console.log("Body", body);
  } catch (err) {
    console.log(err);
  }
};
// DELETE
const fetchDeleteAsync = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1",
      {
        method: "DELETE",
        body: JSON.stringify({
          title: "foo",
          body: "bar",
          userId: 27,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
    const body = await response.json();
    console.log("Body", body);
  } catch (err) {
    console.log(err);
  }
};
