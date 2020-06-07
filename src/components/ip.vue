<template>
  <div>
    <Row :gutter="10">
      <Col class="vedio_Clo" :span="12" v-for="(val,ind) in ipList" :key="ind+'ipList'">
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
      <Col class="vedio_Clo" :span="12" v-for="(val,index) in ipList1" :key="index+'ipList1'">
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
        ipList:[
          // {
          //   name:'精灵Taddy版',
          //   img:'https://images.magicscorp.com/Mimg/horizontal/h02.png',
          //   url:'https://videos.magicscorp.com/Mvideo/2%E7%B2%BE%E7%81%B5Taddy%E7%89%88.mp4'
          // },
          // {
          //   name:'圣元奶粉合作影片 ',
          //   img:'https://images.magicscorp.com/Mimg/horizontal/h09.png',
          //   url:'https://videos.magicscorp.com/Mvideo/9%E5%9C%A3%E5%85%83%E5%B0%8F%E7%BE%8A%E8%A7%86%E9%A2%91.mp4'
          // },
          {
            name:'小猪广告 ',
            img:'https://images.magicscorp.com/Mimg/horizontal/h11.png',
            url:'https://videos.magicscorp.com/Mvideo/11%E8%87%AA%E5%88%B6%E5%B0%8F%E7%8C%AA%E5%B9%BF%E5%91%8A.mp4'
          },
          {
            name:'Teddy宣传片',
            img:'https://images.magicscorp.com/Mimg/horizontal/h12.png',
            url:'https://videos.magicscorp.com/Mvideo/12taddy%E5%AE%A3%E4%BC%A0%E7%89%87.mp4'
          },
        ],
        ipList1:[
          // {
          //   name:'圣元奶粉合作影片01',
          //   img:'https://images.magicscorp.com/Mimg/vertical/v08.png',
          //   url:'https://videos.magicscorp.com/Mvideo/vertical/8%E5%9C%A3%E5%85%831.mp4'
          // },
          // {
          //   name:'圣元奶粉合作影片02',
          //   img:'https://images.magicscorp.com/Mimg/vertical/v09.png',
          //   url:'https://videos.magicscorp.com/Mvideo/vertical/9%E5%9C%A3%E5%85%832.mp4'
          // },
          // {
          //   name:'圣元奶粉合作影片03',
          //   img:'https://images.magicscorp.com/Mimg/vertical/v10.png',
          //   url:'https://videos.magicscorp.com/Mvideo/vertical/10%E5%9C%A3%E5%85%833.mp4'
          // },
          {
            name:'圣元奶粉合作影片',
            img:'https://images.magicscorp.com/Mimg/vertical/v11.png',
            url:'https://videos.magicscorp.com/Mvideo/vertical/11%E5%9C%A3%E5%85%834.mp4'
          },
          // {
          //   name:'圣元乳业吉祥物案例',
          //   img:'https://images.magicscorp.com/Mimg/vertical/v12.png',
          //   url:'https://videos.magicscorp.com/Mvideo/vertical/12%E5%9C%A3%E5%85%83%E4%B9%B3%E4%B8%9A%E5%90%89%E7%A5%A5%E7%89%A9%E6%A1%88%E4%BE%8B.mp4'
          // },
        ]
      }
    },
    methods:{
      playerCard(val){
        this.$emit('playEvent',val)
      }
    },
  }
</script>

