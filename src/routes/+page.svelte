<script>
  import "../app.css";
  import Word from "../lib/word/Word.svelte";
  export let data;
</script>

<div class="w-[90vw] mx-auto md:max-w-[732px] py-8 lg:max-w-[1000px]">
  <Word word={data.word} />
</div>
