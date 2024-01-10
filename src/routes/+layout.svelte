<script>
  import Navbar from "../lib/navbar/Navbar.svelte";
  import { onMount, setContext } from "svelte";
  import { writable } from "svelte/store";
  import { browser } from "$app/environment";

  export const themeStore = writable("light");
  export const typographyStore = writable("font-mono");
  $: if (browser)
    document.body.className = `${$themeStore} ${$typographyStore}`;

  onMount(() => {
    let theme = localStorage.getItem("theme") || "light";
    let fontType = localStorage.getItem("fontType") || "font-mono";
    typographyStore.set(fontType);
    themeStore.set(theme);
  });
  setContext("themeStore", themeStore);
  setContext("typographyStore", typographyStore);
</script>

<div class="dark:bg-slate-900 dark:text-white min-h-screen">
  <Navbar />
  <slot />
</div>
