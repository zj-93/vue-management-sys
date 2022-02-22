<template>
  <div class="home">
    <div class="search-wrapper">
      <el-input
        placeholder="请输入内容"
        v-model="input3"
        class="input-with-select"
      >
        <el-select v-model="select" slot="prepend" placeholder="请选择" @change="changeType">
          <el-option label="手机" value="1"></el-option>
          <el-option label="电脑" value="2"></el-option>
          <el-option label="美妆" value="3"></el-option>
        </el-select>
        <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
      </el-input>

      <div class="shopCar">
        <el-badge :value="3" class="item">
          <el-button type="success" round><i class="el-icon-shopping-cart-2"></i> 购物车</el-button>
        </el-badge>
         
      </div>
    </div>
    <el-scrollbar class="content">
        <ul class="ul-content">
          <li class="li-content" v-for="(item,index) in goodsList" :key="index">
            <img class="li-img" :src="item.goodsUrl" :alt="item.goodsBrand + item.goodsTitle">
            <div class="li-sub">
              <div>￥<span class="li-price">{{item.goodsPrice}}</span> <span class="li-subTitle">{{item.subTitle}}</span></div>
            </div>
            <div class="li-title">{{item.goodsTitle}}</div>
          </li>
        </ul>
    </el-scrollbar>
  </div>
</template>

<script>
import { getGoods } from "@/api/goods";

export default {
  components: {},
  data() {
    return {
      input3: "",
      select: "1",
      goodsList: []
    };
  },
  mounted() {
    this.search()
  },
  methods: {
    changeType(val) {
      this.search()
    },
    search() {
        let params = {
          type: this.select,
          name: this.input3
        }
        getGoods(params).then(res => {
          this.goodsList = res.data
        })
    }
  },
};
</script>

<style lang="less" scoped>
.home{
  height: 100%;
  margin-top: 20px;
  background-color: #f5f5f5;
}
::v-deep .el-select .el-input {
  width: 130px;
}
// ::v-deep .input-with-select .el-input-group__prepend {
//     background-color: #fff;
//   }
.search-wrapper {
  // margin-top: 20px;
  // height: 90px;
  line-height: 90px;
  text-align: center;
  background: url("@/image/img1.jpeg");
  position: relative;
  ::v-deep .input-with-select {
    width: 800px;
  }
  .shopCar{
    line-height: normal;
    color: #fff;
    margin-right: 20px;
    position: absolute;
    top: 25px;
    right: 50px;
  }
}
.content{
  overflow-y: auto;
  height: calc(100% - 110px);
  .ul-content{
    width: 1200px;
    margin: auto;
    padding: 0;
  margin-bottom: 20px;
  }
  .li-content{
    list-style: none;
    display: inline-block;
    background-color: #fff;
    margin: 10px 10px;
    padding: 10px;
    border-radius: 3px;
    .li-img{
      width: 200px;
      height: 200px;
    }
    .li-sub{
      color: #999;
      font-size: 12px;
      .li-price{
        color: #000;
        font-size: 18px;
      }
    }
  }
  
}
</style>
