<script lang="ts">
  import { page } from "$app/stores";
</script>

<div class="mt-6 flex flex-col items-center gap-4">
  <h1 class="text-5xl font-bold">{$page.status}</h1>
  <p>{$page.error?.message}</p>
  <a
    class="rounded bg-black px-4 py-2 text-white transition-colors hover:bg-gray-800"
    href="/">Go to home</a
  >
</div>
