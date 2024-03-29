<template>
  <div class="col-xl-12">
    <div class="card proj-progress-card">
      <div class="card-block">
        <div class="row">
          <div class="col-xl-3 col-md-6" v-for="(item, index) in projectProgressSummary" :key="index">
            <h6>{{ item.title }}</h6>
            <h5 class="m-b-30 f-w-700">{{ item.value }}<span
                :class="[item.percentage.includes('+') ? 'text-c-green' : 'text-c-red', 'm-l-10']">{{ item.percentage
                }}</span></h5>
            <div class="progress">
              <div :class="[index % 2 === 0 ? 'progress-bar bg-c-red' : 'progress-bar bg-c-blue']"
                :style="{ width: item.percentage }"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projectProgressSummary: []
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    async loadData() {
      try {
        const response = await fetch('jsons/Project_progress_summary.json');
        const jsonData = await response.json();
        this.projectProgressSummary = jsonData.project_progress_summary;
      } catch (error) {
        console.error('Error loading data:', error);
      }
    }
  }
};
</script>

<style scoped>
/* Add your styles here */
</style>