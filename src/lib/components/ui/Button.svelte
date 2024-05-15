<script lang="ts">
  import { cn } from "$lib/shared/utils";

  export let ghost = false;
  export let type: HTMLButtonElement["type"] = "button";

  $: buttonClass = cn(
    "inline-flex items-center gap-2 rounded p-2",
    ghost ? "border border-transparent" : "border-default",
    $$props.class,
  );
</script>

<button {...$$restProps} class={buttonClass} on:click {type}>
  <slot />
</button>
