
<script setup lang="ts">
import { ElMessageBox } from 'element-plus'
interface ITableData {
  ID: string,
  username: string,
  email: string,
  roles: string[],
}
const tableData: ITableData[] = [
  {
    ID: '1',
    username: '小谢',
    email: '710961684@qq.com',
    roles: ["超管"],
  },
  {
    ID: '2',
    username: '小翠',
    email: '710961684@qq.com',
    roles: ["超管"],
  },
  {
    ID: '3',
    username: '小花',
    email: '710961684@qq.com',
    roles: ["网站管理员","客户经理","人力总监"],
  },
  {
    ID: '4',
    username: '小张',
    email: '710961684@qq.com',
    roles: ["财务人员"],
  },
  {
    ID: '5',
    username: '小露',
    email: '710961684@qq.com',
    roles: ["普通用户","销售主管"],
  },
  {
    ID: '6',
    username: '小翠',
    email: '710961684@qq.com',
    roles: ["超管"],
  },
  {
    ID: '7',
    username: '小花',
    email: '710961684@qq.com',
    roles: ["网站管理员","客户经理","人力总监"],
  },
  {
    ID: '8',
    username: '小张',
    email: '710961684@qq.com',
    roles: ["财务人员"],
  },
  {
    ID: '9',
    username: '小露',
    email: '710961684@qq.com',
    roles: ["普通用户","销售主管"],
  },
  {
    ID: '10',
    username: '小翠',
    email: '710961684@qq.com',
    roles: ["超管"],
  },
  {
    ID: '11',
    username: '小花',
    email: '710961684@qq.com',
    roles: ["网站管理员","客户经理","人力总监"],
  },
  {
    ID: '12',
    username: '小张',
    email: '710961684@qq.com',
    roles: ["财务人员"],
  },
  {
    ID: '13',
    username: '小露',
    email: '710961684@qq.com',
    roles: ["普通用户","销售主管"],
  },
  {
    ID: '14',
    username: '小翠',
    email: '710961684@qq.com',
    roles: ["超管"],
  },
  {
    ID: '15',
    username: '小花',
    email: '710961684@qq.com',
    roles: ["网站管理员","客户经理","人力总监"],
  },
  {
    ID: '16',
    username: '小张',
    email: '710961684@qq.com',
    roles: ["财务人员"],
  },
  {
    ID: '17',
    username: '小露',
    email: '710961684@qq.com',
    roles: ["普通用户","销售主管"],
  },
  {
    ID: '18',
    username: '小翠',
    email: '710961684@qq.com',
    roles: ["超管"],
  },
  {
    ID: '19',
    username: '小花',
    email: '710961684@qq.com',
    roles: ["网站管理员","客户经理","人力总监"],
  },
  {
    ID: '20',
    username: '小张',
    email: '710961684@qq.com',
    roles: ["财务人员"],
  },
  {
    ID: '21',
    username: '小露',
    email: '710961684@qq.com',
    roles: ["普通用户","销售主管"],
  },
]

// 编辑
const handleEdit = (data: ITableData) => {
  console.log(data)
}

// 删除
const handleDel = (data: ITableData) => {
  console.log(data)
  ElMessageBox.confirm('确定要删除该数据吗?', {
    cancelButtonText: '取消',
    confirmButtonText: '确定',
  })
    .then(() => {
      console.log('del')
    })
    .catch(() => {
      // catch error
    })
}
</script>

<template>
  <div>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="ID" label="用户ID" width="180" />
      <el-table-column prop="username" label="用户名" width="180" />
      <el-table-column prop="email" label="用户邮箱" />
      <el-table-column prop="roles" label="用户角色">
        <template #default="scope">
          <el-tag style="margin-right: 5px;" type="danger" disable-transitions v-for="(item, index) in scope.row.roles" :key="index">{{ item }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="160">
        <template #default="scope">
          <el-button type="primary" @click="handleEdit(scope.row)">编辑</el-button>
          <el-button type="danger" @click="handleDel(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>