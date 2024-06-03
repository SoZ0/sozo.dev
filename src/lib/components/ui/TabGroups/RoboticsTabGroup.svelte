<script lang="ts">
  import { TabGroup, Tab } from "@skeletonlabs/skeleton";
  import ListCheck from "../../icons/ListCheck.svelte";
  import Certificate from "../../icons/Certificate.svelte";
  import GraduationCap from "../../icons/GraduationCap.svelte";
  import Briefcase from "../../icons/Briefcase.svelte";
  import TabHelper from "./TabHelper.svelte";
  import RoboticsProjectsTabContent from "./Robotics/RoboticsProjectsTabContent.svelte";
  import RoboticsEducationTabContent from "./Robotics/RoboticsEducationTabContent.svelte";
  import RoboticsExperienceTabContent from "./Robotics/RoboticsExperienceTabContent.svelte";
  let tabSet: number = 0;
</script>

<TabGroup
  justify="justify-center"
  active="variant-ghost-tertiary"
  hover="hover:variant-soft-tertiary"
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
      <RoboticsProjectsTabContent/>
    {:else if tabSet === 1}
      <RoboticsEducationTabContent/>
    {:else if tabSet === 2}
      <RoboticsExperienceTabContent/>
    {/if}
  </svelte:fragment></TabGroup
>
