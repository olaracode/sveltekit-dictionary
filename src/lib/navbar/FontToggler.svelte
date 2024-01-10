<script>
  import { getContext } from "svelte";
  const fontTypes = [
    {
      name: "monospace",
      value: "font-mono",
    },
    {
      name: "sans-serif",
      value: "font-sans",
    },
    {
      name: "serif",
      value: "font-serif",
    },
  ];
  const typographyStore = getContext("typographyStore");

  function toggle(value) {
    localStorage.setItem("fontType", value);
    typographyStore.set(value);
  }
</script>

{#each fontTypes as fontType}
  <button
    on:click={() => toggle(fontType.value)}
    value={fontType}
    class="hover:bg-gray-200 dark:hover:bg-slate-700 rounded-md px-4 py-2 capitalize"
  >
    {fontType.name}
  </button>
{/each}
