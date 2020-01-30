<template>
  <el-table
    :data="data"
  >
    <el-table-column/>
  </el-table>
</template>

<script>
export default {
  name: "Table",
  props: {
    data: Object,
    loading: Boolean,
    header: Object
  }
};
</script>

<style scoped></style>
