<template>
    <div>
        <salehead></salehead>
        <div>
        <div class="user-head col-12 clearfix container">
        <div class="left">
            <img src="../assets/img/user.png" alt="">
        </div>
        <div class="user-info left">
            <p>1111111</p>
            <span>139XXXXXXXXX</span>
        </div>
    </div>
    <div class="user-body container col-12 clearfix">
        <div class="user-nav left col-3">
            <ul>
                <li><a href="">基本资料</a></li>
                <li><a href="">寄售信息</a></li>
                <li><a href="">出租信息</a></li>
                <li><a href="">我的收藏</a></li>
                <li><a href="">历史交易</a></li>
            </ul>
        </div>
        <div class="nav-content left col-9">
            <h4>基本信息</h4>
            <div class="content-basic">
                <form action="">
                    <div>
                        <span>用户名</span>
                        <input type="text" placeholder="请输入用户名">
                    </div>
                    <div>
                        <span>密码</span>
                        <input type="password" placeholder="请输入密码">
                    </div>
                    <div>
                        <span>联系方式</span>
                        <input type="text" placeholder="请输入手机号码">
                    </div>
                    <div class="user-avatar">
                        <img src="../assets/img/user.png" alt="">
                        <button>上传</button>
                    </div>
                    <button>提交</button>
                </form>
            </div>
            <div class="sale-info">
                
            </div>
        </div>
    </div>
    </div>
    </div>
</template>

<script>
    export default{

    }
</script>

<style>
.user-head {
  padding: 10px;
  background: #fff;
}

.user-head div {
  border: 1px solid #fff;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  padding: 5px;
}

.user-head div img {
  width: 100%;
}

.user-head .user-info {
  border: none;
  margin-left: 5px;
  width: 150px;
}

.user-head .user-info p {
  margin-top: 15px;
}

.user-body {
  background: #fff;
  margin-top: 20px;
  padding: 10px;
}

.user-nav {
  border-radius: 2px;
  box-shadow: 0 2px 2px 2px #999;
}

.user-nav ul {
  width: 100%;
  padding: 5px;
  box-sizing: border-box;
}

.user-nav ul li {
  width: 100%;
  padding: 10px;
  border-bottom: 1px solid #999;
  box-sizing: border-box;
}

.user-nav ul li:last-child {
  border: none;
}

.nav-content {
  padding: 20px;
}

.nav-content h4 {
  padding: 2px;
  border-bottom: 1px solid #999;
  box-sizing: border-box;
  width: 100%;
}

.content-basic {
  padding: 10px;
}

.content-basic form {
  position: relative;
}

.content-basic div {
  padding: 20px 10px;
  font-size: 16px;
  width: 50%;
}

.content-basic div span {
  display: inline-block;
  width: 120px;
}

.content-basic div input {
  font-size: 16px;
}

.content-basic button {
  padding: 10px;
  width: 100px;
  margin: 20px auto;
  background: #e8e363;
  font-size: 18px;
  border-radius: 5px;
  display: block;
}

.content-basic .user-avatar {
  position: absolute;
  width: 100px;
  height: 100px;
  right: 150px;
  top: 0;
}

.content-basic .user-avatar img {
  width: 100%;
}

.content-basic .user-avatar button {
  padding: 2px;
  width: 70%;
  margin: 0 auto;
}
</style>
