var Alert = require('@/components/Toast.vue');
var Toast = {}
Toast.install = function (Vue, options) {
    if (document.getElementsByClassName('alertBox').length) {
        return;
    }
    let toastTpl = Vue.extend(Alert)
    let $vm = new toastTpl()
    let tpl = $vm.$mount().$el
    document.body.appendChild(tpl);

    Vue.prototype.$toast = {
        show(options) {
            if (typeof options === 'string') {
                $vm.text = options
            } else if (typeof options === 'object') {
                Object.assign($vm, options)//合并参数与实例
            }
            $vm.show = true
        },
        hide() {
            $vm.show = false
        }
    }
}

export default Toast;

