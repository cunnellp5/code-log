

    const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];
    function makeGreen() {
      const p = document.querySelector('p');
      p.style.color = '#BADA55';
      p.style.fontSize = '50px';
    }
    // Regular
    console.log('hello');
    // Interpolated
    console.log('hello i am a %s string!', '👻');
    // Styled
    console.log('%c hello i am a styled text!', 'font-size: 50px; background:red; text-shadow: 10px 10px 0 blue');
    // warning!
    console.warn('O NO')
    // Error :|
    console.error('shoo dang')
    // Info
    console.info('crocodiles eat people');
    // Testing
    const p = document.querySelector('p');
    console.assert(p.classList.contains('ouch'), 'that is wrong');
    // console.assert(i === 1, 'that is wrong');
    // clearing
    console.clear()
    // Viewing DOM Elements
    console.log(p)
    console.dir(p)
    console.clear()
    // Grouping together
    dogs.forEach((dog) => {
      console.group(`${dog.name}`); // || console.groupCollapsed(`${dog.name}`)
      console.log(`this is ${dog.name} years old`)
      console.log(`${dog.name} is ${dog.age} years old`)
      console.groupEnd(`${dog.name}`);
    })
    // counting
    console.count('wes')
    console.count('wes')
    console.count('wes')
    console.count('wes')
    console.count('wes')
    console.count('steve')
    console.count('steve')
    console.count('wes')
    console.count('steve')
    console.count('steve')
    console.count('steve')
    console.count('steve')
    console.count('steve')
    console.count('steve')
    console.count('steve')
    console.count('steve')
    console.count('steve')
    // timing

    console.time('fetching data');
    fetch('https://api.github.com/users/wesbos')
      .then(data => data.json)
      .then(data => {
        console.timeEnd('fetching data')
        console.log(data)
      })


  // table

  console.table(dogs)
