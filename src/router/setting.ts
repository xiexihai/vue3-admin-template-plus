const AccountView = () => import('../views/setting/AccountView.vue')
const UserView = () => import('../views/setting/UserView.vue')

const routes = [
  {
    name: 'settingAccount',
    path: '/setting/account',
    meta: {
      title: '个人设置',
    },
    component: AccountView
  },
  {
    name: 'settingUser',
    path: '/setting/user',
    meta: {
      title: '账户设置',
    },
    component: UserView
  }
]
export default routes
