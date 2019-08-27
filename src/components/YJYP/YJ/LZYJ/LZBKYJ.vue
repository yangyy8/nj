<template lang="html">
    <!-- 临住布控预警 -->
</template>

<script>
export default {
  data(){
    return {}

},
  activated(){

  this.$router.push({name:'ZBKYJ_X',query:{type:5}});
  },
  mounted(){
    console.log('====');
    this.$router.push({name:'ZBKYJ_X',query:{type:5}});
    console.log('----');
  },

}
</script>
