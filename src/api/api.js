import request from '@/config/request'
// 获取微信 config 的信息
export function getWxConfigInfo (url) {
  return request({
    url: '/wechat/getTicket',
    method: 'post',
    data: { url }
  })
}

// 通过 code 获取微信 openid，同时获取注册标记
export function getUserInfoByCode (code) {
  return request({
    url: '/wechat/mp/getUserInfoByCode',
    method: 'post',
    data: { code }
  })
}

// 获取验证码
export function getValidateCode (telephone) {
  return request({
    url: '/user/sendMessage',
    method: 'post',
    data: { telephone }
  })
}
// 员工注册
export function setStaffInfo (telephone, personNo, identifyNo, code) {
  return request({
    url: '/user/saveStaff',
    method: 'post',
    data: { telephone, personNo, identifyNo, code }
  })
}
// 访客注册
export function setVisitorInfo (trueName, telephone, identifyNo, code) {
  return request({
    url: '/user/saveVistor',
    method: 'post',
    data: { trueName, telephone, identifyNo, code }
  })
}
// 员工邀请
export function setInviteInfo (data) {
  return request({
    url: '/user/saveStaffRecord',
    method: 'post',
    header: 'multipart/form-data',
    data: data
  })
}
// 访客预约
export function setReservationInfo (data) {
  return request({
    url: '/user/saveVisRecord',
    method: 'post',
    header: 'multipart/form-data',
    data: data
  })
}
// 访客预约历史纪录
export function getVisRecordsHistory (data) {
  return request({
    url: '/user/getVisRecordsHistory',
    method: 'post',
    header: 'multipart/form-data',
    data: data
  })
}
// 员工邀请历史纪录
export function getResRecordsHistory (data) {
  return request({
    url: '/user/getResRecordsHistory',
    method: 'post',
    header: 'multipart/form-data',
    data: data
  })
}
// 访客预约详情
export function getVisRecordDetails (recordId) {
  return request({
    url: '/user/getVisRecordDetails',
    method: 'post',
    headers: {
      'Content-Type': 'multipart/form-data',
      recordId: recordId
    }
  })
}
export function getResRecordDetails (recordOpenId, recordId) {
  return request({
    url: '/user/getResRecordDetails',
    method: 'post',
    headers: {
      'Content-Type': 'multipart/form-data',
      recordOpenId: recordOpenId,
      recordId: recordId
    }
  })
}
export function setrecordState (recordState, recordId, recordOpenId) {
  return request({
    url: '/user/recordState',
    method: 'post',
    headers: {
      recordId: recordId,
      recordOpenId: recordOpenId
    },
    data: { recordState }
  })
}
