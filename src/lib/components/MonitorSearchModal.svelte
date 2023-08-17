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
  class="mt-24 w-full rounded bg-transparent backdrop:bg-black backdrop:bg-opacity-30 open:animate-zoom open:backdrop:animate-fade"
  bind:this={dialog}
  on:close={() => (showModal = false)}
  on:click|self={() => dialog.close()}
>
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div
    on:click|stopPropagation
    class="relative mx-auto flex h-full max-h-[75dvh] w-full max-w-lg flex-col rounded bg-white"
  >
    <div>
      <!-- svelte-ignore a11y-autofocus -->
      <input
        autofocus
        placeholder="Enter the monitor or device model"
        type="text"
        bind:value={inputValue}
        on:input={searchDisplays}
        class="peer h-12 w-full rounded-t py-1 pl-2 pr-14 transition-colors focus:bg-zinc-500 focus:text-white focus:outline-none"
      />

      <button
        class="absolute right-0 top-0 flex h-12 w-12 items-center justify-center transition-colors focus:bg-zinc-500 focus:text-white focus:outline-none peer-focus:text-white"
        on:click={() => dialog.close()}
        type="button"
        aria-label="Close the modal"><PhXBold></PhXBold></button
      >
    </div>

    {#if displays.length}
      <ul class="max-h-full overflow-y-scroll rounded bg-white">
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
