<script lang="ts">
  import type { Display } from "$lib/shared/services/db";

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
    class="block px-2 py-1 transition-colors focus:bg-zinc-500 focus:text-white focus:outline-none"
    {href}
    ><HightlightText {highlightText} text={display.name}></HightlightText></a
  >
</li>
