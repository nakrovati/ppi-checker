<script>
  export let text = "";
  export let highlightText = "";
</script>

<span>
  {#each text.split(new RegExp(`(${highlightText})`, "gi")) as part, i}
    {#if i % 2 === 0}
      {part}
    {:else}
      <mark class="bg-yellow-300">{part}</mark>
    {/if}
  {/each}
</span>
