<script lang="ts">
  export let value: number;
  export let placeholder: string = "";
  export let id: string = "";
</script>

<input
  bind:value
  {placeholder}
  {id}
  class="border-default rounded py-1 px-2"
  type="number"
/>
