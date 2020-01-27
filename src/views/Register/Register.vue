<template>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px">
    <el-form-item label="学号" prop="stuNo">
      <el-input v-model="ruleForm.stuNo" />
    </el-form-item>
    <el-form-item label="姓名" prop="stuName">
      <el-input v-model="ruleForm.stuName" />
    </el-form-item>
    <el-form-item label="性别" prop="stuSex">
      <el-select v-model="ruleForm.stuSex" placeholder="请选择活动区域">
        <el-option label="男" value="male" />
        <el-option label="女" value="female" />
      </el-select>
    </el-form-item>
    <el-form-item label="电话" prop="stuTel">
      <el-input v-model="ruleForm.stuTel" />
    </el-form-item>
    <el-form-item label="密码" prop="stuPwd">
      <el-input v-model="ruleForm.stuPass" />
    </el-form-item>
    <el-form-item label="重复密码" prop="stuRePwd">
      <el-input v-model="ruleForm.stuCheckPass" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')"
        >立即创建</el-button
      >
      <el-button @click="resetForm('ruleForm')">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: "register",
  data() {
    const validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.stuCheckPass !== "") {
          this.$refs.ruleForm.validateField("stuCheckPass");
        }
        callback();
      }
    };
    const validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.stuPass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        stuNo: "",
        stuName: "",
        stuSex: "male",
        stuTel: "",
        stuPass: "",
        stuCheckPass: ""
      },
      rules: {
        stuNo: [
          { required: true, message: "请输入学号", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        stuName: [{ required: true, message: "请输入姓名", trigger: "change" }],
        stuTel: [
          { required: true, message: "请输入电话号码", trigger: "change" }
        ],
        stuPass: [{ validator: validatePass, trigger: "blur" }],
        stuCheckPass: [{ validator: validatePass2, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
