const person = {
    first: 'phil',
    last: 'cunnell',
    country: 'usa',
    city: 'denvr',
    twitter: '@philbear'
}

const { first, last, twitter } = person;

const phil = {
    first: 'flip',
    last: 'bear',
    links: {
        social: {
            facebook: 'https://stuff',
            twitter: 'https://other'
        },
        web: {
            blog: 'https://philbear'
        }
    }
}

const { facebook: fb, twitter: tweet } = phil.links.social;

const settings = {
    width: 300,
    color: 'black'
} // height, font-size

// const { width = 100, height = 100, color = 'blue', fontsize = 25 } = settings;

const { w: width = 400, h: height = 500 } = { w: 800 };