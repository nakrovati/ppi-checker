<script lang="ts">
  import PPICalculator from "$lib/components/PPICalculator.svelte";
</script>

<svelte:head>
  <title>PPI calculator</title>
  <meta
    content="PPI Calculator: Easily determine pixel density of your device screen. Input screen size and resolution to get PPI in a snap. Fast & user-friendly!"
    name="description"
  />
</svelte:head>

<h1 class="mb-4 text-4xl font-extrabold">DPI / PPI Calculator</h1>
<PPICalculator />
