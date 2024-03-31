import type { App, Directive } from "vue";
import permissions from "./modules/permissions";
const directive: {
  [name: string]: Directive
} = {
  permissions
}
const installDirective = {
  install(app: App<Element>) {
    Object.keys(directive).forEach(key => {
      app.directive(key, directive[key])
    })
  }
}

export default installDirective