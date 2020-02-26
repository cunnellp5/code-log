// const postsPromise = fetch('');

// postsPromise
//     .then(data => data.json())
//     .then((data => { console.log(data) }))
//     .catch(error => { console.error(error) })

const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(Error('error will robinsont'));
    }, 1000)
});

p
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error)
    })