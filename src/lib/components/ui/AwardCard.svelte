<script lang="ts">

  import ArrowUpFrightFromSquare from "../icons/ArrowUpFrightFromSquare.svelte";
  export let title: string = "Title"
  export let date: string = "date"
</script>


<div class="card variant-ghost-tertiary w-1/3 min-h-[10em] flex flex-row px-4 pt-4 gap-4 relative">
    <div class="absolute right-0 pr-4">
       {date}
    </div>
    <div class="bg-tertiary-500 w-[8em] h-[8em] items-center justify-center flex rounded-md p-2">
        <slot name="icon"/>
    </div>
    <div class="flex-grow relative">
        <div class="flex-col flex-grow pt-2 divide-y ">
            <div>
                <strong class="h2">{title}</strong>
            </div>
            <div class="pt-4">
                <slot/>
            </div>
            
        </div>
    </div>
    
    
</div>