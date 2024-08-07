<script>
    export let step
    export let left, middle, right

</script>

<div class={"relative group gradient-colours rounded-lg px-[1.5px] py-[1.5px] bg-pos bg-gradient-to-r transition-all duration-500 bg-size-200 hover:scale-[105%] scale-100 lg:hover:scale-[110%]" + (left ? "bg-pos-100 hover:bg-pos-0 hover:bg-size-500 from-50%" : " ") + (middle ? " to-50% hover:via-0% hover:from-0% hover:to-100%  " : " ") + (right ? "bg-pos-0 hover:bg-pos-100 to-50%" : " ")}>
    
    <a href={step.href} target="_blank" class="p-4 sm:p-6 md:p-8 flex flex-col gap-4 relative text-center  cursor-pointer z-[1] bg-transparent">
        <div class="bg-slate-950 grid place-items-center px-4 text-5xl md:text-6xl -mt-10 sm:-mt-12 md:-mt-14 lg:-mt-16 mx-auto duration-200">
            <i class={step.icon}/>
        </div>
        <h3 class="font-medium text-xl sm:text-2xl md:text-3xl">{step.name}</h3>
        <slot/>
        <div class="flex-1 flex justify-between gap-4 items-center">
            <div class="ml-auto cursor-pointer hover:text-slate-950 duration-200 relative after:absolute font-semibold after:top-0 after:bg-white after:right-full after:w-full after:h-full after:duration-200 hover:after:translate-x-full after:z-[1] overflow-hidden rounded-md p-1">
                <p class="relative z-[5]">Go to &rarr;</p>
            </div>
        </div>
    </a>
    <div class="bg-slate-950 duration-200 group-hover:opacity-90 absolute w-[99%] h-[99%] rounded-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[0]"/>
</div>

<style>

    .gradient-colours {
        @apply from-red-500 via-purple-500 to-blue-500;
    }

</style>