import axios from '../../node_modules/axios/dist/axios';

const Axios = axios.create({
    'baseURL': process.env.BASE_API,
    'timeout': 1000 * 60 * 10,
    'responseType': 'json'
});

Axios.defaults.adapter = function (config) {
    wx.showLoading({
        'title': '拼命加载中...'
    });
    return new Promise((resolve, reject) => {
        wx.request({
            'url': config.url,
            'method': config.method,
            'data': config.params,
            'success': (res) => {
                return resolve(res);
            },
            'fail': (err) => {
                return reject(err);
            },
            'complete': res => {
                wx.hideLoading();
                // TODO:
            }
        });
    });
};

// axios请求拦截
Axios.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        sendError(error);
        return Promise.reject(error.data);
    }
);
Axios.interceptors.response.use(
    res => {
        if ([200, 204].indexOf(res.statusCode) === -1) {
            console.log('res.status', res);
            sendError(res);
            return Promise.reject(res.data);
        }
        return res;
    },
    error => {
        sendError(error);
        return Promise.reject(error);
    });

export function fetch (options) {
    return new Promise((resolve, reject) => {
        Axios(options)
            .then(response => {
                resolve(response);
            })
            .catch(error => {
                reject(error);
            });
    });
}
/**
 * 此处为捕获到的异常，可以将此异常提交给Vuex的Store或者使用微信组件弹出
 *
 * @param {any} error
 */
function sendError (error) {
    let type = new Date().getMilliseconds();
    let data = [];
    var msg = '发生错误';

    console.log(msg);
    if (error.data) {
        data = error.data.errors;
        msg = error.data.message;
    } else if (error.response) {
        data = error.response.data;
        msg = data.message;
    } else {
        msg = error.message;
    }
    let errorData = {
        type,
        data,
        message: msg
    };

    console.log(errorData);
    // 1。store.dispatch('error/appendError', errorData)
    // 2。弹出
    wx.showToast({
        title: errorData.message,
        icon: 'none',
        duration: 3000,
        complete: (res) => {
            console.log(res);
        }
    });
}
