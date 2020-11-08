<template>
  <div class="loginUI">
        <div :class="type == 'Login'?'container':'container_1'">
            <form class="form" v-if="type == 'Login'">
                登入
                <input type="text" class="forminput" placeholder="你的名子/帳號" v-model="userName">
                <input type="text" class="forminput" placeholder="交出你的密碼" v-model="password">
                <button class="formbutton" @click="doLogin">登入</button>
                <button class="formbutton" @click="type=''">註冊</button>
            </form>
            <form class="form" v-if="type != 'Login'">
                註冊
                <input type="text" class="forminput" placeholder="你的名子" v-model="userName">
                <input type="text" class="forminput" placeholder="你可以不用打我也不想記\(·w·)/" v-model="password">
                <button class="formbutton">註冊此帳號</button>
                <button class="formbutton" @click="type='Login'">返回</button>
            </form>
        </div>

  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  name: 'loginUI',
  data(){
        return {
            type:'Login',
        }
  },
  computed: {

  },
  methods:{
      doLogin(){
          this.$router.push({ path: 'home' })
      }
  },
  
}
</script>

<style>
.loginUI{
    margin: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #1D1E23;
}

.container {
  width: 300px;
  height: 330px;
  background-color: #100e0f;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.container_1 {
  width: 300px;
  height: 330px;
  background-color: #0b2210;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.container__logo {
  height: 70px;
  width: 70px;
  margin: 40px auto;
}
.form {
  display: flex;
  height: 300px;
  width: 100%;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
}
.forminput {
  width: 200px;
  background-color: transparent;
  border: 0;
  border-bottom: 1px dashed #007af5;
  margin-bottom: 30px;
  color: white;
  height: 30px;
}
.formbutton {
  background-color: transparent;
  border: 0;
  color: #c2c3c4;
  height: 50px;
  width: 100%;
}
.formbutton:hover{
  opacity: .8;
  background-color: rgba(92, 92, 92, 0.8);
}
</style>
