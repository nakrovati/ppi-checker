<script lang="ts">
  import { Check, X } from "$lib/shared/assets/icons";

  export let osName: string;
  export let compatibilityStatus: boolean;
</script>

<div>
  <span>{osName}</span>
  <hr />
  {#if compatibilityStatus}
    <Check class="mr-2 inline-block text-green-700"></Check><span
      class="font-bold text-green-700">Yes</span
    >
  {:else}
    <X class="mr-2 inline-block"></X><span class="font-bold">No</span>
  {/if}
</div>
