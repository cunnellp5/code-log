const dict = {
    HTML:'Hyper Text Markup Language',
    CSS: 'Castcading Style Sheets',
    JS: 'JavaScript'
};

function addAbbreviations(strings, ...values) {
    const abbreviated = values.map((value) => {
        if(dict[value]) {
            return `<abbr title="${dict[value]}">${value}</abbr>`;
        }
        return value;
    })

    return strings.reduce((sentence, string, i) => {
        return `${sentence}${string}${abbreviated[i] || ''}`
    }, '')
}

const first = 'phil'
const last = 'cunnell'

const sentence = addAbbreviations`hello my name is ${first} ${last} and i love to code ${'HTML'}, ${'CSS'} and ${'JS'}`;

const bio = document.querySelector('.bio');
const p = document.createElement('p');
p.innerHTML = sentence;
bio.appendChild(p);