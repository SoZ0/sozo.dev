<script lang="ts">

    import GraduationCap from "$lib/components/icons/GraduationCap.svelte";
import ListItem from "../List/ListItem.svelte";
  
  </script>
  <dl class="list-dl divide-y">
    <ListItem name="Simon Fraser University - Mechatronics" link="" colour="tertiary">
        <svelte:fragment slot="icon">
            <GraduationCap width="" height="" />
        </svelte:fragment>
        September 2024 - June 2029
    </ListItem>
      <ListItem name="North Surrey Secondary" link="" colour="tertiary">
          <svelte:fragment slot="icon">
              <GraduationCap width="" height="" />
          </svelte:fragment>
          September 2018 - June 2023
      </ListItem>

  </dl>