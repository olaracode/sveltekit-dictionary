<script>
  import Dropdown from "./Dropdown.svelte";
  import ThemeToggler from "./ThemeToggler.svelte";
</script>

<nav class="w-[90vw] mx-auto md:max-w-[732px] py-8 lg:max-w-[1000px]">
  <div class="flex justify-between">
    <a href="/">
      <i class="fa-solid fa-book-bookmark w-6 h-6 text-gray-300"></i>
    </a>
    <div class="flex gap-2">
      <Dropdown />
      <div class="border-l-2 border-gray-300" />
      <ThemeToggler />
    </div>
  </div>
</nav>
