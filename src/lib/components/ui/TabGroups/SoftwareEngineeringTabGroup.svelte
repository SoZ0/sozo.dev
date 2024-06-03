<script lang="ts">
  import { TabGroup, Tab } from "@skeletonlabs/skeleton";
  import ListCheck from "../../icons/ListCheck.svelte";
  import Certificate from "../../icons/Certificate.svelte";
  import GraduationCap from "../../icons/GraduationCap.svelte";
  import Briefcase from "../../icons/Briefcase.svelte";
  import TabHelper from "./TabHelper.svelte";
  import SoftwareEngineeringProjectsTabContent from "./Software Engineering/SoftwareEngineeringProjectsTabContent.svelte";
  import SoftwareEngineeringEducationTabContent from "./Software Engineering/SoftwareEngineeringEducationTabContent.svelte";
  import SoftwareEngineeringExperienceTabContent from "./Software Engineering/SoftwareEngineeringExperienceTabContent.svelte";
  let tabSet: number = 0;
</script>

<TabGroup
  justify="justify-center"
  active="variant-ghost-secondary"
  hover="hover:variant-soft-secondary"
  flex="flex-1 lg:flex-none"
  rounded=""
  border=""
  class="w-full"
>
  <TabHelper bind:group={tabSet} name="Projects" value={0}>
    <ListCheck width="2em" height="2em" style="fill-white" />
  </TabHelper>
  <TabHelper bind:group={tabSet} name="Education" value={1}>
    <GraduationCap width="2em" height="2em" style="fill-white" />
  </TabHelper>
  <TabHelper bind:group={tabSet} name="Experience" value={2}>
    <Briefcase width="2em" height="2em" style="fill-white" />
  </TabHelper>
  <svelte:fragment slot="panel">
    {#if tabSet === 0}
      <SoftwareEngineeringProjectsTabContent/>
    {:else if tabSet === 1}
      <SoftwareEngineeringEducationTabContent/>
    {:else if tabSet === 2}
      <SoftwareEngineeringExperienceTabContent/>
    {/if}
  </svelte:fragment></TabGroup
>
