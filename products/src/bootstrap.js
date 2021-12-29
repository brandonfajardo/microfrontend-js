import faker from 'faker' // no support for import

const mount = (el) => {
    let products = ''

    for (let i = 0; i < 3; i++) {
        const name = faker.commerce.productName()
        products += `<div>${name}</div>`
    }

    el.innerHTML = products
}
// Situation #1, running this file in development in isolation
// We are using our index.html file
// which has an element with an id of dev-products
// we want to immediately render that app in that element
if (process.env.NODE_ENV === 'development') {
    console.log('IN HERE @@@@@@@@@')
    const el = document.querySelector('#dev-products')

    if (el) {
        // probably running in isolation
        mount(el)
    }
}

// Situation #2, running this file in development or production
// through the container app 
// no guarantee that an element with an id of dev-products exist
// we do not want to try to immediately render the app
export { mount }