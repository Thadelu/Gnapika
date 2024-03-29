<template>
  <div id="app">
    <Summary />
    <ProjectProgressSummary />
    <WhatsNew />
    <LatestActivity />
    <NewProducts />
  </div>
</template>

<script>
import Summary from './components/Summary.vue';
import WhatsNew from './components/WhatsNew.vue';
import ProjectProgressSummary from './components/ProjectProgressSummary.vue';
import LatestActivity from './components/LatestActivity.vue';
import NewProducts from './components/NewProducts.vue';


export default {
  name: 'App',
  components: {
    Summary,
    WhatsNew,
    ProjectProgressSummary,
    LatestActivity,
    NewProducts
  }
};
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  text-align: center;
  margin-top: 50px;
}
</style>
