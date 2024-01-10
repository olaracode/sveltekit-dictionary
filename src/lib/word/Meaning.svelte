<script>
  import Definitions from "./Definitions.svelte";
  import SynAnt from "./SynAnt.svelte";
  export let meaning;
  $: allSynonyms = meaning.definitions.map((d) => d.synonyms).flat();
  $: allAntonyms = meaning.definitions.map((d) => d.antonyms).flat();
</script>

<div class="my-5">
  <div class="flex items-center gap-6 mb-2">
    <h3 class="font-bold text-lg capitalize">{meaning.partOfSpeech}</h3>
    <hr class="flex-grow" />
  </div>
  <h4 class="mb-1 text-gray-500 dark:text-white">Meanings:</h4>
  <ul class="grid gap-4 ml-6 text-gray-700 dark:text-white">
    {#each meaning.definitions as definition}
      <Definitions {definition} />
    {/each}
  </ul>
  {#if allSynonyms.length > 0}
    <SynAnt title="Synonyms" list={allSynonyms} />
  {/if}
  {#if allAntonyms.length > 0}
    <SynAnt title="Antonyms" list={allAntonyms} />
  {/if}
</div>
