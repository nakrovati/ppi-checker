<script lang="ts">
  import PPICalculator from "$lib/components/PPICalculator.svelte";
</script>

<svelte:head>
  <title>PPI calculator</title>
  <meta
    name="description"
    content="PPI Calculator: Easily determine pixel density of your device screen. Input screen size and resolution to get PPI in a snap. Fast & user-friendly!"
  />
</svelte:head>

<h1 class="text-4xl font-extrabold mb-4">DPI / PPI Calculator</h1>
<PPICalculator />
