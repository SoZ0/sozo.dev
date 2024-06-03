<script lang="ts">
  import { Tab } from "@skeletonlabs/skeleton";

  export let group: number;
  export let name: string;
  export let value: number;

</script>

<Tab bind:group name={name} value={value}>
    <svelte:fragment slot="lead">
      <center>
        <slot/>
      </center>
    </svelte:fragment>
    <span>{name}</span>
</Tab>

