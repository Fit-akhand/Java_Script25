const promiseOne = new Promise(function (resolve, reject) {
  // do an async taks\
  //db calls cryptography ,network
  setTimeout(function () {
    console.log(`async task is complete`);
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log(`Promise complete`);
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log(`async task two 2`);
    resolve();
  }, 1000);
}).then(function () {
  console.log(`async 2 complete`);
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "chai", email: "akhandrajsingh@google.com" });
  }, 1000);
});
promiseThree.then(function (username) {
  console.log(username);
});

const promisefour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "akhand", password: "123" });
    } else {
      reject(`something went wrong`);
    }
  }, 1000);
});

promisefour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then(function (username) {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => console.log("the promise is either resolve and reject"));

const promisefive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "java script", password: "123" });
    } else {
      reject(`JS : something went wrong`);
    }
  }, 1000);
});

//   async function consumePromiseFive() {
//     const response = await promisefive
//     console.log(response)
//   }
//   consumePromiseFive()

async function consumePromiseFive() {
  try {
    const response = await promisefive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumePromiseFive();

//   async function getAllUser() {
//     try {
//         const response =await fetch('https://jsonplaceholder.typicode.com/users')
//         const data=await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log(`E:${error}`)
//     }
//   }
//   getAllUser();

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    // console.log("jason print ho raha")
    // console.log(response)
    return response.json();
  })
  .then((data) => {
    // console.log(`DATA PRINT HO RAHA`)
    console.log(data);
  })
  .catch();