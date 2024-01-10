import { get } from "svelte/store";

async function getWordFromDictionary(word, customFetch) {
    const res = await customFetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`
    );
    if (res.status === 404) throw new Error("Word not found");
    if (res.status !== 200) throw new Error("There has been an error");
    return await res.json();
  }
  

export async function load({ params, url, fetch }) {
    const searchParams = url.searchParams.get("search");
    const word = await getWordFromDictionary(searchParams || "hello", fetch);
    return {
        word: word
    }
}