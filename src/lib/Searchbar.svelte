<script>
  import { goto } from "$app/navigation";
  let searchQuery = "";

  function handleSearch() {
    goto(`/?search=${searchQuery}`);
  }

  function keyDown(e) {
    if (e.key === "Enter") {
      handleSearch();
    }
  }
</script>

<div class="w-[90vw] mx-auto md:max-w-[732px] py-8 lg:max-w-[1000px]">
  <div
    class="rounded w-full px-4 py-2 flex items-center justify-between bg-gray-100 dark:bg-slate-600"
  >
    <input
      bind:value={searchQuery}
      on:keydown={keyDown}
      type="text"
      placeholder="Dictionary"
      class="bg-inherit flex-grow rounded"
    />
    <button on:click={() => handleSearch()}>
      <i class="fa-solid fa-search"></i>
    </button>
  </div>
</div>
