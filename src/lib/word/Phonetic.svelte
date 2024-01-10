<script>
  export let src;
  let audio;
</script>

<button
  class="py-5 px-7 text-purple-700 bg-purple-300 rounded-full"
  on:click={audio.play()}
>
  <i class="fa-solid fa-play"></i>
</button>
<audio {src} bind:this={audio} />
