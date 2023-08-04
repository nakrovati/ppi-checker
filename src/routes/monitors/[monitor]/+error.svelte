<script lang="ts">
  import { page } from "$app/stores";
</script>

<div class="mt-6 flex flex-col gap-4 items-center">
  <h1 class="text-5xl font-bold">{$page.status}</h1>
  <p>{$page.error?.message}</p>
  <a
    class="bg-black py-2 px-4 text-white rounded hover:bg-gray-800 transition-colors"
    href="/">Go to home</a
  >
</div>
