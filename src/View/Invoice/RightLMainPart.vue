<template>
    <div class="common-layout">
      <el-card>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
        <el-footer>Footer</el-footer>
      </el-card>
    </div>
  </template>
  

<script>

export default {
    name: "RightMainPart",
    props: {
        responseObj: {
            type: Object,
            // required: true,
        },
    },
};</script>

<style></style>
