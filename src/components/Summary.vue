<!-- DealsAnalytics.vue -->
<template>
  <div class="pcoded-inner-content">
    <div class="main-body">
      <div class="page-wrapper">
        <div class="page-body">
          <div class="row">
            <div class="col-md-12 col-xl-8">
              <div class="card sale-card">
                <div class="card-header">
                  <h5>Deals Analyticssss</h5>
                </div>
                <div class="card-block">
                  <div id="sales-analytics" class="chart-shadow" style="height: 380px; overflow: hidden; text-align: left;"></div>
                </div>
              </div>
            </div>
            <div class="col-md-12 col-xl-4">
              <div class="card comp-card" v-for="(item, index) in summary" :key="index">
                <div class="card-body">
                  <div class="row align-items-center">
                    <div class="col">
                      <h6 class="m-b-25">{{ item.title }}</h6>
                      <h3 class="f-w-700 text-c-blue">{{ item.value }}</h3>
                      <p class="m-b-0">{{ item.duration }} ({{ item.year }})</p>
                    </div>
                    <div class="col-auto">
                      <i class="fas fa-eye bg-c-blue"></i>
                    </div>
                  </div>
                </div>
              </div>
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
      summary: []
    };
  },
  mounted() {
    const script01 = document.createElement('script');
    script01.src = 'https://cdn.amcharts.com/lib/5/index.js';
    document.body.appendChild(script01);

    const script02 = document.createElement('script');
    script02.src = 'https://cdn.amcharts.com/lib/5/xy.js';
    document.body.appendChild(script02);

    const script03 = document.createElement('script');
    script03.src = 'https://cdn.amcharts.com/lib/5/themes/Animated.js';
    document.body.appendChild(script03);

    // Dynamically load jQuery
    const script1 = document.createElement('script');
    script1.src = '../../template_files/jquery.min.js.download';
    document.body.appendChild(script1);

    // Dynamically load jQuery UI
    const script2 = document.createElement('script');
    script2.src = '../../template_files/jquery-ui.min.js.download';
    document.body.appendChild(script2);

    // Dynamically load Popper.js
    const script3 = document.createElement('script');
    script3.src = '../../template_files/popper.min.js.download';
    document.body.appendChild(script3);

    // Dynamically load Bootstrap
    const script4 = document.createElement('script');
    script4.src = '../../template_files/bootstrap.min.js.download';
    document.body.appendChild(script4);

    // Dynamically load Waves.js
    const script5 = document.createElement('script');
    script5.src = '../../template_files/waves.min.js.download';
    document.body.appendChild(script5);

    // Dynamically load jQuery Slimscroll
    const script6 = document.createElement('script');
    script6.src = '../../template_files/jquery.slimscroll.js.download';
    document.body.appendChild(script6);

    // Dynamically load jQuery Flot
    const script7 = document.createElement('script');
    script7.src = '../../template_files/jquery.flot.js.download';
    document.body.appendChild(script7);

    // Dynamically load jQuery Flot Categories
    const script8 = document.createElement('script');
    script8.src = '../../template_files/jquery.flot.categories.js.download';
    document.body.appendChild(script8);

    // Dynamically load Curved Lines
    const script9 = document.createElement('script');
    script9.src = '../../template_files/curvedLines.js.download';
    document.body.appendChild(script9);

    // Dynamically load jQuery Flot Tooltip
    const script10 = document.createElement('script');
    script10.src = '../../template_files/jquery.flot.tooltip.min.js.download';
    document.body.appendChild(script10);

    // Dynamically load Chartist.js
    const script11 = document.createElement('script');
    script11.src = '../../template_files/chartist.js.download';
    document.body.appendChild(script11);

    // Dynamically load AmCharts
    const script12 = document.createElement('script');
    script12.src = '../../template_files/amcharts.js.download';
    document.body.appendChild(script12);

    // Dynamically load AmCharts Serial
    const script13 = document.createElement('script');
    script13.src = '../../template_files/serial.js.download';
    document.body.appendChild(script13);

    // Dynamically load AmCharts Light
    const script14 = document.createElement('script');
    script14.src = '../../template_files/light.js.download';
    document.body.appendChild(script14);

    // Dynamically load Pcoded
    const script15 = document.createElement('script');
    script15.src = '../../template_files/pcoded.min.js.download';
    document.body.appendChild(script15);

    // Dynamically load Vertical Layout
    const script16 = document.createElement('script');
    script16.src = '../../template_files/vertical-layout.min.js.download';
    document.body.appendChild(script16);

    // Dynamically load Custom Dashboard
    const script17 = document.createElement('script');
    script17.src = '../../template_files/custom-dashboard.min.js.download';
    document.body.appendChild(script17);

    // Dynamically load Script
    const script18 = document.createElement('script');
    script18.src = '../../template_files/script.min.js.download';
    document.body.appendChild(script18);
    
    this.loadData();


  },
  methods: {
    async loadData() {
      try {
        const response = await fetch('jsons/summary.json');
        const jsonData = await response.json();
        this.summary = jsonData.summary;
      } catch (error) {
        console.error('Error loading data:', error);
      }
    }
  }
};
</script>

<style scoped>
/* Add your styles here */
@import url('../../template_files/bootstrap.min.css');
/* @import url('./template_files/images/favicon.ico'); */
@import url('../../template_files/css');
@import url('../../template_files/css(1)');
@import url('../../template_files/bootstrap.min.css');
@import url('../../template_files/waves.min.css');
@import url('../../template_files/feather.css');
@import url('../../template_files/font-awesome-n.min.css');
@import url('../../template_files/chartist.css');
@import url('../../template_files/style.css');
@import url('../../template_files/widget.css');
</style>