<script lang="ts">
  import type { Display } from "$lib/types/models";

  import {
    calculatePPI,
    isDisplayCompatibleWithLinux,
    isDisplayCompatibleWithMacOS,
    isDisplayCompatibleWithWindows,
  } from "$lib/utils";

  import OsCompatibilityTableItem from "./OSCompatibilityTableItem.svelte";

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
    osName="MacOS"
    compatibilityStatus={isCompatibleWithMacOS}
  ></OsCompatibilityTableItem>
  <OsCompatibilityTableItem
    osName="Linux"
    compatibilityStatus={isCompatibleWithLinux}
  ></OsCompatibilityTableItem>
  <OsCompatibilityTableItem
    osName="Windows"
    compatibilityStatus={isCompatibleWithWindows}
  ></OsCompatibilityTableItem>
</div>
