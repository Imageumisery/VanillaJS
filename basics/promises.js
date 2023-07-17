function delay(ms) {
    // return new Promise((resolve, reject) => {
    //     setTimeout(() => resolve('some value'), ms);
    // });
    return new Promise(resolve => setTimeout(resolve, ms));
}

// delay(5000).then(() => console.log('выполнилось через 5 секунды'));


function loadJson(url) {
    return fetch(url)
        .then(response => response.json());
}

function loadGithubUser(name) {
    return fetch(`https://api.github.com/users/${name}`)
        .then(response => response.json());
}

function showAvatar(githubUser) {
    return new Promise(function (resolve, reject) {
        let img = document.createElement('img');
        img.src = githubUser.avatar_url;
        img.className = "promise-avatar-example";
        document.body.append(img);

        setTimeout(() => {
            img.remove();
            resolve(githubUser);
        }, 3000);
    });
}

//   loadJson('/article/promise-chaining/user.json')
//     .then(user => loadGithubUser(user.name))
//     .then(showAvatar)
//     .then(githubUser => alert(`Показ аватара ${githubUser.name} завершён`));
// fetch(`https://api.github.com/users/Imageumisery`)
// .then(response => response.json())
// .then(result => console.log(result))

// Then step 2 is cut the fruit(2 seconds),
// step 3 is add water and ice(1 second),
// step 4 is to start the machine(1 second),
// step 5 is to select the container(2 seconds),
// step 6 is to select the toppings(3 seconds)
// and step 7, the final step, is to serve the ice cream which takes 2 seconds.


let names = ['iliakan', 'remy', 'jeresig'];

let requests = names.map(name => fetch(`https://api.github.com/users/${name}`));

Promise.all(requests)
    .then(responses => {
        // все промисы успешно завершены
        for (let response of responses) {
            console.log(`${response.url}: ${response.status}`); // покажет 200 для каждой ссылки
        }

        return responses;
    })
    // преобразовать массив ответов response в response.json(),
    // чтобы прочитать содержимое каждого
    .then(responses => Promise.all(responses.map(r => r.json())))
    // все JSON-ответы обработаны, users - массив с результатами
    .then(users => users.forEach(user => console.log(user.name)));

let promise = Promise.resolve();

promise.then(() => console.log("промис выполнен"));

console.log("код выполнен");

// await будет ждать массив с результатами выполнения всех промисов
// let results = await Promise.all([
//   fetch(url1),
//   fetch(url2),
//   ...
// ]);