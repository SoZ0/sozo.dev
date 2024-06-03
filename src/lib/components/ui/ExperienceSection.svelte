<script lang="ts">

    export let style = "rounded-md p-2 m-2 h-full divide-y-4"

</script>
<!-- LOAD CSS -->
<div class="hover:bg-secondary-400 bg-secondary-500 hover:fill-secondary-500 hover:bg-primary-400 bg-primary-500 hover:fill-primary-500 hover:bg-tertiary-400 bg-tertiary-500 hover:fill-tertiary-500 w-0 h-0 absolute"/>
<div class={style}>
    <center> <h1 class="h2 font-bold"> <slot name="title"/> </h1> </center>
	<slot></slot>
</div>
<style>

</style>