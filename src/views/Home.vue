<template>
  <div class="home">
    <side-menu
          mode="inline"
          :menus="menus"
          theme="dark"
        ></side-menu>
  </div>
</template>

<script>
import SideMenu from '@/components/Menu/SideMenu'
import {useRoute,useRouter} from 'vue-router'
import { computed } from 'vue';

export default {
  name: 'Home',
  components: {
    SideMenu
  },
  setup(){
    const router = useRouter()
    const mainMenu = router.getRoutes()
    const menus = computed(()=>{
      if(mainMenu.length==0){
        return []
      }else{
        return mainMenu.find((item) => item.path === '/').children ||[]
      }
    })
    return {
      menus
    }
  },
}
</script>
