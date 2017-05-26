<template>
    <div class="Ify_menu">
      <div class="Ify_left" ref="menuWrapper">
        <ul>
          <li class="Ify_left_li"  v-for="(item,index) in sort" :class="{'current':currentIndex===index}" @click="selectMenu(index,$event)">
            <span class="Ify_name">{{item.name}}</span>
          </li>
        </ul>
      </div>
      <div class="Ify_right" ref="foodsWrapper">
         <ul>
           <li v-for="item in sort" class="Ify_right food-list-hook">
             <h3 class="Ify_right_name" >{{item.name}}</h3>
             <div>
             <ul  class="foodbg">
               <li class="Ify_right_img_introduce" v-for="food in item.foods" >
                 <div class="foodimg">
                   <img :src="food.img">
                 </div>
                 <div class="foodconent">
                   <div class="food_title">{{food.title}}</div>
                   <div class="food_addlass">{{food.data_addlass}}</div>
                   <div class="food_etalon">{{food.etalon}}</div>
                   <div class="food_Price">{{food.retailPrice}}</div>
                 </div>
               </li>
             </ul>
             </div>
           </li>
         </ul>
      </div>
    </div>
</template>
<script>
  import BScroll from 'better-scroll'
    export default{

        data(){
            return {
                listHeight:[],
                scrollY:0,
              sort:[
                {name:"神经科",
                foods:[
                  {id:'1',img:'../../static/bg2x.png',title:"科采 蛹你草菌粉胶囊",etalon:"0.25g*48粒/盒",data_addlass:"广州市小小村",retailPrice:"￥258.00",},
                  {id:'2',img:'../../static/bg2x.png',title:"科采 蛹你草菌粉胶囊",etalon:"0.25g*48粒/盒",data_addlass:"广州市小小村",retailPrice:"￥258.00",},
                  {id:'3',img:'../../static/bg2x.png',title:"科采 蛹你草菌粉胶囊",etalon:"0.25g*48粒/盒",data_addlass:"广州市小小村",retailPrice:"￥258.00",},
                  {id:'4',img:'../../static/bg2x.png',title:"科采 蛹你草菌粉胶囊",etalon:"0.25g*48粒/盒",data_addlass:"广州市小小村",retailPrice:"￥258.00",},
                ]},
                {name:"神经科",
                  foods:[
                    {id:'1',img:'../../static/bg2x.png',title:"科采 蛹你草菌粉胶囊",etalon:"0.25g*48粒/盒",data_addlass:"广州市小小村",retailPrice:"￥258.00",},
                    {id:'2',img:'../../static/bg2x.png',title:"科采 蛹你草菌粉胶囊",etalon:"0.25g*48粒/盒",data_addlass:"广州市小小村",retailPrice:"￥258.00",},
                    {id:'3',img:'../../static/bg2x.png',title:"科采 蛹你草菌粉胶囊",etalon:"0.25g*48粒/盒",data_addlass:"广州市小小村",retailPrice:"￥258.00",},
                    {id:'4',img:'../../static/bg2x.png',title:"科采 蛹你草菌粉胶囊",etalon:"0.25g*48粒/盒",data_addlass:"广州市小小村",retailPrice:"￥258.00",},
                  ]},
                {name:"神经科",
                  foods:[
                    {id:'1',img:'../../static/bg2x.png',title:"科采 蛹你草菌粉胶囊",etalon:"0.25g*48粒/盒",data_addlass:"广州市小小村",retailPrice:"￥258.00",},
                    {id:'2',img:'../../static/bg2x.png',title:"科采 蛹你草菌粉胶囊",etalon:"0.25g*48粒/盒",data_addlass:"广州市小小村",retailPrice:"￥258.00",},
                    {id:'3',img:'../../static/bg2x.png',title:"科采 蛹你草菌粉胶囊",etalon:"0.25g*48粒/盒",data_addlass:"广州市小小村",retailPrice:"￥258.00",},
                    {id:'4',img:'../../static/bg2x.png',title:"科采 蛹你草菌粉胶囊",etalon:"0.25g*48粒/盒",data_addlass:"广州市小小村",retailPrice:"￥258.00",},
                  ]}

              ]
            }
        },
      mounted() {
        this.$nextTick(function () {
          this._initScroll();
          this._calculateHeight();
        })
      },
      methods:{
        selectMenu(index,event){
          console.log(event)
          console.log(index)
            if(!event._constructed){
                return;
            }
          let foodList=this.$refs.foodsWrapper.getElementsByClassName('food-list-hook');
          let el=foodList[index];
          console.log(el)
            this.foodsScroll.scrollToElement(el,300);
          console.log(this.foodsScroll.scrollToElement(el,300))
        },
        _initScroll(){
                this.meunScroll=new BScroll(this.$refs.menuWrapper,{
                    click:true
                });
                this.foodsScroll=new BScroll(this.$refs.foodsWrapper,{
                    click:true,
                    probeType:3
                })
                this.foodsScroll.on('scroll',(pos)=>{
                    this.scrollY=Math.abs(Math.round(pos.y))
                })
            },
        _calculateHeight(){
           let foodList=this.$refs.foodsWrapper.getElementsByClassName('food-list-hook');
           let height=0;
           this.listHeight.push(height);
           for(let i=0;i<foodList.length;i++){
               let item =foodList[i];
               height += item.clientHeight;
               this.listHeight.push(height)
           }
        }
      },
      computed:{
       currentIndex(){
             for(let i=0;i<this.listHeight.length;i++){
                 let heightOne=this.listHeight[i];
                 let heightWto=this.listHeight[i + 1];
               console.log(heightOne)
               console.log(heightWto)
               console.log(this.scrollY)
                 if(!heightWto || (this.scrollY >= heightOne && this.scrollY < heightWto)){
                   console.log(i)
                       return i;
                 }
             }
             return 0;
         }
      }
    }
</script>
<style scoped>
  .Ify_menu{
    display: flex;
  }
  .Ify_menu .Ify_left{
    flex: 0 0 85px;
    width: 85px;
    height:44px;
    line-height: 44px;
    display: table;
  }
   .Ify_left_li{

  }
  .Ify_menu .Ify_left .Ify_name{
    font-size: 15px;
    color: #888;
    text-align: center;
    display: block;
    border-bottom:2px solid #fff;
  }
  .Ify_right{
    flex:1;
  }
  .col-xs-3 label{
    line-height: 78px;
    vertical-align: middle;
  }
  .Ify_right_name{
    width: 100%;
    height:25px;
    line-height: 25px;
    background: #f4f4f4;
    color:#36b5f8 ;
    font-size: 12px;
    text-align: left;
  }
  .Ify_right_img_introduce{
    display: flex;
  }
  .Ify_right_img_introduce .foodimg{
    flex:0 0 80px;
    width: 80px;
    height: 80px;
  }
  .Ify_right_img_introduce .foodconent{
    flex:1;
    text-align: left;
    margin-left:10px;
  }

  .Allconent .food_title{
    font-size: 14px;
    color: #353535;
  }
  .Allconent  .food_addlass ,.food_etalon{
    font-size: 12px;
    color: #888;
  }
  .Allconent  .food_Price{
    font-size: 18px;
    color: #e9423a;
  }
  .current{
    position: relative;
    z-index: 10;
    margin-top:-1px;
    font-weight: 700;
    background: #fff;
    border-left:2px solid #36b5f8;
  }
.foodbg{
  background: #fff;
}

</style>
