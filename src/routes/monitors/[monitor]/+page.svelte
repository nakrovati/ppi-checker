<script lang="ts">
  import OsCompatibilityTable from "$lib/components/OsCompatibilityTable.svelte";
  import { calculatePPI } from "$lib/utils";

  import type { PageServerData } from "./$types";

  export let data: PageServerData;

  const ppi = calculatePPI({
    diagonal: data.diagonal,
    horizontalResolution: data.resolution.height,
    verticalResolution: data.resolution.width,
  });
</script>

<svelte:head>
  <title>{data.name} | PPI Calculator</title>
  <meta content={`${data.name} display options`} name="description" />
</svelte:head>

<div class="mx-auto max-w-screen-md">
  <h1 class="text-4xl font-extrabold">{data.name}</h1>
  <div
    class="border-default mt-4 grid gap-2 rounded p-2 xs:grid-cols-2 xs:gap-4"
  >
    <div>
      <div>{data.resolution.width}x{data.resolution.height}</div>
      <div class="text-lg font-bold">
        PPI: <span class="text-red-700">{ppi}</span>
      </div>
    </div>
    <OsCompatibilityTable bind:data></OsCompatibilityTable>
  </div>
</div>
