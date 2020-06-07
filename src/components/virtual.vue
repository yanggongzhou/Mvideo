<template>
  <div>
    <Row :gutter="10">
      <Col class="vedio_Clo" :span="12" v-for="(val,index) in virtualList1" :key="index+'virtualList1'">
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
    <Row :gutter="10">
      <Col class="vedio_Clo" :span="12" v-for="(val,ind) in virtualList" :key="ind+'virtualList'">
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
        virtualList:[
          {
            name:'乐喵直播',
            img:'https://images.magicscorp.com/Mimg/horizontal/h07.png',
            url:'https://videos.magicscorp.com/Mvideo/7%E4%B9%90%E5%96%B5%E7%9B%B4%E6%92%AD%E7%89%87%E6%AE%B51.mp4'
          },
          // {
          //   name:'乐喵直播片段',
          //   img:'https://images.magicscorp.com/Mimg/horizontal/h08.png',
          //   url:'https://videos.magicscorp.com/Mvideo/8%E4%B9%90%E5%96%B5%E7%9B%B4%E6%92%AD%E7%89%87%E6%AE%B52.mp4'
          // }
        ],
        virtualList1:[
          // {
          //   name:'我是不白吃抖音直播01',
          //   img:'https://images.magicscorp.com/Mimg/vertical/v18.png',
          //   url:'https://videos.magicscorp.com/Mvideo/vertical/18v.mp4'
          // },
          {
            name:'我是不白吃抖音直播',
            img:'https://images.magicscorp.com/Mimg/vertical/v19.png',
            url:'https://videos.magicscorp.com/Mvideo/vertical/19v.mp4'
          },
          // {
          //   name:'火火抖音直播01',
          //   img:'https://images.magicscorp.com/Mimg/vertical/v03.png',
          //   url:'https://videos.magicscorp.com/Mvideo/vertical/3%E7%81%AB%E7%81%AB%E5%B8%A6%E8%B4%A7.mp4'
          // },
          // {
          //   name:'火火抖音直播02',
          //   img:'https://images.magicscorp.com/Mimg/vertical/v04.png',
          //   url:'https://videos.magicscorp.com/Mvideo/vertical/4%E7%81%AB%E7%81%AB%E6%8A%96%E9%9F%B3%E7%9B%B4%E6%92%AD1.mp4'
          // },
          // {
          //   name:'火火抖音直播03',
          //   img:'https://images.magicscorp.com/Mimg/vertical/v05.png',
          //   url:'https://videos.magicscorp.com/Mvideo/vertical/5%E7%81%AB%E7%81%AB%E6%8A%96%E9%9F%B3%E7%9B%B4%E6%92%AD2.mp4'
          // },
          {
            name:'火火抖音直播',
            img:'https://images.magicscorp.com/Mimg/vertical/v06.png',
            url:'https://videos.magicscorp.com/Mvideo/vertical/6%E7%81%AB%E7%81%AB%E7%9B%B4%E6%92%AD4.mp4'
          },
          // {
          //   name:'火火抖音直播05',
          //   img:'https://images.magicscorp.com/Mimg/vertical/v07.png',
          //   url:'https://videos.magicscorp.com/Mvideo/vertical/7%E7%81%AB%E7%81%AB%E7%9B%B4%E6%92%AD5.mp4'
          // },
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
