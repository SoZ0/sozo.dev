<script lang="ts">
  import Github from "$lib/components/icons/Github.svelte";
  import Linkedin from "$lib/components/icons/Linkedin.svelte";
  import Logo from "$lib/components/icons/Logo.svelte";
  import Mail from "$lib/components/icons/Mail.svelte";
  import CybersecurityTabGroup from "$lib/components/ui/TabGroups/CybersecurityTabGroup.svelte";
  import ExperienceSection from "$lib/components/ui/ExperienceSection.svelte";
  import SoftwareEngineeringTabGroup from "$lib/components/ui/TabGroups/SoftwareEngineeringTabGroup.svelte";
  import RoboticsTabGroup from "$lib/components/ui/TabGroups/RoboticsTabGroup.svelte";
  import ArrowUpFrightFromSquare from "$lib/components/icons/ArrowUpFrightFromSquare.svelte";
  import ProjectCard from "$lib/components/ui/ProjectCard.svelte";
  import WorkExperienceCard from "$lib/components/ui/WorkExperienceCard.svelte";
  import WorkYear from "$lib/components/ui/WorkYear.svelte";
  import PrometheusDynamics from "$lib/components/icons/PrometheusDynamics.svelte";
  import HephaestusRobotics from "$lib/components/icons/HephaestusRobotics.svelte";
  import ZebraRobotics from "$lib/components/icons/ZebraRobotics.svelte";
  import McDonalds from "$lib/components/icons/McDonalds.svelte";
  import ByteCamp from "$lib/components/icons/ByteCamp.svelte";
  import Ai from "$lib/components/icons/AI.svelte";
  import Server from "$lib/components/icons/Server.svelte";
  import Globe from "$lib/components/icons/Globe.svelte";
  import AwardCard from "$lib/components/ui/AwardCard.svelte";
  import { getModalStore, type ModalSettings } from "@skeletonlabs/skeleton";



  const modal: ModalSettings = {
	type: 'alert',
	// Data
	title: 'Notice!',
	body: 'This site is still under <strong>ACTIVE</strong> development, fires may occur!',
	image: 'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExejhlOGY5YmYyYWZtMWk1ZGQzZmw2aTBidWU1eDd5MGRtbmhodG15NiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/nrXif9YExO9EI/giphy.webp',
  buttonTextCancel: "OK!"
};

const modalStore = getModalStore();
modalStore.trigger(modal);
</script>

<div class="flex flex-col md:grid md:grid-cols-3 md:grid-rows-1">
  <div class="w-full flex items-center justify-center p-4">
    <div
      class="card variant-ghost-primary text-center h-5/6 w-3/4 p-4 flex flex-col"
    >
      <div class="flex-grow">
        <strong class="h4">Most Recent News</strong>
        <div class="flex flex-col gap-4 p-4 text-start">
          <p>Recently Graduated from BrainStation Cybereecurity program! </p>
          <p>Building a secure Rust API to power my future projects</p>
          <p>Working on a AI driven project called Naimon (More details soon)</p>
          <p>Recently converted local server infastructure to RKE2, currently focusing on security and monitoring. Implemented grafana and soon Loki, preparing services for SSO</p>
          <p>
            Recently aquired a Dell R730, currently configuring the server for
            deployment
          </p>
        </div>
      </div>
      <p class="text-sm text-gray-400">
        <i> Last Updated July 9, 2024 </i>
      </p>
    </div>
  </div>
  <center class="py-10 row-start-1 md:row-auto order-first md:order-2">
    <div class="py-5">
      <img class="bg-white rounded-full w-56 h-56" src="./Mathias Petersen - CB - April NA Online 2024_LI.png" alt="Mathias BrianStation"/>
    </div>
    <strong>
      <h1 class="h1">
        Mathias Petersen
        <br />
        (sozo)
      </h1>
    </strong>
    <span class="flex w-fit gap-4 py-4">
      <a target="_blank" href="https://www.github.com/SoZ0">
        <Github
          width="4em"
          height="4em"
          style="fill-white hover:fill-primary-500 transition-all"
        />
      </a>
      <a href="mailto:mathias@pepservices.com">
        <Mail
          width="4em"
          height="4em"
          style="fill-white hover:fill-tertiary-500 transition-all"
        />
      </a>
      <a target="_blank" href="https://www.linkedin.com/in/mathiasdp/">
        <Linkedin
          width="4em"
          height="4em"
          style="fill-white hover:fill-secondary-500 transition-all"
        />
      </a>
    </span>
    <div class="card w-fit p-2 m-2 variant-ghost-tertiary font-bold">
      Looking for Work!
    </div>
    <div class="card w-fit p-2 variant-ghost-tertiary font-bold">
      Open to Relocation!
    </div>
  </center>
  <div class="w-full flex items-center justify-center p-4 order-3">
    <div class="card variant-ghost-secondary text-center md:h-5/6 w-3/4 p-4">
      <strong class="h4">Check Out My Resume</strong>
      <a
        target="_blank"
        href="./BrainStation Resume 2.pdf"
        class="flex justify-center w-fit"
      >
        <img
          src="./BrainStation Resume 2.png"
          alt="resume"
          class="mt-4 md:w-1/2 rounded-md"
        />
      </a>
    </div>
  </div>
