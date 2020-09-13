<template>
  <div id="app">
    <div class="container">
      <div class="cover" :style="show?'':'display:none'">
        <div class="comfirm">
          <span>确认删除？</span>
          <div>
            <input
              type="button"
              value="confirm"
              class="confirm-btn"
              @click="deletehandel(itemData),show=false"
            />
            <input type="button" value="cancel" class="cancel-btn" @click="show =false" />
          </div>
        </div>
      </div>
      <div class="add-item">
        <input
          type="text"
          :class="empty?'empty-input':''"
          @change="inputhandel"
          :value="inputValue"
        />
        <button @click="addItem">添加事项</button>
      </div>
      <div class="items">
        <div class="cover-item">
          <div class="no-todos" :style="todoNum?'':'display:none'">完成了所有todo</div>
          <ul>
            <li class="item" @click="click1(item)" v-for="item in changeWhichCard">
              <div class="item-click">
                <input
                  type="checkbox"
                  :checked="item.done===true?true:false"
                  style="margin:5px"
                  value="bdsadbvasy"
                />
                <span>{{item.info}}</span>
              </div>
              <a @click.stop="show=true,itemData=item">删除</a>
              <!-- deletehandel(item), -->
            </li>
          </ul>
        </div>
        <div class="item-message">
          <span>{{residue}}条剩余</span>
          <div class="result">
            <a @click="changeCard('all')" :class="class_name==='all'?'selected':''">全部</a>
            <a
              class="middle"
              @click="changeCard('unfinished')"
              :class="class_name==='unfinished'?'selected':''"
            >未完成</a>
            <a @click="changeCard('finish')" :class="class_name==='finish'?'selected':''">已完成</a>
          </div>
          <a class="delete-finsh" @click="deleteFinished">删除已经完成</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  name: '',
  data() {
    return {
      empty: false,
      class_name: 'all',
      show: false,
      itemData: {},
    }
  },
  created() {
    this.$store.dispatch('getList')
  },
  methods: {
    click1(item) {
      this.$store.commit('confirmItem', item)
    },
    deletehandel(item) {
      // console.log(item)
      this.$store.commit('deleteItem', item)
    },
    //监听文本变化
    inputhandel(e) {
      this.$store.commit('changeInput', e.target.value)
    },
    addItem() {
      if (this.inputValue.trim().length === 0) {
        this.$data.empty = true
      } else {
        this.$data.empty = false
        this.$store.commit('addItem')
      }
    },
    changeCard(e) {
      this.$data.class_name = e
      this.$store.commit('changeSelected', e)
    },
    deleteFinished() {
      this.$store.commit('deleteFinished')
    },
  },
  computed: {
    ...mapState(['list', 'inputValue']),
    ...mapGetters(['residue', 'changeWhichCard']),
    todoNum() {
      if (this.changeWhichCard.length === 0) {
        return true
      } else {
        return false
      }
    },
  },
}
</script>

<style lang='scss'>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 16px;
  font-family: Fira Code, Menlo, Monaco, 'Courier New', monospace;
  list-style: none;
  transition: all 0.1s linear;
}
a {
  font-size: 0.8em;
  cursor: pointer;
  color: #409eff;
  &:hover {
    color: #f56c6c;
  }
}
.container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 400px;
  max-height: 600px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
}
.empty-input {
  border: 1px solid #f56c6c !important;
  outline: none;
}
.add-item > input {
  outline: none;
  padding: 5px;
  width: 400px;
  height: 2em;
  border-radius: 2px;
  border: 1px solid #dcdfe6;
  &:hover {
    border: 1px solid #409eff;
  }
  &:focus {
    border: 2px solid #409eff !important;
  }
}
.add-item > button {
  font-size: 0.5em;
  height: 32px;
  min-width: 100px;
  background-color: #409eff;
  border: none;
  color: #fff;
  position: absolute;
  margin-left: 20px;
  padding: 0 10px;
}

.items {
  margin-top: 10px;
  border: 1px solid #dcdfe6;
  position: relative;
}
.item {
  cursor: pointer;
  max-width: 400px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #dcdfe6;
  &:hover {
    // box-shadow: inset 0px 0px 9px -3px rgba(0,0,0,0.36);
    box-shadow: 0px 0px 4px 2px rgba(96, 98, 102, 0.15);
  }
  a {
    min-width: 30px;
  }
}
.item-click {
  display: flex;
  margin-right: 10px;
  color: #606266;
}
.item-message {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10px;
  justify-content: space-between;
  span {
    font-size: 0.7em;
  }
}
.result {
  outline: 1px solid #dcdfe6;
  display: flex;
}

.result > a {
  font-size: 0.9em;
  padding: 7px 10px;
  color: #000;
}
.selected {
  color: #fff !important;
  background-color: #409eff;
}
.result > a:hover {
  color: #fff;
  background-color: #409eff;
}
.middle {
  border-left: 1px solid #dcdfe6;
  border-right: 1px solid #dcdfe6;
}
.delete-finsh {
  font-size: 0.8em;
}
.cover {
  background-color: rgba($color: #000, $alpha: 0.2);
  height: 100%;
  width: 100%;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  z-index: 10;
  backdrop-filter: blur(2px);
}
.cover-item {
  position: relative;
  overflow-x: hidden;
  overflow-y: scroll;
  max-height: 400px;
}
//滚动条样式

.cover-item::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 2px; /*高宽分别对应横竖滚动条的尺寸*/
  height: 1px;
}
.cover-item::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: none;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: #535353;
}
.cover-item::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: none;
  background: #ededed;
}

.comfirm {
  background-color: #fff;
  border: 1px solid #ebeef5;
  border-radius: 5px;
  height: 30%;
  width: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 99;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  input {
    margin: 0 5px;
    font-size: 0.9em;
    padding: 5px 9px;
    border: 1px solid #dcdfe6;
  }
}
.cancel-btn {
  &:hover {
    background-color: #909399;
    color: #fff;
  }
}
.confirm-btn {
  color: #000;
  &:hover {
    color: #fff;
    background-color: #f56c6c;
  }
}
.cover-item {
  min-height: 200px;
  position: relative;
}
.no-todos {
  position: absolute;
  z-index: -1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
