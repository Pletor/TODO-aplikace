<template>
<LwNavBar :links="links" />  <!-- <header> -->
  <main>
    <RouterView> </RouterView>
  </main>
<LwFooter />  <!-- <footer> -->

</template>


<script>
import LwNavBar from '@/components/LwNavBar.vue'
import LwFooter from '@/components/LwFooter.vue'

export default {
  name: 'App',
  data () {
        return {
            links: [
                { link: '/', label: 'Home' },
                { link: '/product', label: 'Product' },
                { link: '/price', label: 'Price' },
                { link: '/about', label: 'About' },
                { link: '/login', label: 'Login' }
                ]       
            }
        },

  components: {
        LwNavBar, LwFooter
    }
}


</script>


<style lang="stylus">
@import "./assets/styles/main.styl"

// před každou rooto navigační gard, beforeRouterEnter, beforeRouterUpdate, beforeRouterLeave... router.beforeEach

// Reset
html, body 
  margin: 0
  padding: 0
  width: 100%
  height: 100%

// Globální styly
body
  background-color: $main-bg-color
  color: $main-font-color
  font-family: $font-family
  font-weight: $font-weight-normal

main
  min-height: 100vh

// Příklad použití pro konkrétní třídy stylus
.secondary-bg
  background-color: $secondary-bg-color

.secondary-font
  color: $secondary-font-color

.info
  color: $info-color

.detail
  color: $detail-color

.additional
  color: $additional-color

</style>