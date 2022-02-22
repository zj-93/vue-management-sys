import request from '@/utils/request'

export function getGoods(data) {
    return request({
        url: '/getGoods',
        method: 'post',
        data
    })
}