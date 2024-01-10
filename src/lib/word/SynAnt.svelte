<script>
  export let title;
  export let list;
</script>

<div class="mt-4">
  <h4 class="mb-1 text-gray-500 dark:text-white">{title}:</h4>
  <ul class="flex flex-wrap gap-4 text-gray-700 dark:text-white">
    {#each list as s}
      <li>
        <a
          href={`?search=${s}`}
          class="text-sm capitalize text-purple-700 dark:text-purple-300 hover:underline"
        >
          {s}
        </a>
      </li>
    {/each}
  </ul>
</div>
