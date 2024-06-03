<script lang="ts">
  import ArrowUpFrightFromSquare from "$lib/components/icons/ArrowUpFrightFromSquare.svelte";

  export let link: string;
  export let name: string = "";
  export let colour: string | "primary" | "secondary" | "tertiary";
</script>

<div class="hover:bg-{colour}-400 transition-all">
  <span class="badge bg-{colour}-500 h-[10em] w-[10em] p-4">
    <slot name="icon" />
  </span>
  <span class="flex-auto">
    <dt>
      <strong class="h3">
        {name}
      </strong>
    </dt>
    <dd><slot /></dd>
  </span>
  {#if link}
    <span>
      <a href={link}>
        <ArrowUpFrightFromSquare
          width="2em"
          style="fill-white hover:fill-{colour}-500 transition-all"
        />
      </a>
    </span>
  {/if}
</div>
