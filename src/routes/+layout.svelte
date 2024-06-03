<script lang="ts">
  import "../app.css";
  import Logo from "$lib/components/icons/Logo.svelte";
  import { AppBar, getModalStore, type ModalSettings } from "@skeletonlabs/skeleton";
  import Github from "$lib/components/icons/Github.svelte";
  import Mail from "$lib/components/icons/Mail.svelte";
  import Linkedin from "$lib/components/icons/Linkedin.svelte";


  import { initializeStores, Modal } from '@skeletonlabs/skeleton';

  initializeStores();


</script>

<Modal />
<nav id="navbar" class="sticky top-0 z-50 transition-all ease-in-out duration-200" >
    <AppBar slotDefault="place-self-center">
        <svelte:fragment slot="lead">
          <Logo width="3em" height="3em" />
          <strong class="ml-4"> Mathias Petersen </strong>
        </svelte:fragment>
        <svelte:fragment slot="trail">
          <a target="_blank" href="https://www.github.com/SoZ0">
            <Github style="fill-white hover:fill-primary-500 transition-all" />
          </a>
          <a href="mailto:mathias@pepservices.com">
            <Mail style="fill-white hover:fill-tertiary-500 transition-all"/>
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/mathiasdp/">
            <Linkedin style="fill-white hover:fill-secondary-500 transition-all"/>
          </a>
       
        </svelte:fragment>
        <span class=" divider-vertical h-auto" />
        <a href="./#about-me" class="hover:font-bold transition-all">
            About Me
        </a>
        <span class="divider-vertical h-auto" />
        <a href="./#active-projects" class="hover:font-bold transition-all">
            Active Projects
        </a>
        <span class="divider-vertical h-auto" />
        <a href="./#experience" class="hover:font-bold transition-all">
            Experience
        </a>
        <span class="divider-vertical h-auto" />
        <a href="./#awards-&-certifications" class="hover:font-bold transition-all">
            Awards & Certifications
        </a>
        <span class="divider-vertical h-auto" />
        <a href="./#all-projects-&-skills" class="hover:font-bold transition-all">
            All Projects & Skills
        </a>
        <span class="divider-vertical h-auto" />
      </AppBar>
      
</nav>
<div id="background" class="fixed inset-0 z-[-1] bg-surface-500/20">

</div>

<slot />


<style>
  #background {
    -webkit-mask-image: url("/static/background design.svg");
    mask-image: url("/static/background design.svg");
    mask-repeat:repeat;
  }

</style>
