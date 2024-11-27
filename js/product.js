void async function() {
  const main = document.querySelector('main');
  const sp = new URLSearchParams(location.search);

  const nameVal = sp.get('name');
  if (!nameVal) throw new Error('No name value');

  const product = (await ShopJSONS)[nameVal]
  if (!product) throw new Error('No product');

  // ---

  document.title = `${product.name} | Lotto Personal Computer`;

  const figure = document.createElement('figure')

  const img = Object.assign(document.createElement('img'), {
    src: product.image,
  })

  const caption = document.createElement('figcaption')

  // ---

  caption.append(
    Object.assign(document.createElement('h2'), {
      innerText: product.name,
    }),
    Object.assign(document.createElement('p'), {
      innerText: product.big_description,
    }),
    Object.assign(document.createElement('small'), {
      innerText: `Released: ${product.released}`,
    })
  )

  figure.append(img, caption)
  main.append(figure)
}()