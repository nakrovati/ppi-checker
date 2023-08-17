<script lang="ts">
  import MonitorSearchModal from "$lib/components/MonitorSearchModal.svelte";
  import PhMagnifyingGlassBold from "$lib/icons/PhMagnifyingGlassBold.svelte";

  let showModal = false;
</script>

<header class="border-b-[1px] border-zinc-300 bg-white">
  <div
    class="mx-auto flex max-w-screen-xl items-center justify-between px-2 py-4"
  >
    <a href="/">Home</a>
    <button
      on:click={() => (showModal = true)}
      type="button"
      aria-label="Search display"
    >
      <PhMagnifyingGlassBold class="h-auto w-5"></PhMagnifyingGlassBold>
    </button>
  </div>
</header>

<MonitorSearchModal bind:showModal></MonitorSearchModal>
