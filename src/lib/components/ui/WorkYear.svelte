<script lang="ts">

    export let year: string = "year"
</script>

<div class="col-start-1 h-full relative flex items-center justify-end">
    <div class="bg-white rounded-full absolute h-8 w-8 right-0"/>
    <div class="border-r-4 mr-4 p-4 h-full  items-center justify-end flex">
   
        <strong class="pr-4">
            {year}
        </strong>
    </div>
</div>

<div class="flex flex-row items-center gap-4 col-start-2 col-span-2 w-fit justify-start border-b-2 py-4 border-dashed">
    <div class="relative">
        <div class="flex gap-4 pl-4">
            <slot/>
        </div>
    </div>
</div>