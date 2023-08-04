<script lang="ts">
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
  <meta name="description" content={`${data.name} display options`} />
</svelte:head>

<div class="max-w-screen-md mx-auto">
  <h1 class="font-extrabold text-4xl">{data.name}</h1>
  <div class="rounded border-default p-2 mt-4">
    <div>{data.resolution.width}x{data.resolution.height}</div>
    <div class="text-lg font-bold">
      PPI: <span class="text-red-700">{ppi}</span>
    </div>
  </div>
</div>
