import request from '@/utils/request'

export function signUp(data) {
    return request({
        url: '/signUp',
        method: 'post',
        data
    })
}

export function signIn(data) {
    return request({
        url: '/signIn',
        method: 'post',
        data
    })
}