<script lang="ts">

  import ArrowUpFrightFromSquare from "../icons/ArrowUpFrightFromSquare.svelte";
    export let title: string = "title";
    export let place: string = "place";
</script>



<div class="card variant-ghost-secondary p-4 flex gap-4 hover:p-8 h-fit transition-all group hover:bg-secondary-700">

    <div class="border-secondary-500 border-2 rounded-full flex md:w-[6em] md:h-[6em] w-[8em] h-[6em] items-center justify-center  ">
         <slot name="icon"/>
    </div>
    <div class="flex flex-col">
        <div class="flex flex-col divide-y mb-4">
            <div class="font-bold group-hover:text-2xl transition-all">
                {title}
            </div>
            <div>
                {place}
            </div>
        </div>
        <div class="text-sm w-full">
           <slot/>
        </div>
    </div>
    
</div>