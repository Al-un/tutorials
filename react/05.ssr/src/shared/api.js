import fetch from 'isomorphic-fetch';

export function fetchPopularRepos(language = 'all') {
  const encodedURI = encodeURI(
    `https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`
  );
  console.log(`[RepoFetch] Fetching for ${language} with URI ${encodedURI}`);

  return fetch(encodedURI)
    .then(data => {
      console.log(`[RepoFetch] response from ${data.url}`);
      return data.json();
    })
    .then(repos => {
      console.log(`[RepoFetch] Returned ${repos.items.length} repos`);
      return repos.items;
    })
    .catch(error => {
      console.log(`[RepoFetch] Error: ${error}`);
      console.warn(error);
      return null;
    });
}
