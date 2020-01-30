<template>
  <div class="header">
    <el-menu
      default-active="2"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      class="nav"
      :router="true"
    >
      <el-menu-item index="home">
        <el-avatar
          :size="50"
          src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
        />
      </el-menu-item>
      <el-menu-item index="home/community">社团</el-menu-item>
      <el-menu-item index="home/activity">活动</el-menu-item>
      <el-menu-item index="home/system">制度</el-menu-item>
    </el-menu>
    <el-menu
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      class="user"
    >
      <el-menu-item index="1">登录</el-menu-item>
      <el-menu-item index="2">注册</el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: "home-header"
};
</script>
<style scoped>
.header {
  display: flex;
  justify-content: space-between;
}
.nav {
  flex-grow: 1;
}
</style>
