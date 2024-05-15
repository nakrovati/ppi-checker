<script lang="ts">
  import { createDialog } from "@melt-ui/svelte";
  import { fade, fly } from "svelte/transition";

  export let open = false;

  const {
    elements: { content, overlay, portalled },
    states,
  } = createDialog({
    defaultOpen: open,
    onOpenChange: ({ next }) => {
      open = next;
      return next;
    },
  });

  $: states.open.set(open);
</script>

{#if open}
  <div {...$portalled} use:portalled>
    <div
      {...$overlay}
      class="fixed inset-0 z-50 bg-black/50"
      transition:fade={{ duration: 100 }}
      use:overlay
    />
    <div
      class="fixed left-1/2 top-1/2 z-50 max-h-[85vh] w-[90vw] max-w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-md bg-white shadow-lg"
      {...$content}
      transition:fly={{ duration: 100 }}
      use:content
    >
      <div
        class="relative mx-auto flex max-h-[75dvh] w-full max-w-lg flex-col rounded bg-white"
        role="menu"
      >
        <slot />
      </div>
    </div>
  </div>
{/if}
