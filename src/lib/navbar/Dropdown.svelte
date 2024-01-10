<script>
  import FontToggler from "./FontToggler.svelte";
  let open = false;
  let clickedInside = false;

  function handleClickOutside() {
    if (!clickedInside) {
      open = false;
    }
    clickedInside = false;
  }

  function handleKeyDown(event) {
    if (event.key === "Escape") {
      open = false;
    }
  }
</script>

<div
  class="dropdown"
  on:click={() => (clickedInside = true)}
  on:keydown={handleKeyDown}
  aria-haspopup="true"
  aria-expanded={open}
  tabindex="0"
  role="button"
>
  <button
    on:click={() => (open = !open)}
    class="flex items-center justify-center gap-1 w-[100px] capitalize"
    >Toggle <i class="fa-solid fa-chevron-down"></i></button
  >
  {#if open}
    <div
      class="absolute z-10 w-[150px] top-16 flex flex-col gap-3 p-4 bg-white rounded-md shadow-md dark:bg-slate-600"
    >
      <FontToggler />
    </div>
  {/if}
</div>

<svelte:window on:click={handleClickOutside} />
