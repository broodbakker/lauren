const lunr = require('lunr');
// const posts = require('./data.json');
// const index = require('./index.json')

const numberOfResults = 5

const handler = async (event: any) => {
  // try {
  // const inputUser: string = event.queryStringParameters.search;

  // if (!inputUser) throw ('Missing term query parameter');

  // const postsIndexedForSearch = lunr.Index.load(index);

  // //const formattedSearch = formatSearch(postsIndexedForSearch, inputUser, numberOfResults)

  // const results = postsIndexedForSearch.search(inputUser)

  // results.forEach((r: any) => {
  //   r.name = posts[r.ref].name;
  //   r.description = posts[r.ref].description;
  //   r.slug = posts[r.ref].slug;
  //   r.category = posts[r.ref].category;
  // });

  //   return {
  //     statusCode: 200,
  //     body: JSON.stringify(results),

  //   }
  // } catch (error: any) {
  //   return { statusCode: 500, body: error.toString() }
  // }
}
export { handler };

export const formatSearch = (data: any, searchInputUser: string, amountofResults: number): string[] => {

  if (searchInputUser === "") return []

  const results = data.search(searchInputUser)

  const refs = results.map((result: any) => { return result.ref })
  const titles = refs.splice(0, amountofResults)

  return titles
}