<script lang="ts">

  import ArrowUpFrightFromSquare from "../icons/ArrowUpFrightFromSquare.svelte";
  export let title: string = "Title"
</script>


<div class="card variant-ghost-primary md:w-1/3 w-full min-h-[10em] flex flex-row px-4 pt-4 gap-4 relative">
    <div class="absolute right-0 pr-4">
        <!-- <ArrowUpFrightFromSquare height="1.5em" width="1.5em"/> -->
    </div>
    <div class="h-full md:flex-none md:items-start flex items-center">
        <div class="bg-primary-500 md:w-[8em] md:h-[8em] w-20 h-fit p-4 md:p-0 items-center justify-center flex rounded-md">
            <slot name="icon"/>
        </div>
    </div>
    <div class="flex-grow relative">
        <div class="flex-col flex-grow md:pt-2 divide-y ">
            <div>
                <strong class="h2">{title}</strong>
            </div>
            <div class="pt-4">
                <slot/>
            </div>
            
        </div>
        <div class="bottom-0 absolute w-full gap-1 overflow-auto h-10 flex">

            <slot name="chips"/>
           
        </div>
    </div>
    
    
</div>