</div>

<div id="about-me" class="md:mb-32" />
<div class="mt-4">
  <strong class="h2 ml-4"> About me </strong>
  <hr class="!border-t-2 pb-4" />
  <div class="md:ml-4 m-2">
    <div class="flex flex-col-reverse md:flex-none  md:grid md:grid-cols-2 gap-8 grid-rows-2 md:grid-rows-1">
      <div class="flex justify-end md:row-start-auto h-fit">
        <div class="card flex items-center md:p-8 md:w-2/3 p-4">
          Hi, I'm Mathias Petersen, an accomplished team lead and robotics
          software engineer with a passion for mechatronics and cutting-edge
          technology. I thrive in dynamic environments where innovation and
          technical excellence are paramount. My diverse skill set spans various
          programming languages, systems, and technologies, allowing me to drive
          projects from concept to deployment efficiently. I am driven by a
          commitment to enhancing organizational resilience through proactive
          security measures and fostering a culture of information security
          awareness. My experiences have equipped me with a comprehensive
          understanding of both software development and cybersecurity, enabling
          me to contribute effectively to diverse technological projects.
        </div>
      </div>

      <div class="flex items-center justify-start gap-8 md:h-auto h-fit">
        <img class="bg-white rounded-full md:w-56 md:h-56 h-24 w-24" src="./Mathias Petersen - CB - April NA Online 2024_LI.png" alt="Mathias BrianStation"/>
        <div>
          <Logo width="15em" height="" />
        </div>
        <img  class="bg-white rounded-full md:w-56 md:h-56 h-24 w-24" src="./FIRES.webp" alt="spongebob blowing out fires">
      </div>
    </div>
  </div>
</div>

