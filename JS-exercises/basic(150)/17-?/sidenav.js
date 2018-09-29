let main = document.createElement('main');
let divtitle = document.createElement('div');
let divwrap = document.createElement('div');

main.setAttribute('id', 'sideNav')
divtitle.setAttribute('id', 'title')
divtitle.innerText = 'Navigate:'
divwrap.setAttribute('id', 'wrap')
divwrap.innerHTML=`
  <a href="#17">17</a>
  <a href="#18">18</a>
  <a href="#19">19</a>
  <a href="#20">20</a>
  <a href="#21">21</a>
  <a href="#22">22</a>
  <a href="#23">23</a>
  <a href="#24">24</a>`

main.append(divtitle, divwrap)
var body = document.getElementsByTagName('body')[0]
body.append(main);
