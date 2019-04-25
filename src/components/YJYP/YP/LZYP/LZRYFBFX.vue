<template lang="html">
    <!-- 临住人员分布分析-->
      <div class="yymain">
        <div class="yywai" id="wai_w">
          <div class="index_main">
            <iframe id="index_iframe" frameborder=0 name="showHere" scrolling="no" :src="iURL" allowfullscreen="true"></iframe>
          </div>
        </div>
      </div>
</template>

<script>
export default {
  data(){
    return{
      iURL:'',
    }
  },
  mounted() {
    const oIframe = document.getElementById('index_iframe');
    const sframe = document.getElementById('wai_w').offsetWidth;
    const deviceWidth = document.documentElement.clientWidth;
    const deviceHeight = document.documentElement.clientHeight;
    oIframe.style.width = parseInt(deviceWidth)-parseInt(deviceWidth-sframe) + 'px';
    oIframe.style.height = deviceHeight + 'px';
    this.iURL=window.IPConfig.LZRYFBFX+"?token="+this.$store.state.token;
    console.log('this.iurl',this.iURL);
  },

}
</script>

<style scoped>
</style>
