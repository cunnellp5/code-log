const postsPromise = fetch('');

postsPromise
    .then(data => data.json())
    .then((data => { console.log(data) }))
    .catch(error => { console.error(error) })
