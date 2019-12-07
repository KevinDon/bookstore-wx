const  sysConfigs = require('@/lib/sysConfig');
const Mock = require('mockjs'); // 获取mock对象
const Random = Mock.Random; // 获取random对象，随机生成各种数据，具体请翻阅文档
const code = 200; // 返回的状态码

const LoginData = req => {
    let params = JSON.parse(req.body);

    let user = {};
    user.emailAddress = params.account + '@163.com';
    user.billingaddress = '106 Crbbes Creek Road';
    user.firstname = params.account;
    user.suburb = ''
    user.lastname = '2483'
    user.postcode = '0412849600'
    user.phone = '0412849600'
    user.state = 'New soth wales'
    user.website = 'www.budgetfurnitureonline.com au'
    user.country = 'Australia'

    // 返回状态码和文章数据posts
    return {
        code,
        user
    }
}

const sliderData = () => {
    // eslint-disable-next-line no-console
    let data = [{
            id: Random.increment(),
            bookImg: require('_static/images/sliderImages/bookstore_01.jpg'),
            bookName:'天帝纪元',
            title:'天帝纪元',
            author:'爆炸的榴莲',
            brief:'这是悲伤的故事'
        },
        {
            id: Random.increment(),
            bookImg: require('_static/images/sliderImages/bookstore_02.jpg'),
            bookName:'我在黄泉有座房',
            title:'天帝纪元',
            author:'愤怒的香蕉',
            brief:'明明是游戏，主角却在现实中，也能用咒语凭空搓出了小火苗。'
        },
        {
            id: Random.increment(),
            bookImg: require('_static/images/sliderImages/bookstore_03.jpg'),
            bookName:'汉阙',
            title:'汉阙',
            author:'七月新番',
            brief:'蓦然回首千年，汉家宫阙依旧！'
        }];

    // 返回状态码和data数据
    return {
        code: 200,
        success: true,
        msg:'The query is successful',
        data: data
    }
};
const keywordData = () => {
    // eslint-disable-next-line no-console
    let data = [{
            id: Random.increment(),
            bookImg: require('_static/images/bestseller/182.jpg'),
            bookName:'生活在港片世界',
            title: '生活在港片世界',
            author:'东厂曹公',
            brief:'意外来到了八十年代的香港，小马哥街边擦车，陈家驹在大街上追逐歹徒……',
            isEnd:'连载中',
            wordCount: '301.2万字',
            type:'穿越'
        },
        {
            id: Random.increment(),
            bookImg: require('_static/images/bestseller/181.jpg'),
            bookName:'大秦从献仙药开始',
            title:'大秦从献仙药开始',
            author:'壶中洞天',
            brief:'为了全世界都说中国话，李阳还做了一个地球仪送秦始皇……',
            isEnd:'连载中',
            wordCount: '200万字',
            type:'穿越'
        },
        {
            id: Random.increment(),
            bookImg: require('_static/images/bestseller/180.jpg'),
            bookName:'汉阙',
            title:'汉阙',
            author:'七月新番',
            brief:'蓦然回首千年，汉家宫阙依旧！',
            isEnd:'连载中',
            wordCount: '41.33万字',
            type:'古代'
        }];

    // 返回状态码和data数据
    return {
        code: 200,
        success: true,
        msg:'The query is successful',
        data: data
    }
};

const accountData = () => {
    let data = [{
        account: 'Owen',
        first_name: 'Owen',
        last_name: 'Zheng',
        email:'1845268783@qq.com',
        department:'IT'
    }, {
        account: 'Zico',
        first_name: 'Zico',
        last_name: 'Guo',
        email:'21520993@qq.com',
        department:'IT'
    }, {
        account: 'Kevin',
        first_name: 'Kevin',
        last_name: 'Don',
        email:'kevincn.tang@outlook.com',
        department:'IT - Frontend'
    }];

    return {
        status: 200,
        success: true,
        msg:'The query is successful',
        data :data
    }
}

// 定义请求链接，类型，还有返回数据
Mock.mock(`${sysConfigs.default.server.api.host}/login/`, 'post', LoginData);
Mock.mock(`${sysConfigs.default.server.api.host}/base/books/searchImages.do/`, 'post', sliderData);
Mock.mock(`${sysConfigs.default.server.api.host}/base/books/searchKeyword.do/`, 'post', keywordData);
Mock.mock('http://localhost:8080/api/accounts/list/', 'get', accountData);
