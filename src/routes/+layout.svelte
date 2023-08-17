<script>
  import { dev } from "$app/environment";
  import Footer from "$lib/components/layout/Footer.svelte";
  import Header from "$lib/components/layout/Header.svelte";
  import { inject } from "@vercel/analytics";

  import "../app.css";

  inject({ mode: dev ? "development" : "production" });
</script>

<div class="flex min-h-[100dvh] flex-col gap-4">
  <Header />
  <main class="mx-auto w-full max-w-screen-xl flex-1 px-2">
    <slot />
  </main>
  <Footer />
</div>
