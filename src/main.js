import { createApp } from 'vue';
import App from './App.vue'; // Import your root component

// Create the Vue application instance
const app = createApp(App);

// Additional setup such as importing plugins, components, etc. can go here

// Mount the root component to the DOM
app.mount('#app');

