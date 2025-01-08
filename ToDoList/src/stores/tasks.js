import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useTaskStore = defineStore('task', () => {  
    const tasks = ref([
        {
        id: 1,
        title: 'Hal',
        description : "Etesd meg a halakat!!!!!!",
        isFinished : false,
        deadline : "2025-01-14",
        },
        {
          id: 2,
        title: 'Kutya',
        description :'Sétáltasd meg a kutyát' ,
        isFinished : false,
        deadline : "2025-01-15",
        }
      ])
   
  function szavazok(id) {
    let tmp = tasks.value.find( (m) => m.id == id )
    tmp.szavazat = tmp.szavazat + 1 || 1
    console.log(tasks.value)    
  }

  return { tasks, szavazok }
})