<script lang="ts">
  import { MagnifyingGlass } from "$icons";
  import { MonitorSearchModal } from "$lib/modules/MonitorSearchModal";

  import Button from "../ui/Button.svelte";

  let isDialogOpen = false;
</script>

<header class="border-b-[1px] border-zinc-300 bg-white">
  <div
    class="mx-auto flex max-w-screen-xl items-center justify-between px-2 py-4"
  >
    <a href="/">Home</a>
    <Button
      aria-label="Search display"
      on:click={() => (isDialogOpen = true)}
      type="button"
    >
      <MagnifyingGlass class="size-5"></MagnifyingGlass>
    </Button>
  </div>
</header>

<MonitorSearchModal bind:isDialogOpen></MonitorSearchModal>
