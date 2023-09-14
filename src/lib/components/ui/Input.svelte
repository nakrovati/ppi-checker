<script lang="ts">
  export let value: number;
  export let placeholder: string = "";
  export let id: string = "";
</script>

<input
  bind:value
  class="border-default rounded px-2 py-1"
  {id}
  {placeholder}
  type="number"
/>
