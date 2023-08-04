<script>
  import Footer from "$lib/components/layout/Footer.svelte";
  import Header from "$lib/components/layout/Header.svelte";

  import "../app.css";
</script>

<div class="flex flex-col min-h-screen gap-4">
  <Header />
  <main class="mx-auto w-full max-w-screen-xl px-2 flex-1">
    <slot />
  </main>
  <Footer />
</div>