<div id="active-projects" class="md:mb-32" />
<div class="mt-4 flex flex-col">
  <strong class="h2 ml-4"> Active Projects </strong>
  <p class="ml-4">
    Here are some projects im currently working on at the moment
  </p>
  <hr class="!border-t-2 pb-4" />
  <div class="md:ml-4 flex justify-center gap-4 flex-wrap">
    <ProjectCard title="Naimon">
      <svelte:fragment slot="icon">
        <Ai width="5em" height="5em" style="fill-white md:h-auto h-10" />
      </svelte:fragment>
      Multi LLM powered multi modal assitant framework
      <svelte:fragment slot="chips">
        <span class="chip variant-ghost-secondary h-fit gap-2">
          <!-- <ArrowUpFrightFromSquare width="1em" height="1em" />  -->
          Software Engineering</span
        >

        <span class="chip variant-ghost-secondary h-fit gap-2">
          <!-- <ArrowUpFrightFromSquare width="1em" height="1em" />  -->
          Rust</span
        >

        <span class="chip variant-ghost-secondary h-fit gap-2">
          <!-- <ArrowUpFrightFromSquare width="1em" height="1em" /> -->
          LLM</span
        >
        <span class="chip variant-ghost-secondary h-fit gap-2">
          <!-- <ArrowUpFrightFromSquare width="1em" height="1em" />  -->
            
          AI</span
        >
        <span class="chip variant-ghost-secondary h-fit gap-2">
          <!-- <ArrowUpFrightFromSquare width="1em" height="1em" />  -->
           
          Svelte JS</span
        >
      </svelte:fragment>
    </ProjectCard>

    <ProjectCard title="Sozo.dev">
      <svelte:fragment slot="icon">
        <Globe width="5em" height="5em" style="fill-white md:h-auto h-10" />
      </svelte:fragment>
      This website!
      <svelte:fragment slot="chips">
        <span class="chip variant-ghost-secondary h-fit gap-2">
          <!-- <ArrowUpFrightFromSquare width="1em" height="1em" />  -->
          Web Development</span
        >

        <span class="chip variant-ghost-secondary h-fit gap-2">
          <!-- <ArrowUpFrightFromSquare width="1em" height="1em" />  -->
          Svelte JS</span
        >
      </svelte:fragment>
    </ProjectCard>

    <ProjectCard title="Constellation">
      <svelte:fragment slot="icon">
        <Server width="5em" height="5em" style="fill-white md:h-auto h-10" />
      </svelte:fragment>
      My server rack and its architecture
      <svelte:fragment slot="chips">
        <span class="chip variant-ghost-secondary h-fit gap-2">
          <!-- <ArrowUpFrightFromSquare width="1em" height="1em" />  -->
          Cybersecurity</span
        >

        <span class="chip variant-ghost-secondary h-fit gap-2">
          <!-- <ArrowUpFrightFromSquare width="1em" height="1em" />  -->
          Servers</span
        >
      </svelte:fragment>
    </ProjectCard>

    <ProjectCard title="Helios">
      <svelte:fragment slot="icon">
        <Server width="5em" height="5em" style="fill-white md:h-auto h-10" />
      </svelte:fragment>
      Feducial marker detection system & hardware
      <svelte:fragment slot="chips">
        <span class="chip variant-ghost-secondary h-fit gap-2">
          <!-- <ArrowUpFrightFromSquare width="1em" height="1em" />  -->
          Software Engineering</span
        >

        <span class="chip variant-ghost-secondary h-fit gap-2">
          <!-- <ArrowUpFrightFromSquare width="1em" height="1em" />  -->
          Hardware</span
        >

        <span class="chip variant-ghost-secondary h-fit gap-2">
          <!-- <ArrowUpFrightFromSquare width="1em" height="1em" />  -->
          Rust</span
        >

        <span class="chip variant-ghost-secondary h-fit gap-2">
          <!-- <ArrowUpFrightFromSquare width="1em" height="1em" />  -->
          OpenCV</span
        >
      </svelte:fragment>
    </ProjectCard>
  </div>
</div>

