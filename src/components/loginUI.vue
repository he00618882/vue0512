<template>
  <div class="loginUI">
    <div class="wrapper" v-if="showmsg">
        <div class="modal modal--congratulations">
            <div class="modal-top">
                <img class="modal-icon u-imgResponsive" src="https://dl.dropboxusercontent.com/s/e1t2hhowjcrs7f5/100daysui_100icon.png" alt="Trophy" />
                <div class="modal-header">現在登入就送S級火槍兵</div>
                <div class="modal-subheader">註冊就抽Iphone12</div>
            </div>
            <div class="modal-bottom">
                <button class="modal-btn u-btn u-btn--share" @click="showmsg=false ; ">馬上登入</button>
                <button class="modal-btn u-btn u-btn--success" @click="showmsg=false ;type=''; ">我要註冊</button>
            </div>
        </div>
    </div>


        <div :class="type == 'Login'?'container':'container_1'">
            <form class="form" v-if="type == 'Login'">
                登入
                <input type="text" class="forminput" placeholder="你的名子/帳號" v-model="userName">
                <input type="text" class="forminput" placeholder="交出你的密碼" v-model="password">
                <button class="formbutton" @click.prevent="doLogin">登入</button>
                <button class="formbutton" @click.prevent="type=''">註冊</button>
            </form>
            <form class="form" v-if="type != 'Login'">
                註冊
                <input type="text" class="forminput" placeholder="你的名子" v-model="userName">
                <input type="text" class="forminput" placeholder="你可以不用打我也不想記\(·w·)/" v-model="password">
                <button class="formbutton" @click.prevent="doRegistered">註冊此帳號</button>
                <button class="formbutton" @click.prevent="type='Login'">返回</button>
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
            showmsg:true,
            type:'Login',
            userName:"",
            password:""
        }
  },
  computed: {

  },
  mounted(){
    this.$store.state.Lv = "3"
    this.$store.state.userName = "你誰!!";
    this.$router.push({ path: 'home' })
  },
  methods:{
      doLogin(){
        if(this.userName){
          if(this.$store.state.user[this.userName]){
            this.$store.state.Lv = this.$store.state.user[this.userName]
            this.$store.state.userName = this.userName;
            this.$router.push({ path: 'home' })
          }else{
            alert('快去註冊一個吧 還可以抽抽看哀鳳12')
          }
        }else{
          alert('你沒輸入帳號阿')
        }

      },
      doRegistered(){
        if(this.userName){
          if(!this.$store.state.user[this.userName]){
            if(this.password<=0){
              alert('其實密碼就是你權限等級 看你傻傻der就給你1好了')
              this.password = 1
            }
            this.$store.state.user = Object.assign({[this.userName]:this.password}, this.$store.state.user);
            this.password ="";
            this.type ="Login";
            alert('註冊成功了 很遺憾的跟你說你沒抽到~  不過快去領S級火槍兵阿')
          }else{
            alert('不是阿!你註冊過了快登入領火槍兵阿')
          }
        }else{
          alert('你沒輸入帳號阿')
        }
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

.u-imgResponsive {
  max-width: 100%;
}

.u-btn {
  -webkit-box-flex: 0;
          flex: 0 0 100%;
  padding: 14px 20px;
  border: 0;
  background: -webkit-gradient(linear, left bottom, left top, from(rgba(255, 255, 255, 0)), to(rgba(250, 198, 100, 0.27))), #2976df;
  background: linear-gradient(to top, rgba(255, 255, 255, 0) 0%, rgba(250, 198, 100, 0.27) 100%), #2976df;
  border-radius: 25px;
  color: #fff;
  font-size: 18px;
  letter-spacing: 1px;
  -webkit-transition: all .2s ease;
  transition: all .2s ease;
  box-shadow: 0 15px 40px 0 rgba(41, 118, 223, 0.5);
}
.u-btn:hover {
  opacity: 0.9;
}
.u-btn.u-btn--success {
  background: #00d000;
  box-shadow: 0 15px 40px 0 rgba(0, 208, 0, 0.5);
}

/* Global 
====================== */
html {
  box-sizing: border-box;
  height: 100%;
}
html *,
html *:before
*:after {
  box-sizing: inherit;
}

body {
  font-family: "Proxima Nova Soft Semibold", "Proxima Nova", 'Helvetica Neue', Helvetica, Arial;
}

body,
.wrapper {
  min-height: 100vh;
}

/* Modal 
====================== */
.wrapper {
  position: absolute;
  display: -webkit-box;
  display: flex;
  -webkit-box-align: center;
          align-items: center;
  -webkit-box-pack: center;
          justify-content: center;
  background-size: cover;
}

.modal {
  width: 100%;
  max-width: 530px;
  margin: 20px;
  overflow: hidden;
  box-shadow: 0 60px 80px 0 rgba(0, 0, 0, 0.4);
}

.modal-top {
  padding: 30px 30px 20px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background: #fbfbfb;
}

.modal-icon {
  display: block;
  max-width: 207px;
  margin: 0 auto 65px;
}

.modal-header {
  margin-bottom: 10px;
  font-size: 25.5px;
  letter-spacing: 2px;
  text-align: center;
}

.modal-subheader {
  max-width: 350px;
  margin: 0 auto;
  font-size: 19px;
  line-height: 1.3;
  letter-spacing: 1.25px;
  text-align: center;
  color: #999;
}

.modal-bottom {
  display: -webkit-box;
  display: flex;
  flex-wrap: wrap;
  padding: 15px 55px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background: #fff;
}

.modal-btn {
  margin: 10px auto;
}

/* Media Queries */
@media (min-width: 456px) {
  .modal-top {
    padding: 69px 0 65px;
  }

  .modal-bottom {
    padding: 30px 60px;
  }

  .modal-btn {
    -webkit-box-flex: 1;
            flex: 1;
    margin: 0;
    max-width: 190px;
  }
  .modal-btn:nth-of-type(2) {
    margin-left: 30px;
  }
}

</style>
