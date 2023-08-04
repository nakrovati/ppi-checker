<script lang="ts">
  import MonitorSearchModal from "$lib/components/MonitorSearchModal.svelte";
  import PhMagnifyingGlassBold from "$lib/icons/PhMagnifyingGlassBold.svelte";

  let showModal = false;
</script>

<header class="border-b-[1px] border-zinc-300 bg-white">
  <div
    class="py-4 px-2 max-w-screen-xl mx-auto flex items-center justify-between"
  >
    <a href="/">Home</a>
    <button
      on:click={() => (showModal = true)}
      type="button"
      aria-label="Search display"
    >
      <PhMagnifyingGlassBold class="w-5 h-auto"></PhMagnifyingGlassBold>
    </button>
  </div>
</header>

<MonitorSearchModal bind:showModal></MonitorSearchModal>
