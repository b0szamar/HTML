<template>
    <div class="container">
      <div v-for="t in taskStore.tasks" :key="t.id" class="task">
        <h3>{{ t.title }}</h3>
        <h4>{{ t.description }}</h4>    
        <h4>{{ t.deadline }}</h4>  
        <div class="footer">
          <button @click="taskStore.edit(t.id)">Edit Task</button>
          <button @click="taskStore.done(t.id)">Mark as done</button>
        </div>
  
      </div>
    </div>
  </template>
  
  <style scoped>
    .container{
      display: flex;
      flex-wrap: wrap;
      gap: 5px;
    }
    .task img{
      width: 250px;    
    } 
    .task h3{
      text-align: center;
    }
    .task>.footer{
      display: flex;
      justify-content: space-around;
    }
    .task>figure{
      height: 200px;
      display: flex;
      align-items: center;
    }
  </style>
  <script setup>
  import {ref} from 'vue'
  import { useTaskStore } from '@/stores/tasks';
  import { useRoute, useRouter } from 'vue-router';
  
  const taskStore = usetaskStore()
  const route = useRoute()
  const router = useRouter()
  const menj = (id)=>{
    // <RouterLink to="/reszletek">Részletek</RouterLink>
    router.push(`/reszletek/${id}`)
  }
  </script>
  
  
  