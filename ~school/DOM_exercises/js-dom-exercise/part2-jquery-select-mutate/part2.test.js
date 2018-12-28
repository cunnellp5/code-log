window.onload = function() {
  var assert = chai.assert;
  var expect = chai.expect;
  mocha.setup('tdd');

  suite('basic dom select and mutate', function () {

    function usesJQuery(fn) {
      return fn.toString().match(/\$\(/gi) ?  false : true;
    }

    test("it gets text by id", function () {
      assert.isFalse(usesJQuery(getTextById), 'Function must use jQuery!');
      assert.strictEqual(getTextById('title'), 'Hello, World!');
      assert.strictEqual(getTextById('subtitle'), 'What a beautiful day!');
    });

    test("it sets text by id", function () {
      assert.isFalse(usesJQuery(setTextById), 'Function must use jQuery!');
      setTextById('title', 'Goodbye, World!');
      setTextById('subtitle', 'Farewell!');
      assert.strictEqual(document.getElementById('title').textContent, 'Goodbye, World!');
      assert.strictEqual(document.getElementById('subtitle').textContent, 'Farewell!');
    });

    test("it gets text by className", function () {
      assert.isFalse(usesJQuery(getTextByClassName), 'Function must use jQuery!');
      assert.strictEqual(getTextByClassName('subtitle'), 'How are you today?');
      assert.strictEqual(getTextByClassName('words'), 'This is a sentence.');
    });

    test("it sets text by className", function () {
      assert.isFalse(usesJQuery(setTextByClassName), 'Function must use jQuery!');
      setTextByClassName('subtitle', 'Goodbye, World!');
      setTextByClassName('words', 'Another sentence here now.');
      assert.strictEqual(document.getElementsByClassName('subtitle')[0].textContent, 'Goodbye, World!');
      assert.strictEqual(document.getElementsByClassName('words')[0].textContent, 'Another sentence here now.');
    });

    test("it adds a class by id", function () {
      assert.isFalse(usesJQuery(addClassById), 'Function must use jQuery!');
      addClassById('the-truth', 'is-out-there');
      assert.isTrue(document.getElementById('the-truth').classList.contains('is-out-there'));
    });

    test("it gets a value by name", function () {
      assert.isFalse(usesJQuery(getValueByName), 'Function must use jQuery!');
      getValueByName('email');
      assert.strictEqual(getValueByName('email'), 'hello@world.com');
    });

    test("it sets a value by name", function () {
      assert.isFalse(usesJQuery(setValueByName), 'Function must use jQuery!');
      setValueByName('email', 'nope@nope.com');
      assert.strictEqual(document.getElementsByName('email')[0].value, 'nope@nope.com');
    });

    test("it hides by class name", function () {
      assert.isFalse(usesJQuery(hideByClassName), 'Function must use jQuery!');
      hideByClassName('hide-me');
      let elements = document.getElementsByClassName('hide-me');

      for (var i = 0; i < elements.length; i++) {
        assert.strictEqual(elements[i].style.display, 'none');
      }
    });

    test("it styles by class name", function () {
      assert.isFalse(usesJQuery(setStyleByClassName), 'Function must use jQuery!');
      setStyleByClassName('style-me', 'color', 'red');
      setStyleByClassName('style-me', 'background', 'black');
      setStyleByClassName('style-me', 'fontSize', '10px');

      let elements = document.getElementsByClassName('style-me');

      for (var i = 0; i < elements.length; i++) {
        assert.strictEqual(elements[i].style.color, 'red');
        assert.strictEqual(elements[i].style.background, 'black');
        assert.strictEqual(elements[i].style.fontSize, '10px');
      }
    });
  });

  mocha.run();
};
