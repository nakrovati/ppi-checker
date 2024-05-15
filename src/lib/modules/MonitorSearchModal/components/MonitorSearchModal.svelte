<script lang="ts">
  import type { Display } from "$lib/shared/services/db";

  import { X } from "$icons";
  import Button from "$lib/components/ui/Button.svelte";
  import Dialog from "$lib/components/ui/Dialog.svelte";
  import { trpc } from "$lib/shared/services/trpc/client";
  import debounce from "just-debounce-it";

  import MonitorSearchModalItem from "./MonitorSearchModalItem.svelte";

  export let isDialogOpen: boolean;
  let displays: Display[] = [];
  let inputValue: string = "";

  const searchDisplays = debounce(async () => {
    displays = inputValue.trim()
      ? await trpc().monitors.search.query(inputValue)
      : [];
  }, 300);
</script>

<Dialog bind:open={isDialogOpen}>
  <div>
    <input
      bind:value={inputValue}
      class="peer h-12 w-full rounded-t py-1 pl-2 pr-14 transition-colors focus:bg-zinc-500 focus:text-white focus:outline-none"
      on:input={searchDisplays}
      placeholder="Enter the monitor or device model"
      type="text"
    />

    <Button
      aria-label="Close the modal"
      class="absolute right-0 top-0 flex size-12 items-center justify-center border-none transition-colors focus:bg-zinc-500 focus:text-white focus:outline-none peer-focus:text-white"
      on:click={() => (isDialogOpen = !isDialogOpen)}
      type="button"
    >
      <X />
    </Button>
  </div>

  {#if displays.length}
    <ul class="max-h-full overflow-y-scroll rounded bg-white">
      {#each displays as display}
        <MonitorSearchModalItem {display} highlightText={inputValue} />
      {/each}
    </ul>
  {:else}
    <div class="px-2 py-1">No monitors found</div>
  {/if}
</Dialog>
