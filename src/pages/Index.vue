<template>
  <Layout>
    <div class="container">
      <Hero />
      <ProjectsGrid :projects="$page.projects.edges" />
    </div>
    <LatestJournals :journals="$page.journals.edges" />
  </Layout>
</template>

<page-query>
 query {
   projects: allStrapiProjects{
    edges{
      node{
        id 
        date (format: "YYYY")
        title 
        categories
        thumbnail {
          url
        }
        path
      }
    }
  },
  journals: allStrapiJournals (perPage: 4){     
    edges {
      node {
        id 
        title 
        path
      }
    }
  }
 }
</page-query>

<script>
import Hero from "../components/Hero.vue";
import ProjectsGrid from "../components/ProjectsGrid.vue";
import LatestJournals from "../components/LatestJournals.vue";
export default {
  components: {
    Hero,
    ProjectsGrid,
    LatestJournals
  }
};
</script>

<style>

</style>
