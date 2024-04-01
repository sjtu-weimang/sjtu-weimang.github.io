//axios的封装处理
import axios from 'axios';
//1.根域名配置
//2.超时时间
//3.请求拦截器/响应拦截器
const request = axios.create({
    baseURL: 'http://geek.itheima.net/v1_0',
    timeout: 5000,
})

//请求拦截器
//在请求发送之前，插入一些自定义配置
request.interceptors.request.use((config) => {
    return config;
},
    (error) => {
        return Promise.reject(error);
    });

//响应拦截器
//在响应返回到客户端之前，重点处理返回数据
request.interceptors.response.use((response) => {
    return response.data;
},
    (error) => {
        console.log('请求出错:', error);
        return Promise.reject(error);
    }
);
export { request };