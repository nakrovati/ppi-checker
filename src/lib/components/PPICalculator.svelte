<script lang="ts">
  import Input from "$lib/components/ui/Input.svelte";
  import { calculatePPI, round } from "$lib/utils";
  import { onMount } from "svelte";

  let horizontalResolution: number;
  let verticalResolution: number;
  let diagonal: number;
  let diagonalInCM: number;
  let ppi: number;

  const INCHES_TO_CM_RATIO = 2.54;

  $: ppi = calculatePPI({ diagonal, horizontalResolution, verticalResolution });

  $: diagonalInCM = !diagonal ? 0 : round(diagonal * INCHES_TO_CM_RATIO);

  onMount(() => {
    horizontalResolution = window.screen.width * window.devicePixelRatio;
    verticalResolution = window.screen.height * window.devicePixelRatio;
    diagonal = 22;
  });
</script>

<form
  class="flex flex-col gap-2 bg-white border-default rounded-md p-4 relative"
>
  <div class="grid sm:grid-cols-3 items-center">
    <label for="horizontal-resolution">Horizontal resolution:</label>
    <Input bind:value={horizontalResolution} id="horizontal-resolution" />
    <span class="sm:pl-2">Pixels</span>
  </div>

  <div class="grid sm:grid-cols-3 items-center mt-1">
    <label for="vertical-resolution">Vertical resolution:</label>
    <Input bind:value={verticalResolution} id="vertical-resolution"></Input>
    <span class="sm:pl-2">Pixels</span>
  </div>

  <div class="grid sm:grid-cols-3 items-center mt-1">
    <label for="diagonal">Diagonal:</label>
    <Input bind:value={diagonal} id="diagonal" />
    <span class="sm:pl-2">Inches ({diagonalInCM}cm)</span>
  </div>

  <div class="text-lg font-bold">
    Display size: <span class="text-red-700">{ppi}</span> PPI
  </div>
</form>
