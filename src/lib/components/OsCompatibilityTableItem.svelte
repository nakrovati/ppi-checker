<script lang="ts">
  import PhCheckBold from "$lib/icons/PhCheckBold.svelte";
  import PhXBold from "$lib/icons/PhXBold.svelte";

  export let osName: string;
  export let compatibilityStatus: boolean;
</script>

<div>
  <span>{osName}</span>
  <hr />
  {#if compatibilityStatus}
    <PhCheckBold class="mr-2 inline-block text-green-700"></PhCheckBold><span
      class="font-bold text-green-700">Yes</span
    >
  {:else}
    <PhXBold class="mr-2 inline-block"></PhXBold><span class="font-bold"
      >No</span
    >
  {/if}
</div>
