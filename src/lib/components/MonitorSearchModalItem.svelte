<script lang="ts">
  import type { Display } from "$lib/types/models";

  import HightlightText from "$lib/components/HightlightText.svelte";

  export let display: Display;
  export let highlightText: string;

  const encodedDisplayName = encodeURIComponent(
    display.name.toLocaleLowerCase().replaceAll(" ", "-"),
  );
  const href = `/monitors/${encodedDisplayName}`;
</script>

<li>
  <a
    class="px-2 py-1 block focus:bg-zinc-500 focus:outline-none focus:text-white transition-colors"
    {href}
    ><HightlightText text={display.name} {highlightText}></HightlightText></a
  >
</li>
