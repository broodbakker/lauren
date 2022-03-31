const fs = require('fs')
const { join } = require("path")
const matter = require('gray-matter')

const lunr = require("lunr")

const search = (path) => {
  const products = getProducts(path)

  const index = createIndex(products)

  fs.writeFileSync('./shared/productData.json', JSON.stringify(products));
  fs.writeFileSync('./shared/searchIndex.json', JSON.stringify(index));
}

const createIndex = (posts) => lunr(
  function () {
    const lunrProp = lunr
    this.field("name", {
      boost: 10
    });
    this.field("content");
    this.ref('id')

    const datas = posts

    datas.map((data, index) => {
      this.add(data)
    })
  })

const getProducts = (path) => {
  const slugs = importProductSlugs(path)

  const products = slugs.map((slug) => getProductBySlug(slug, path).frontMatter)

  return products
}

const importProductSlugs = (filePath) => fs
  .readdirSync(filePath)
  // Remove file extensions for page paths
  .map((path) => path.replace(/\.mdx?$/, ''))


const getProductBySlug = (
  slug,
  productsPath
) => {

  const postFilePath = join(productsPath, `${slug}.md`);
  const fileContents = fs.readFileSync(postFilePath);

  const { data, content } = matter(fileContents);

  const test = putSlugInProductData(slug, data)

  return {
    frontMatter: { ...test, date: changeDate(test.date) },
    content,
  };
};

const putSlugInProductData = (slug, product) => ({ ...product, slug })

const changeDate = (date) => Math.floor(date / 1000).toString()

module.exports = search


