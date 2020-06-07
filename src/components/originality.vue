<template>
  <div>
    <Row :gutter="10">
      <Col class="vedio_Clo" :span="12" v-for="(val,ind) in originalityList" :key="ind+'originalityList'">
        <Card style="overflow: hidden" :padding="0">
          <div
            class="img_div" @click.stop="playerCard(val,ind)">
            <img :src="val.img"
                 class='video_img h_video'
                 :style="'height:'+ HvideoHeight"
                 alt=""/>
            <img class="playicon" src="../assets/fiona/play.png" alt="">
            <p class="video_name"> {{val.name}}</p>
          </div>
        </Card>
      </Col>
    </Row>
    <Row :gutter="10">
      <Col class="vedio_Clo" :span="12" v-for="(val,index) in originalityList1" :key="index+'originalityList1'">
        <Card style="overflow: hidden" :padding="0">
          <div
            class="img_div" @click.stop="playerCard(val)">
            <div class="nor_div" :style="'height:'+ VvideoHeight">
              <img :src="val.img"
                   class='video_img vertical_video'
                   alt=""/>
              <img class="playicon2" src="../assets/fiona/play.png" alt="">
            </div>
            <p class="video_name" style="padding: 3px 0"> {{val.name}}</p>
          </div>
        </Card>
      </Col>
    </Row>
  </div>
</template>

<script>
  export default {
    props:{
      HvideoHeight:null,
      VvideoHeight:null,
    },
    data () {
      return {
        originalityList:[
          {
            name:'Zippo',
            img:'https://images.magicscorp.com/Mimg/horizontal/h01.png',
            url:'https://videos.magicscorp.com/Mvideo/1zippo.mp4'
          },
          {
            name:'皮炎平广告',
            img:'https://images.magicscorp.com/Mimg/horizontal/h05.png',
            url:'https://videos.magicscorp.com/Mvideo/5%E5%B9%BF%E5%91%8A%E7%BE%8A.mp4'
          },
          {
            name:'导航栏互动',
            img:'https://images.magicscorp.com/Mimg/horizontal/h03.png',
            url:'https://videos.magicscorp.com/Mvideo/3%E5%AF%BC%E8%88%AA%E6%A0%8F%E4%BA%92%E5%8A%A8.mp4'
          },
          {
            name:'钢铁侠实时互动',
            img:'https://images.magicscorp.com/Mimg/horizontal/h04.png',
            url:'https://videos.magicscorp.com/Mvideo/4%E9%92%A2%E9%93%81%E4%BE%A0%E5%AE%9E%E6%97%B6%E4%BA%92%E5%8A%A8.mp4'
          },
          // {
          //   name:'洛基实时互动',
          //   img:'https://images.magicscorp.com/Mimg/horizontal/h06.png',
          //   url:'https://videos.magicscorp.com/Mvideo/6%E6%B4%9B%E5%9F%BA%E5%AE%9E%E6%97%B6%E4%BA%92%E5%8A%A8.mp4'
          // },
          {
            name:'院线广告 ',
            img:'https://images.magicscorp.com/Mimg/horizontal/h10.png',
            url:'https://videos.magicscorp.com/Mvideo/10%E9%99%A2%E7%BA%BF%E5%B9%BF%E5%91%8A.mp4'
          },
          {
            name:'海信连麦k歌曲',
            img:'https://images.magicscorp.com/Mimg/horizontal/h13.png',
            url:'https://videos.magicscorp.com/Mvideo/13%E6%B5%B7%E4%BF%A1%E8%BF%9E%E9%BA%A6k%E6%AD%8C%E6%9B%B2.mp4'
          }
        ],
        originalityList1:[
          {
            name:'泰迪清风 ',
            img:'https://images.magicscorp.com/Mimg/vertical/v13.png',
            url:'https://videos.magicscorp.com/Mvideo/vertical/13%E6%B3%B0%E8%BF%AA%E6%B8%85%E9%A3%8E.mp4'
          },
          {
            name:'3D精灵霸屏浮层广告',
            img:'https://images.magicscorp.com/Mimg/vertical/v01.png',
            url:'https://videos.magicscorp.com/Mvideo/vertical/1%E7%B2%BE%E7%81%B5%2B3d%E5%B1%95%E7%A4%BA%E9%9C%B8%E5%B1%8F%E6%B5%AE%E5%B1%82%E5%B9%BF%E5%91%8A.mp4'
          },
          // {
          //   name:'3D精灵互动霸屏广告02',
          //   img:'https://images.magicscorp.com/Mimg/vertical/v17.png',
          //   url:'https://videos.magicscorp.com/Mvideo/vertical/17%E7%B2%BE%E7%81%B5%2B3d%E4%BA%92%E5%8A%A8%E9%9C%B8%E5%B1%8F%E5%B9%BF%E5%91%8A.mp4'
          // },
          // {
          //   name:'分时用户场景展示广告',
          //   img:'https://images.magicscorp.com/Mimg/vertical/v02.png',
          //   url:'https://videos.magicscorp.com/Mvideo/vertical/2%E5%88%86%E6%97%B6%E7%94%A8%E6%88%B7%E5%9C%BA%E6%99%AF%E5%B1%95%E7%A4%BA%E5%B9%BF%E5%91%8A.mp4'
          // },
          {
            name:'banner霸屏浮层动画特效广告 ',
            img:'https://images.magicscorp.com/Mimg/vertical/v14.png',
            url:'https://videos.magicscorp.com/Mvideo/vertical/14banner%2B%E9%9C%B8%E5%B1%8F%E6%B5%AE%E5%B1%82%E5%8A%A8%E7%94%BB%E7%89%B9%E6%95%88%E5%B9%BF%E5%91%8A.mp4'
          },
          {
            name:'开屏+首屏 三维互动广告',
            img:'https://images.magicscorp.com/Mimg/vertical/v15.png',
            url:'https://videos.magicscorp.com/Mvideo/vertical/15%E5%BC%80%E5%B1%8F%2B%E9%A6%96%E5%B1%8F%20%E4%B8%89%E7%BB%B4%E4%BA%92%E5%8A%A8%E5%B9%BF%E5%91%8A.mp4'
          },
          {
            name:'开屏+首屏UI互动广告',
            img:'https://images.magicscorp.com/Mimg/vertical/v16.png',
            url:'https://videos.magicscorp.com/Mvideo/vertical/16%E5%BC%80%E5%B1%8F%2B%E9%A6%96%E5%B1%8FUI%E4%BA%92%E5%8A%A8%E5%B9%BF%E5%91%8A.mp4'
          }
        ],
      }
    },
    methods:{
      playerCard(val){
        this.$emit('playEvent',val)
      }
    },
  }
</script>

