<script>
  import Meaning from "./Meaning.svelte";
  import Phonetic from "./Phonetic.svelte";
  export let word = [];

  function findMatch(objects, key) {
    const foundObject = objects.find((obj) => obj.hasOwnProperty(key));
    return foundObject[key] || null;
  }
  function findFirstText(objects) {
    const foundObject = objects.find((obj) => obj.hasOwnProperty("text"));
    return foundObject ? foundObject.text : null;
  }
</script>

<div class="w-full">
  {#each word as item}
    <div class="w-full mb-10">
      <div class="flex justify-between items-center w-full">
        <div>
          <h2 class="font-bold text-3xl capitalize">{item.word}</h2>
          <p class="text-purple-700 dark:text-purple-300 text-lg">
            {findMatch(item.phonetics, "text")}
          </p>
        </div>
        {#if findMatch(item.phonetics, "audio")}
          <Phonetic src={findMatch(item.phonetics, "audio")} />
        {:else}
          <button
            class="py-5 px-7 text-purple-700 bg-purple-300 rounded-full disabled:cursor-not-allowed disabled:opacity-50"
            disabled
          >
            <i class="fa-solid fa-play"></i>
          </button>
        {/if}
      </div>
    </div>
    {#each item.meanings as meaning}
      <Meaning {meaning} />
    {/each}
  {/each}
</div>
