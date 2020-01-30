<template>
  <el-container>
    <el-header>
      <HomeHeader />
    </el-header>
    <el-main>
      <router-view />
    </el-main>
    <el-footer />
  </el-container>
</template>

<script>
import HomeHeader from "./HomeHeader";
export default {
  name: "home",
  components: {
    HomeHeader
  }
};
</script>
