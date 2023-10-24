<script lang="ts">
  import type { Display } from "$lib/types/models";

  import {
    calculatePPI,
    isDisplayCompatibleWithLinux,
    isDisplayCompatibleWithMacOS,
    isDisplayCompatibleWithWindows,
  } from "$lib/utils";

  import OsCompatibilityTableItem from "./OsCompatibilityTableItem.svelte";

  export let data: Display;

  const ppi = calculatePPI({
    diagonal: data.diagonal,
    horizontalResolution: data.resolution.height,
    verticalResolution: data.resolution.width,
  });

  $: isCompatibleWithMacOS = isDisplayCompatibleWithMacOS(data, ppi);
  $: isCompatibleWithLinux = isDisplayCompatibleWithLinux(data, ppi);
  $: isCompatibleWithWindows = isDisplayCompatibleWithWindows(data);
</script>

<div class="grid grid-cols-3 gap-x-4">
  <OsCompatibilityTableItem
    compatibilityStatus={isCompatibleWithMacOS}
    osName="MacOS"
  ></OsCompatibilityTableItem>
  <OsCompatibilityTableItem
    compatibilityStatus={isCompatibleWithLinux}
    osName="Linux"
  ></OsCompatibilityTableItem>
  <OsCompatibilityTableItem
    compatibilityStatus={isCompatibleWithWindows}
    osName="Windows"
  ></OsCompatibilityTableItem>
</div>
