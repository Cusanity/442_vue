<template>
  <div>
    <el-form ref="elForm" :model="formData" :rules="rules" size="small" label-width="100px"
      label-position="left">
      <el-row type="flex" justify="center" align="middle">
        <el-col :span="6">
          <el-form-item label="Email" prop="Email">
            <el-input v-model="formData.Email" placeholder="Email" clearable :style="{width: '100%'}">
            </el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center" align="middle">
        <el-col :span="6">
          <el-form-item label="Password" prop="Password">
            <el-input v-model="formData.Password" placeholder="Password" clearable show-password
              :style="{width: '100%'}"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center" align="middle">
        <el-col :span="6">
          <el-form-item label-width="138px" label="Confirm Password" prop="ConfirmPassword">
            <el-input v-model="formData.ConfirmPassword" placeholder="Confirm Password" clearable
              show-password :style="{width: '100%'}"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item size="large">
        <el-button type="primary" @click="submitForm">Sign Up</el-button>
        <el-button @click="resetForm">Reset</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
// import $ from "jquery"
  import axios from 'axios'

export default {
  components: {},
  props: [],
  data() {
    return {
      formData: {
        Email: undefined,
        Password: undefined,
        ConfirmPassword: undefined,
      },
      rules: {
        Email: [{
          required: true,
          message: 'Email cannot be empty',
          trigger: 'blur'
        }, {
          pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.(com|cn|edu))+$/,
          message: 'Wrong Email format',
          trigger: 'blur'
        }],
        Password: [{
          required: true,
          message: 'Password is required',
          trigger: 'blur'
        }],
        ConfirmPassword: [{
          required: true,
          message: 'Password cannot be empty',
          trigger: 'blur'
        }],
      },
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    submitForm() {
      
      this.$refs['elForm'].validate(valid => {
        if (!valid) return
        if(!this.checkForm(this.formData)){
          this.showError('Passwords do not match');
          return
        }
        console.log(JSON.stringify(this.formData))
        axios.post('./php/signup.php', JSON.stringify(this.formData))
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        // $.ajax({
        //       type: 'post',
        //       url: './php/signup.php',
        //       data: this.formData,
        //       success: function (resp) {
        //         if(resp==='1'){
        //           console.log(this)
        //           this.showError('Email already exists');
        //         }
        //       }
        // });
      })
    },
    resetForm() {
      this.$refs['elForm'].resetFields()
    },
    checkForm(formData) {
      const pwd = formData.Password
      const confirmPwd = formData.ConfirmPassword
      return pwd === confirmPwd
    },
    showError(errMsg){
      this.$message.error(errMsg);
    }
  }
}
</script>

<style>
</style>
