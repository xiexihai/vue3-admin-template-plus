import { adminMenus, userMenus, type IMenuItem } from "./mock"
// 获取用户菜单权限-这里模拟登录之后请求接口返回用户菜单权限，模拟admin登录返回全部菜单，其他用户返回部分菜单
export const getUserMenus = (type = 'admin'): Promise<IMenuItem[]> => {
  return new Promise((resolve) => {
    // 这里真实场景可以替换成接口
    setTimeout(() => {
      resolve(type === 'admin' ? adminMenus : userMenus)
    }, 1000)
  })
}