<div id="experience" class="md:mb-32" />
<div class="mt-4">
  <strong class="h2 ml-4"> Experience </strong>
  <hr class="!border-t-2 pb-4" />
  <div class="md:ml-4 w-screen overflow-scroll">
    <div class="flex w-full justify-center">
      <div class="grid grid-cols-3 items-center justify-center w-full">
        <WorkYear year="Present">
          <WorkExperienceCard title="Founder" place="Prometheus Dynamics">
            <svelte:fragment slot="icon">
              <PrometheusDynamics height="5em" />
            </svelte:fragment>
          </WorkExperienceCard>
          <WorkExperienceCard
            title="Programming Mentor"
            place="Hepheastus Robotics"
          >
            <svelte:fragment slot="icon">
              <HephaestusRobotics />
            </svelte:fragment>
          </WorkExperienceCard>
        </WorkYear>
        <WorkYear year="2024">
          <WorkExperienceCard title="Founder" place="Prometheus Dynamics">
            <svelte:fragment slot="icon">
              <PrometheusDynamics height="5em" />
            </svelte:fragment>
          </WorkExperienceCard>
          <WorkExperienceCard
            title="Programming Mentor"
            place="Hepheastus Robotics"
          >
            <svelte:fragment slot="icon">
              <HephaestusRobotics />
            </svelte:fragment>
          </WorkExperienceCard>
          <WorkExperienceCard
            title="Technology Manager / Developer"
            place="Zebra Robotics Langley"
          >
            <svelte:fragment slot="icon">
              <ZebraRobotics />
            </svelte:fragment>
          </WorkExperienceCard>
        </WorkYear>
        <WorkYear year="2023">
          <WorkExperienceCard title="Founder" place="Prometheus Dynamics">
            <svelte:fragment slot="icon">
              <PrometheusDynamics height="5em" />
            </svelte:fragment>
          </WorkExperienceCard>
          <WorkExperienceCard title="Team Captian" place="Hepheastus Robotics">
            <svelte:fragment slot="icon">
              <HephaestusRobotics />
            </svelte:fragment>
          </WorkExperienceCard>
          <WorkExperienceCard
            title="Lead Robotics Instructor"
            place="Zebra Robotics Langley"
          >
            <svelte:fragment slot="icon">
              <ZebraRobotics />
            </svelte:fragment>
          </WorkExperienceCard>
        </WorkYear>
        <WorkYear year="2022">
          <WorkExperienceCard
            title="Lead Technology Engineer"
            place="Hepheastus Robotics"
          >
            <svelte:fragment slot="icon">
              <HephaestusRobotics />
            </svelte:fragment>
          </WorkExperienceCard>
          <WorkExperienceCard title="Crew Trainer" place="Gateway McDonalds">
            <svelte:fragment slot="icon">
              <McDonalds />
            </svelte:fragment>
          </WorkExperienceCard>
          <WorkExperienceCard
            title="Lead Instructor"
            place="Byte Camp Education Society"
          >
            <svelte:fragment slot="icon">
              <ByteCamp />
            </svelte:fragment>
          </WorkExperienceCard>
        </WorkYear>
        <WorkYear year="2021">
          <WorkExperienceCard
            title="Lead Technology Engineer"
            place="Hepheastus Robotics"
          >
            <svelte:fragment slot="icon">
              <HephaestusRobotics />
            </svelte:fragment>
          </WorkExperienceCard>
          <WorkExperienceCard title="Crew" place="Gateway McDonalds">
            <svelte:fragment slot="icon">
              <McDonalds />
            </svelte:fragment>
          </WorkExperienceCard>
        </WorkYear>
        <WorkYear year="2020">
          <WorkExperienceCard
            title="Lead Technology Engineer"
            place="Hepheastus Robotics"
          >
            <svelte:fragment slot="icon">
              <HephaestusRobotics />
            </svelte:fragment>
          </WorkExperienceCard>
        </WorkYear>
        <WorkYear year="2019">
          <WorkExperienceCard
            title="Lead Software Engineer"
            place="Hepheastus Robotics"
          >
            <svelte:fragment slot="icon">
              <HephaestusRobotics />
            </svelte:fragment>
          </WorkExperienceCard>
        </WorkYear>
        <WorkYear year="2018">
          <WorkExperienceCard
            title="Jr Software Engineer"
            place="Hepheastus Robotics"
          >
            <svelte:fragment slot="icon">
              <HephaestusRobotics />
            </svelte:fragment>
          </WorkExperienceCard>
        </WorkYear>
      </div>
    </div>
  </div>
</div>

<div id="awards-&-certifications" class="md:mb-32" />
<div class="mt-4">
  <strong class="h2 ml-4"> Awards & Certifications </strong>
  <hr class="!border-t-2 pb-4" />
  <div class="md:ml-4 flex justify-center gap-4 flex-col md:flex-wrap md:flex-row p-2 md:p-0">

	<AwardCard title="Cybersecurity Diploma" date="May 2024 - July 2024">
		<svelte:fragment slot="icon">
      <img src="logos/brainstation.svg" alt="comptia Security+ logo"/>
		</svelte:fragment>
		
		
	  </AwardCard>
	  <AwardCard title="CompTIA Security+" date="July 2024">
		<svelte:fragment slot="icon">
      <img src="logos/comptia security.png" alt="comptia Security+ logo"/>
		</svelte:fragment>
	
		
	  </AwardCard>
	  <AwardCard title="PNW Chairman's Award" date="Febuary 2022">
		<svelte:fragment slot="icon">
		  <Ai width="5em" height="5em" style="fill-white" />
		</svelte:fragment>
	  </AwardCard>
	  <!-- <AwardCard title="Helios">
		<svelte:fragment slot="icon">
		  <Server width="5em" height="5em" style="fill-white" />
		</svelte:fragment>
		Feducial marker detection system & hardware
	  </AwardCard> -->
  </div>
</div>

<div id="all-projects-&-skills" class="md:mb-32" />
<div class="mt-4">
  <strong class="h2 ml-4"> All Projects & Skills </strong>
  <hr class="!border-t-2 pb-4" />
  <div class="md:ml-4 w-full flex justify-center p-2 md:p-0">
    <center class="md:w-1/3 h-[50em]">
      AHHH!!! Im still working on this!
      <img src="./FIRES.webp" alt="spongebob blowing out fires"/>
      <!-- <CybersecurityTabGroup /> -->

    </center>

  </div>
</div>
