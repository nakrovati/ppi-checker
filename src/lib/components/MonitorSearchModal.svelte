<script lang="ts">
  import type { DisplaysList } from "$lib/types/models";

  import MonitorSearchModalItem from "$lib/components/MonitorSearchModalItem.svelte";
  import PhXBold from "$lib/icons/PhXBold.svelte";
  import { trpc } from "$lib/trpc/client";
  import debounce from "just-debounce-it";

  export let showModal: boolean;
  let dialog: HTMLDialogElement;
  let displays: DisplaysList = [];
  let inputValue: string = "";

  $: if (dialog && showModal) dialog.showModal();

  const searchDisplays = debounce(async () => {
    displays = !inputValue.trim()
      ? []
      : await trpc().findMonitors.query(inputValue);
  }, 300);
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog
  class="w-full mt-24 rounded open:animate-zoom bg-transparent open:backdrop:animate-fade backdrop:bg-opacity-30 backdrop:bg-black"
  bind:this={dialog}
  on:close={() => (showModal = false)}
  on:click|self={() => dialog.close()}
>
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div
    on:click|stopPropagation
    class="flex flex-col h-full max-h-[75dvh] w-full bg-white rounded relative max-w-lg mx-auto"
  >
    <div>
      <!-- svelte-ignore a11y-autofocus -->
      <input
        autofocus
        placeholder="Enter the monitor or device model"
        type="text"
        bind:value={inputValue}
        on:input={searchDisplays}
        class="w-full peer focus:bg-zinc-500 focus:outline-none rounded-t transition-colors focus:text-white py-1 h-12 pl-2 pr-14"
      />

      <button
        class="w-12 peer-focus:text-white focus:bg-zinc-500 focus:outline-none focus:text-white h-12 flex items-center justify-center absolute top-0 right-0 transition-colors"
        on:click={() => dialog.close()}
        type="button"
        aria-label="Close the modal"><PhXBold></PhXBold></button
      >
    </div>

    {#if displays.length}
      <ul class="max-h-full overflow-y-scroll bg-white rounded">
        {#each displays as display}
          <MonitorSearchModalItem {display} highlightText={inputValue}
          ></MonitorSearchModalItem>
        {/each}
      </ul>
    {:else}
      <div class="px-2 py-1">No monitors found</div>
    {/if}
  </div>
</dialog>
