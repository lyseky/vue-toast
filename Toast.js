/**
 * Vue toast plugin
 * Created by lyseky on 2017/12/19
 */

import './Toast.css'

/**
 * @param {string} text content of the toast
 * @param {string} type  type of the toast  "default" || "success" || "warning" || "info" || "error"
 * @param {number} duration  time before the toast vanishes, in millisecond
 * @param {number} position
 */
function toast (obj) {
    // 如果toast还在，则不再执行
    if(document.getElementsByClassName('vue-toast').length){
        return
    }

    const text        = obj.text;
    const type        = obj.type || "default";
    const position    = obj.position || "middle";
    const duration    = obj.duration || "2000";

    if (text && typeof text !== 'string') {
        throw new Error('toast content is not string.')
    }

    if (type && ['default','success', 'warning', 'info', 'error'].indexOf(type) === -1) {
        throw new Error('toast type should be one of "success, warning, info, error".')
    }

    if (position && ['top','middle', 'bottom'].indexOf(position) === -1) {
        throw new Error('toast position should be one of "top, middle, bottom".')
    }

    if (isNaN(Number(duration))) {
        throw new Error('toast duration should be number.')
    }

    const toastEl = document.createElement('div')
    toastEl.className = 'toast-container'
    document.body.appendChild(toastEl)

    const toastInner = document.createElement('div')
    toastInner.innerHTML = text
    toastInner.className = 'vue-toast ' + type +' '+ position
    document.querySelector('.toast-container').appendChild(toastInner)

    setTimeout(function () {
        toastEl.className += ' hide'
        setTimeout(function () {
            toastEl.parentNode.removeChild(toastEl)
        }, 300)
    }, Number(duration))
}

export default {
    install: function (Vue, options) {
        if (!Vue.prototype.Toast) {
            Vue.prototype.Toast = toast
        }
    }
}
