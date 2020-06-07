<template>
  <div>
    <Menu class="menuBox" mode="horizontal" theme="light" :active-name="$route.name">
      <Row>
        <Col :span="8">
          <MenuItem name="virtual" to="virtual">虚拟直播</MenuItem>
        </Col>
        <Col :span="8">
          <MenuItem name="originality" to="originality">创意广告</MenuItem>
        </Col>
        <Col :span="8">
          <MenuItem name="ip" to="ip">IP内容</MenuItem>
        </Col>
      </Row>
    </Menu>
    <div class="videoBox">
      <keep-alive>
        <router-view
          :VvideoHeight="VvideoHeight"
          :HvideoHeight="HvideoHeight"
          @playEvent="playerCard"
        ></router-view>
      </keep-alive>
      <div v-if="playerBoxVisible" class="playerBox">
        <img src="../assets/fiona/close.png" class='closeIcon' @click.stop="close" alt="">
        <video-player
          ref="videoPlayer"
          class="video-player vjs-custom-skin"
          :playsinline="true"
          style="object-fit:fill"
          webkit-playsinline='true'
          x5-playsinline="true"
          x-webkit-airplay="true"
          x5-video-player-type="h5"
          x5-video-player-fullscreen="true"
          x5-video-ignore-metadata="true"
          :options="playerOptions"
          @pause="onPlayerPause($event)"
          @play="onPlayerPlay($event)"
          @fullscreenchange="onFullscreenChange($event)"
          @click="fullScreen"
        />
      </div>
    </div>
  </div>
</template>

<script>

export default {
  computed: {
    player() {
      return this.$refs.videoPlayer.player//自定义播放
    }
  },
  data () {
    return {
      playerBoxVisible:false,
      playerOptions: {
        // playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
        autoplay: true, // 如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: 'zh-CN',
        aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [
          {
            type: 'video/mp4', // 这里的种类支持很多种：基本视频格式、直播、流媒体等，具体可以参看git网址项目
            src: '' // url地址
          }
        ],
        hls: true,
        poster: '', // 你的封面地址
        width: document.documentElement.clientWidth, // 播放器宽度
        notSupportedMessage: '此视频暂无法播放，请稍后再试', // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true // 全屏按钮
        }
      },
      HvideoHeight:null,
      VvideoHeight:null,
      timer:false,//定时器
    }
  },

  mounted(){
    let self = this;
    this.$nextTick(function () {
      self.h();
      self.v();
    })
    // window.onresize = function(){
    //   if(!self.timer){
    //     self.timer = true
    //   setTimeout(function () {
    //     self.h();
    //     self.v();
    //     self.timer =false;
    //   },500)
    //   }
    // }
    window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", function() {
      if (window.orientation === 180 || window.orientation === 0) {
        console.log('竖屏状态！');
        self.h();
        self.v();
      }
      if (window.orientation === 90 || window.orientation === -90 ) {
        console.log('横屏状态！');
        self.h();
        self.v();
      }     }, false);
  },
  methods:{
    fullScreen() {
      console.log(this.player)
      this.player.requestFullscreen()//调用全屏api方法
      this.player.isFullscreen(true)
      this.player.play()
    },
    onPlayerPlay(player) {
      player.play()
      // this.fullScreen();
    },
    onPlayerPause(player) {
      // alert("pause");
    },
    h(){
      let self = this;
      self.HvideoHeight = ''
      setTimeout(function () {
        self.HvideoHeight = document.getElementsByClassName('h_video')[0].clientHeight/16+0.5+'rem';
        console.log('h:'+self.HvideoHeight)
      },500)
    },
    v(){
      let self = this;
      self.VvideoHeight = ''
      setTimeout(function () {
        self.VvideoHeight = document.getElementsByClassName('vertical_video')[0].clientHeight/16-4+'rem';
        console.log('v:'+self.VvideoHeight)
      },500)
    },
    playerCard(val){
      this.playerBoxVisible = true;
      console.log(val.name)
      this.playerOptions.poster = '';
      this.playerOptions.sources[0]= {
        type: 'video/mp4', // 这里的种类支持很多种：基本视频格式、直播、流媒体等，具体可以参看git网址项目
        src: '' // url地址
      };
      this.playerOptions.sources[0].src = val.url;
      this.playerOptions.poster = val.img;
    },
    playerCardV(val){
      this.playerBoxVisible = true;
      console.log(val.name)
      this.playerOptions.poster = '';
      this.playerOptions.sources[0]= {
        type: 'video/mp4', // 这里的种类支持很多种：基本视频格式、直播、流媒体等，具体可以参看git网址项目
        src: '' // url地址
      };
      this.playerOptions.sources[0].src = val.url;
      this.playerOptions.poster = val.img;
    },
    close(){
      this.playerBoxVisible = false;
      this.playerOptions.poster = '';
      this.playerOptions.sources[0]= {
        type: 'video/mp4', // 这里的种类支持很多种：基本视频格式、直播、流媒体等，具体可以参看git网址项目
        src: '' // url地址
      };
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .menuBox{
    border-radius: 0 0 5px 5px;
    position: fixed;
    width: 100%;
    background: #7441a7;
    height: 3.5rem;
    overflow: hidden;
  }
  .menuBox .ivu-col-span-8{
    display: flex;
    justify-content: center;
  }
  .ivu-menu-light.ivu-menu-horizontal .ivu-menu-item, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu{
    color: #d4dcef;
    font-weight: 600;
  }
  .ivu-menu-light.ivu-menu-horizontal .ivu-menu-item-active, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-item:hover, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu-active, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu:hover{
    color: #efbb6e;
    border-bottom: 2px solid #7441a7;
  }

  video{
    width: 100%;
  }
  .videoBox{
    padding: 4.2rem 0.6rem 0.6rem;
  }
  .videoBox::-webkit-scrollbar {/*滚动条整体样式*/
    width: 0;     /*高宽分别对应横竖滚动条的尺寸*/
    height: 0;
    display: none;
  }
  .videoBox::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
    border-radius: 5px;
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    background: rgba(0,0,0,0.2);
  }
  .videoBox::-webkit-scrollbar-track {/*滚动条里面轨道*/
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    border-radius: 0;
    background: rgba(0,0,0,0.1);
  }
  .playerBox{
    width: 100%;
    position: fixed;
    top: 3.5rem;
    /*top: 0;*/
    left: 0;
    z-index: 901;
  }
  .closeIcon{
    position: absolute;
    top: 1rem;
    right: 1rem;
    z-index: 999;
    width: 1rem;
  }

  /*详情页的标题头*/
  .titleBox{
    text-align: left;
    font-size: .7rem;
    position: relative;
    padding: 5px 0;
    border-bottom: 2px solid #4b6684;
    margin-bottom: 1rem;
  }
  .titleBox:before{
    content:'';
    position: absolute;
    left: 12px;
    top:6px;
    width: 4px;
    height: 60%;
    background-color: #fff;
    border-radius: 2px;
  }
  .titleSpan{
    background-color: #4b6684;
    border-radius: 2px 38px 38px 2px;
    color: #fff;
    padding: .5rem 1.5rem;
  }
  .titleButton{
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;
    z-index: 10;
  }
</style>
