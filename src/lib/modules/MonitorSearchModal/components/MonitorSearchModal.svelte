<script lang="ts">
  import type { Display } from "$lib/shared/services/db";

  import { X } from "$icons";
  import { trpc } from "$lib/shared/services/trpc/client";
  import debounce from "just-debounce-it";

  import MonitorSearchModalItem from "./MonitorSearchModalItem.svelte";

  export let showModal: boolean;
  let dialog: HTMLDialogElement;
  let displays: Display[] = [];
  let inputValue: string = "";

  $: if (dialog && showModal) dialog.showModal();

  const searchDisplays = debounce(async () => {
    displays = inputValue.trim()
      ? await trpc().monitors.search.query(inputValue)
      : [];
  }, 300);
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog
  bind:this={dialog}
  class="mt-24 w-full rounded bg-transparent backdrop:bg-black backdrop:bg-opacity-30 open:animate-zoom open:backdrop:animate-fade"
  on:click|self={() => dialog.close()}
  on:close={() => (showModal = false)}
>
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div
    class="relative mx-auto flex max-h-[75dvh] w-full max-w-lg flex-col rounded bg-white"
    on:click|stopPropagation
  >
    <div>
      <!-- svelte-ignore a11y-autofocus -->
      <input
        autofocus
        bind:value={inputValue}
        class="peer h-12 w-full rounded-t py-1 pl-2 pr-14 transition-colors focus:bg-zinc-500 focus:text-white focus:outline-none"
        on:input={searchDisplays}
        placeholder="Enter the monitor or device model"
        type="text"
      />

      <button
        aria-label="Close the modal"
        class="absolute right-0 top-0 flex h-12 w-12 items-center justify-center transition-colors focus:bg-zinc-500 focus:text-white focus:outline-none peer-focus:text-white"
        on:click={() => dialog.close()}
        type="button"><X></X></button
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
