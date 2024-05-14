<script lang="ts">
  import { MagnifyingGlass } from "$icons";
  import { MonitorSearchModal } from "$lib/modules/MonitorSearchModal";

  let showModal = false;
</script>

<header class="border-b-[1px] border-zinc-300 bg-white">
  <div
    class="mx-auto flex max-w-screen-xl items-center justify-between px-2 py-4"
  >
    <a href="/">Home</a>
    <button
      aria-label="Search display"
      on:click={() => (showModal = true)}
      type="button"
    >
      <MagnifyingGlass class="h-auto w-5"></MagnifyingGlass>
    </button>
  </div>
</header>

<MonitorSearchModal bind:showModal></MonitorSearchModal>
