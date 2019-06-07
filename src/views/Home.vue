<template>
  <div class="home">
    <img class="logo" alt="Vue logo" src="../assets/logo.png">
    <TaskManager/>
  </div>
</template>

<script>
// @ is an alias to /src
import TaskManager from '@/components/TaskManager.vue';

export default {
  name: 'taskmanager',
  components: {
    TaskManager,
  },
};
</script>
<style>
.logo{
  height: 30px;
}
</style>