<template>
  <div class="col-md-12 col-xl-4">
    <div class="card card-blue text-white">
      <div class="card-block p-b-0">
        <div class="row m-b-50">
          <div class="col">
            <h6 class="m-b-5">Sales In July</h6>
            <h5 class="m-b-0 f-w-700">$2665.00</h5>
          </div>
          <div class="col-auto text-center">
            <p class="m-b-5">Direct Sale</p>
            <h6 class="m-b-0">$1768</h6>
          </div>
          <div class="col-auto text-center">
            <p class="m-b-5">Referal</p>
            <h6 class="m-b-0">$897</h6>
          </div>
        </div>
        <div id="sec-ecommerce-chart-line" class="" style="height: 60px; padding: 0px; position: relative;">
          <canvas class="flot-base" width="367" height="60"
            style="direction: ltr; position: absolute; left: 0px; top: 0px; width: 367px; height: 60px;"></canvas>
          <div class="flot-text" style="position: absolute; inset: 0px; font-size: smaller; color: rgb(84, 84, 84);">
            <div class="flot-x-axis flot-x1-axis xAxis x1Axis" style="position: absolute; inset: 0px;">
              <div
                style="position: absolute; max-width: 52px; top: 60px; font: 400 0px / 0px 'open sans', sans-serif; color: transparent; left: 8px; text-align: center;">
                0.0</div>
              <div
                style="position: absolute; max-width: 52px; top: 60px; font: 400 0px / 0px 'open sans', sans-serif; color: transparent; left: 71px; text-align: center;">
                2.5</div>
              <div
                style="position: absolute; max-width: 52px; top: 60px; font: 400 0px / 0px 'open sans', sans-serif; color: transparent; left: 133px; text-align: center;">
                5.0</div>
              <div
                style="position: absolute; max-width: 52px; top: 60px; font: 400 0px / 0px 'open sans', sans-serif; color: transparent; left: 196px; text-align: center;">
                7.5</div>
              <div
                style="position: absolute; max-width: 52px; top: 60px; font: 400 0px / 0px 'open sans', sans-serif; color: transparent; left: 259px; text-align: center;">
                10.0
              </div>
              <div
                style="position: absolute; max-width: 52px; top: 60px; font: 400 0px / 0px 'open sans', sans-serif; color: transparent; left: 321px; text-align: center;">
                12.5
              </div>
            </div>
            <div class="flot-y-axis flot-y1-axis yAxis y1Axis" style="position: absolute; inset: 0px;">
              <div
                style="position: absolute; top: 52px; font: 400 0px / 0px 'open sans', sans-serif; color: transparent; left: 0px; text-align: right;">
                0</div>
              <div
                style="position: absolute; top: 37px; font: 400 0px / 0px 'open sans', sans-serif; color: transparent; left: 0px; text-align: right;">
                10</div>
              <div
                style="position: absolute; top: 23px; font: 400 0px / 0px 'open sans', sans-serif; color: transparent; left: 0px; text-align: right;">
                20</div>
              <div
                style="position: absolute; top: 8px; font: 400 0px / 0px 'open sans', sans-serif; color: transparent; left: 0px; text-align: right;">
                30</div>
            </div>
          </div>
          <canvas class="flot-overlay" width="367" height="60"
            style="direction: ltr; position: absolute; left: 0px; top: 0px; width: 367px; height: 60px;"></canvas>
        </div>
        <div id="sec-ecommerce-chart-bar" style="height: 195px; padding: 0px; position: relative;">
          <canvas class="flot-base" width="367" height="195"
            style="direction: ltr; position: absolute; left: 0px; top: 0px; width: 367px; height: 195px;"></canvas>
          <div class="flot-text" style="position: absolute; inset: 0px; font-size: smaller; color: rgb(84, 84, 84);">
            <div class="flot-x-axis flot-x1-axis xAxis x1Axis" style="position: absolute; inset: 0px;">
              <div
                style="position: absolute; max-width: 45px; top: 195px; font: 400 0px / 0px 'open sans', sans-serif; color: transparent; left: 8px; text-align: center;">
                0.0</div>
              <div
                style="position: absolute; max-width: 45px; top: 195px; font: 400 0px / 0px 'open sans', sans-serif; color: transparent; left: 70px; text-align: center;">
                2.5</div>
              <div
                style="position: absolute; max-width: 45px; top: 195px; font: 400 0px / 0px 'open sans', sans-serif; color: transparent; left: 133px; text-align: center;">
                5.0
              </div>
              <div
                style="position: absolute; max-width: 45px; top: 195px; font: 400 0px / 0px 'open sans', sans-serif; color: transparent; left: 196px; text-align: center;">
                7.5
              </div>
              <div
                style="position: absolute; max-width: 45px; top: 195px; font: 400 0px / 0px 'open sans', sans-serif; color: transparent; left: 259px; text-align: center;">
                10.0
              </div>
              <div
                style="position: absolute; max-width: 45px; top: 195px; font: 400 0px / 0px 'open sans', sans-serif; color: transparent; left: 322px; text-align: center;">
                12.5
              </div>
            </div>
            <div class="flot-y-axis flot-y1-axis yAxis y1Axis" style="position: absolute; inset: 0px;">
              <div
                style="position: absolute; top: 195px; font: 400 0px / 0px 'open sans', sans-serif; color: transparent; left: 0px; text-align: right;">
                0</div>
              <div
                style="position: absolute; top: 163px; font: 400 0px / 0px 'open sans', sans-serif; color: transparent; left: 0px; text-align: right;">
                5</div>
              <div
                style="position: absolute; top: 130px; font: 400 0px / 0px 'open sans', sans-serif; color: transparent; left: 0px; text-align: right;">
                10</div>
              <div
                style="position: absolute; top: 98px; font: 400 0px / 0px 'open sans', sans-serif; color: transparent; left: 0px; text-align: right;">
                15</div>
              <div
                style="position: absolute; top: 65px; font: 400 0px / 0px 'open sans', sans-serif; color: transparent; left: 0px; text-align: right;">
                20</div>
              <div
                style="position: absolute; top: 33px; font: 400 0px / 0px 'open sans', sans-serif; color: transparent; left: 0px; text-align: right;">
                25</div>
              <div
                style="position: absolute; top: 0px; font: 400 0px / 0px 'open sans', sans-serif; color: transparent; left: 0px; text-align: right;">
                30</div>
            </div>
          </div>
          <canvas class="flot-overlay" width="367" height="195"
            style="direction: ltr; position: absolute; left: 0px; top: 0px; width: 367px; height: 195px;"></canvas>
        </div>
      </div>
    </div>
  </div>
  <div class="col-xl-4 col-md-12">
    <div class="card latest-update-card">
      <div class="card-header">
        <h5>What’s New</h5>
        <div class="card-header-right">
          <ul class="list-unstyled card-option">
            <li class="first-opt"><i class="feather icon-chevron-left open-card-option"></i></li>
            <li><i class="feather icon-maximize full-card"></i></li>
            <li><i class="feather icon-minus minimize-card"></i></li>
            <li><i class="feather icon-refresh-cw reload-card"></i></li>
            <li><i class="feather icon-trash close-card"></i></li>
            <li><i class="feather icon-chevron-left open-card-option"></i></li>
            <ul class="pcoded-item pcoded-left-item" item-border="true" item-border-style="solid"
              subitem-border="false">
              <li class="pcoded-hasmenu" dropdown-icon="style1" subitem-icon="style1">
                <a href="javascript:void(0)" class="waves-effect waves-dark">
                  <span class="pcoded-micon">
                    <i class="feather icon-box"></i>
                  </span>
                  <span class="pcoded-mtext">Basic</span>
                </a>
                <ul class="pcoded-submenu">
                  <li class="">
                    <a href="#" class="waves-effect waves-dark">
                      <span class="pcoded-mtext">Alert</span>
                    </a>
                  </li>
                  <li class="">
                    <a href="#" class="waves-effect waves-dark">
                      <span class="pcoded-mtext">Breadcrumbs</span>
                    </a>
                  </li>
                  <li class="">
                    <a href="#" class="waves-effect waves-dark">
                      <span class="pcoded-mtext">Button</span>
                    </a>
                  </li>
                  <li class="">
                    <a href="#" class="waves-effect waves-dark">
                      <span class="pcoded-mtext">Box-Shadow</span>
                    </a>
                  </li>
                  <li class="">
                    <a href="#" class="waves-effect waves-dark">
                      <span class="pcoded-mtext">Accordion</span>
                    </a>
                  </li>
                  <li class="">
                    <a href="#" class="waves-effect waves-dark">
                      <span class="pcoded-mtext">Generic Class</span>
                    </a>
                  </li>
                  <li class="">
                    <a href="#" class="waves-effect waves-dark">
                      <span class="pcoded-mtext">Tabs</span>
                    </a>
                  </li>
                  <li class="">
                    <a href="#" class="waves-effect waves-dark">
                      <span class="pcoded-mtext">Color</span>
                    </a>
                  </li>
                  <li class="">
                    <a href="#" class="waves-effect waves-dark">
                      <span class="pcoded-mtext">Label Badge</span>
                    </a>
                  </li>
                  <li class="">
                    <a href="#" class="waves-effect waves-dark">
                      <span class="pcoded-mtext">Progress Bar</span>
                    </a>
                  </li>
                  <li class="">
                    <a href="#" class="waves-effect waves-dark">
                      <span class="pcoded-mtext">List</span>
                    </a>
                  </li>
                  <li class="">
                    <a href="#" class="waves-effect waves-dark">
                      <span class="pcoded-mtext">Tooltip And Popover</span>
                    </a>
                  </li>
                  <li class="">
                    <a href="#" class="waves-effect waves-dark">
                      <span class="pcoded-mtext">Typography</span>
                    </a>
                  </li>
                  <li class="">
                    <a href="#" class="waves-effect waves-dark">
                      <span class="pcoded-mtext">Other</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li class="pcoded-hasmenu" dropdown-icon="style1" subitem-icon="style1">
                <a href="javascript:void(0)" class="waves-effect waves-dark">
                  <span class="pcoded-micon">
                    <i class="feather icon-gitlab"></i>
                  </span>
                  <span class="pcoded-mtext">Advance</span>
                </a>
                <ul class="pcoded-submenu">
                  <li class="">
                    <a href="#" class="waves-effect waves-dark">
                      <span class="pcoded-mtext">Draggable</span>
                    </a>
                  </li>

                  <li class="">
                    <a href="#" class="waves-effect waves-dark">
                      <span class="pcoded-mtext">Modal</span>
                    </a>
                  </li>
                  <li class="">
                    <a href="#" class="waves-effect waves-dark">
                      <span class="pcoded-mtext">Notifications</span>
                    </a>
                  </li>
                  <li class="">
                    <a href="#" class="waves-effect waves-dark">
                      <span class="pcoded-mtext">Rating</span>
                    </a>
                  </li>
                  <li class="">
                    <a href="#" class="waves-effect waves-dark">
                      <span class="pcoded-mtext">Range Slider</span>
                    </a>
                  </li>
                  <li class="">
                    <a href="#" class="waves-effect waves-dark">
                      <span class="pcoded-mtext">Slider</span>
                    </a>
                  </li>
                  <li class="">
                    <a href="#" class="waves-effect waves-dark">
                      <span class="pcoded-mtext">Syntax Highlighter</span>
                    </a>
                  </li>
                  <li class="">
                    <a href="#" class="waves-effect waves-dark">
                      <span class="pcoded-mtext">Tour</span>
                    </a>
                  </li>
                  <li class="">
                    <a href="#" class="waves-effect waves-dark">
                      <span class="pcoded-mtext">Tree View</span>
                    </a>
                  </li>
                  <li class="">
                    <a href="#" class="waves-effect waves-dark">
                      <span class="pcoded-mtext">Nestable</span>
                    </a>
                  </li>
                  <li class="">
                    <a href="#" class="waves-effect waves-dark">
                      <span class="pcoded-mtext">Toolbar</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li class="pcoded-hasmenu" dropdown-icon="style1" subitem-icon="style1">
                <a href="javascript:void(0)" class="waves-effect waves-dark">
                  <span class="pcoded-micon">
                    <i class="feather icon-package"></i>
                  </span>
                  <span class="pcoded-mtext">Extra</span>
                </a>
                <ul class="pcoded-submenu">
                  <li class="">
                    <a href="#" class="waves-effect waves-dark">
                      <span class="pcoded-mtext">Session Timeout</span>
                    </a>
                  </li>
                  <li class="">
                    <a href="#" class="waves-effect waves-dark">
                      <span class="pcoded-mtext">Session Idle Timeout</span>
                    </a>
                  </li>
                  <li class="">
                    <a href="#" class="waves-effect waves-dark">
                      <span class="pcoded-mtext">Offline</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li class="">
                <a href="#" class="waves-effect waves-dark">
                  <span class="pcoded-micon">
                    <i class="feather icon-aperture rotate-refresh"></i>
                  </span>
                  <span class="pcoded-mtext">Animations</span>
                </a>
              </li>
              <li class="pcoded-hasmenu" dropdown-icon="style1" subitem-icon="style1">
                <a href="javascript:void(0)" class="waves-effect waves-dark">
                  <span class="pcoded-micon">
                    <i class="feather icon-command"></i>
                  </span>
                  <span class="pcoded-mtext">Icons</span>
                </a>
                <ul class="pcoded-submenu">
                  <li class="">
                    <a href="#" class="waves-effect waves-dark">
                      <span class="pcoded-mtext">Font Awesome</span>
                    </a>
                  </li>
                  <li class="">
                    <a href="#" class="waves-effect waves-dark">
                      <span class="pcoded-mtext">Themify</span>
                    </a>
                  </li>
                  <li class="">
                    <a href="#" class="waves-effect waves-dark">
                      <span class="pcoded-mtext">Simple Line Icon</span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </ul>
        </div>
      </div>
      <div class="card-block">
        <div class="slimScrollDiv" style="position: relative; overflow: hidden; width: auto; height: 290px;">
          <div class="scroll-widget" style="overflow: hidden; width: auto; height: 290px;">
            <div class="latest-update-box">
              <div class="row p-t-20 p-b-30" v-for="(item, index) in whatNewItems" :key="index">
                <div class="col-auto text-right update-meta p-r-0">
                  <img :src="item.image" alt="user image" class="img-radius img-40 align-top m-r-15 update-icon" />
                </div>
                <div class="col p-l-5">
                  <a :href="item.readmore_link">
                    <h6>{{ item.message }}</h6>
                  </a>
                  <p class="text-muted m-b-0">{{ item.created_by }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="slimScrollBar"
            style="background: rgb(0, 0, 0); width: 5px; position: absolute; top: 0px; opacity: 0.4; display: none; border-radius: 7px; z-index: 99; right: 1px; height: 186.475px;">
          </div>
          <div class="slimScrollRail"
            style="width: 5px; height: 100%; position: absolute; top: 0px; display: none; border-radius: 7px; background: rgb(51, 51, 51); opacity: 0.2; z-index: 90; right: 1px;">
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
      whatNewItems: []
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    async loadData() {
      try {
        const response = await fetch('jsons/Whats_New.json');
        const jsonData = await response.json();
        this.whatNewItems = jsonData.what_new_items;
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
