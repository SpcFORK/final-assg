const main = document.querySelector('main');
const sp = new URLSearchParams(location.search);

function ShopItem(key, name, image, description, released) {
  return Object.assign(document.createElement('li'), {
    classList: ['shopItem'],
    innerHTML: `
      <figure><a id="fa" href="./product.html?name=${key}" target="_top">
        <span>${name}</span>
        <img src="${image}" alt="${name}">
        <figcaption>
          <p>${description}</p>
          <small>Released: ${released}</small>
        </figcaption>
      </a></figure>
    `,
  });
}

const shopItems = ShopJSONS.then(r => Object.entries(r).reduce(
  (acc, [key, { name, description, image, released }]) =>
    (acc.append(ShopItem(key, name, image, description, released)), acc),
  Object.assign(document.createElement('ul'), { classList: ['shopItems'] })
))

shopItems.then((r) => {
  main.append(r)
})