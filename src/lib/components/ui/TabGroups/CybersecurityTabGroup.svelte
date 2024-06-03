<script lang="ts">
  import { TabGroup, Tab } from "@skeletonlabs/skeleton";
  import ListCheck from "../../icons/ListCheck.svelte";
  import Certificate from "../../icons/Certificate.svelte";
  import GraduationCap from "../../icons/GraduationCap.svelte";
  import Briefcase from "../../icons/Briefcase.svelte";
  import TabHelper from "./TabHelper.svelte";
  import CybersecurityProjectsTabContent from "./Cybersecurity/CybersecurityProjectsTabContent.svelte";
  import CybersecurityCertificationsTabContent from "./Cybersecurity/CybersecurityCertificationsTabContent.svelte";
  import CybersecurityEducationTabContent from "./Cybersecurity/CybersecurityEducationTabContent.svelte";
  let tabSet: number = 0;
</script>

<TabGroup
  justify="justify-center"
  active="variant-ghost-primary"
  hover="hover:variant-soft-primary"
  flex="flex-1 lg:flex-none"
  rounded=""
  border=""
  class="w-full"
>
  <TabHelper bind:group={tabSet} name="Projects" value={0}>
    <ListCheck width="2em" height="2em" style="fill-white" />
  </TabHelper>
  <TabHelper bind:group={tabSet} name="Certifications" value={1}>
    <Certificate width="2em" height="2em" style="fill-white" />
  </TabHelper>
  <TabHelper bind:group={tabSet} name="Education" value={2}>
    <GraduationCap width="2em" height="2em" style="fill-white" />
  </TabHelper>

  <svelte:fragment slot="panel">
    {#if tabSet === 0}
      <CybersecurityProjectsTabContent/>
    {:else if tabSet === 1}
    <CybersecurityCertificationsTabContent/>
    {:else if tabSet === 2}
    <CybersecurityEducationTabContent/>
    {/if}
  </svelte:fragment></TabGroup
>
