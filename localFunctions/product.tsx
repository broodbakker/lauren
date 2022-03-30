import fs from 'fs'
import { join } from 'path';
import matter from 'gray-matter';

import { remark } from 'remark';
import html from 'remark-html';

import { Product, SnipCartButton } from "../typescript"

export const ProductToSnipcartData = (props: Product): SnipCartButton => ({
  className: "snipcart-add-item",
  "data-item-id": props.slug,
  "data-item-price": props.price,
  "data-item-url": props.slug,
  "data-item-description": props.description,
  "data-item-image": props.image[0],
  "data-item-name": props.name
})

export const getProducts = (path: string) => {
  const slugs = importProductSlugs(path)

  const products = slugs.map((slug) => getProductBySlug(slug, path).frontMatter)

  return products
}

const putSlugInProductData = (slug: string, product: any) => ({ ...product, slug })

const importProductSlugs = (filePath: string) => fs
  .readdirSync(filePath)
  // Remove file extensions for page paths
  .map((path) => path.replace(/\.mdx?$/, ''))

export const importStaticSlugs = (filePath: string) =>
  importProductSlugs(filePath).map((product) => ({ params: { product } }));

export interface FrontMatter {
  [prop: string]: string;
}

export interface MarkdownDocument {
  frontMatter: FrontMatter;
  content: string;
}

export const getProductBySlug = (
  slug: string,
  productsPath: string
): MarkdownDocument => {

  const postFilePath = join(productsPath, `${slug}.md`);
  const fileContents = fs.readFileSync(postFilePath);

  const { data, content } = matter(fileContents);

  const test = putSlugInProductData(slug, data)

  return {
    frontMatter: { ...test, date: changeDate(test.date) },
    content,
  };
};

const changeDate = (date: any) => Math.floor(date / 1000).toString()

export async function markdownToHtml(markdown) {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}

export const renderMarkdown = async (
  markdownContent: string
): Promise<string> => {
  return await markdownToHtml(markdownContent || '');
};