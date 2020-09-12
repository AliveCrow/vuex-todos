<template>
  <div id="app">
    <div class="container">
      <div class="add-item">
        <input type="text" />
        <button>添加事项</button>
      </div>
      <div class="items">
        <ul>
          <li class="item" @click="click1">
            <div class="item-click">
              <input type="checkbox" style="margin:5px" value="bdsadbvasy" />
              <span>bdsadbvasy</span>
            </div>
            <a @click.stop="click2">删除</a>
          </li>
        </ul>
        <div class="item-message">
          <span>1条剩余</span>
          <div class="result">
            <a>全部</a>
            <a class="middle">未完成</a>
            <a>已完成</a>
          </div>
          <a class="delete-finsh">删除已经完成</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {}
  },
  methods: {
    click1() {
      console.log('click1')
    },
    click2() {
      console.log('click2')
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
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
}
.add-item > input {
  padding: 5px;
  width: 400px;
  height: 2em;
  border: 1px solid #dcdfe6;
  &:hover {
    border: 1px solid #409eff;
  }
  &:focus {
    border-radius: none !important;
    border: 2px solid #409eff;
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
</style>
