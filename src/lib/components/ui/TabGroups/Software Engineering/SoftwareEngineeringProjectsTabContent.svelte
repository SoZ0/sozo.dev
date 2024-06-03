<script lang="ts">
    import ArrowUpFrightFromSquare from "$lib/components/icons/ArrowUpFrightFromSquare.svelte";
    import Binoculars from "$lib/components/icons/Binoculars.svelte";
    import Briefcase from "$lib/components/icons/Briefcase.svelte";
    import ClipboardList from "$lib/components/icons/ClipboardList.svelte";
    import Database from "$lib/components/icons/Database.svelte";
    import Lock from "$lib/components/icons/Lock.svelte";
    import NetworkWired from "$lib/components/icons/NetworkWired.svelte";
    import PersonThroughWindow from "$lib/components/icons/PersonThroughWindow.svelte";
    import Python from "$lib/components/icons/Python.svelte";
    import RectangleList from "$lib/components/icons/RectangleList.svelte";
    import Server from "$lib/components/icons/Server.svelte";
    import Shield from "$lib/components/icons/Shield.svelte";
    import Socks from "$lib/components/icons/Socks.svelte";
    import UsersSecret from "$lib/components/icons/UsersSecret.svelte";
    import ListItem from "../List/ListItem.svelte";
  
    let colour = "secondary";
  </script>
  
  <dl class="list-dl divide-y">
      <ListItem name="Niamon" link="" colour={colour}> 
          <svelte:fragment slot="icon">
              <UsersSecret width="" height="" style={"fill-white"}/>
          </svelte:fragment>
          Description
      </ListItem>
      <ListItem name="Janus Motion System UI" link="" colour={colour}> 
          <svelte:fragment slot="icon">
              <Briefcase width="" height="" style={"fill-white"}/>
          </svelte:fragment>
          Description
      </ListItem>
      <ListItem name="Helios" link="" colour={colour}> 
          <svelte:fragment slot="icon">
              <Socks width="" height="" style={"fill-white"}/>
          </svelte:fragment>
          Description
      </ListItem>
      <ListItem name="SQLlite Database Library" link="" colour={colour}> 
          <svelte:fragment slot="icon">
              <RectangleList width="" height="" style={"fill-white"}/>
          </svelte:fragment>
          Description
      </ListItem>
      <ListItem name="SQL" link="" colour={colour}> 
          <svelte:fragment slot="icon">
              <Database width="" height="" style={"fill-white"}/>
          </svelte:fragment>
          Description
      </ListItem>
      <ListItem name="Threat Modeling" link="" colour={colour}> 
          <svelte:fragment slot="icon">
              <UsersSecret width="" height="" style={"fill-white"}/>
          </svelte:fragment>
          Description
      </ListItem>
      <ListItem name="Application Security and SDLC" link="" colour={colour}> 
          <svelte:fragment slot="icon">
              <Server width="" height="" style={"fill-white"}/>
          </svelte:fragment>
          Description
      </ListItem>
      <ListItem name="Python" link="" colour={colour}> 
          <svelte:fragment slot="icon">
              <Python width="" height="" style={"fill-white"}/>
          </svelte:fragment>
          Description
      </ListItem>
      <ListItem name="Encryption" link="" colour={colour}> 
          <svelte:fragment slot="icon">
              <Lock width="" height="" style={"fill-white"}/>
          </svelte:fragment>
          Description
      </ListItem>
      <ListItem name="Information Gathering" link="" colour={colour}> 
          <svelte:fragment slot="icon">
              <Binoculars width="" height="" style={"fill-white"}/>
          </svelte:fragment>
          Description
      </ListItem>
      <ListItem name="Defensive Strategy" link="" colour={colour}> 
          <svelte:fragment slot="icon">
              <Shield width="" height="" style={"fill-white"}/>
          </svelte:fragment>
          Description
      </ListItem>
      <ListItem name="Vulnerability Remediation Plan" link="" colour={colour}> 
          <svelte:fragment slot="icon">
              <PersonThroughWindow width="" height="" style={"fill-white"}/>
          </svelte:fragment>
          Description
      </ListItem>
      <ListItem name="Network Security" link="" colour={colour}> 
          <svelte:fragment slot="icon">
              <NetworkWired width="" height="" style={"fill-white"}/>
          </svelte:fragment>
          Description
      </ListItem>
      <ListItem name="Case Study" link="" colour={colour}> 
          <svelte:fragment slot="icon">
              <ClipboardList width="8em" height="8em" style={"fill-white"}/>
          </svelte:fragment>
          Description
      </ListItem>
  </dl>