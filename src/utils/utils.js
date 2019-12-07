import httpAxios from '@/lib/axiosRequest';
// import sysConfigs from '@/lib/sysConfig'

const utils = {
    /**
     * apiRequest底层
     * @param url
     * @param form
     * @returns {Promise<T>}
     */
    async apiRequest(url, form = {}, params = {}) {
        let apiUrl = url;
        // eslint-disable-next-line no-console
        console.log('发起交互:' + url, form);
        return await httpAxios.post(apiUrl, {
            params
        }).then(res => {
            // eslint-disable-next-line no-console
            console.log('交互完毕:', res);
            if (res.code != 200) {
                throw res.msg
            }
            return res
        }).catch(error => {
            throw error;
        })
    },
};

export default utils
