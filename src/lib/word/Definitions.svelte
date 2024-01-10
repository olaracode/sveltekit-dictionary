<script>
  export let definition;
</script>

<li class="list-disc">
  <p class="text-sm">{definition.definition}</p>
  {#if definition.example}
    <p class="text-gray-500 dark:text-white text-sm italic ml-2">
      {definition.example}
    </p>
  {/if}
</li>
