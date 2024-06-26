import service from "@/utils/request";
// @Summary 用户登录
// @Produce  application/json
// @Param data body {username:"string",password:"string"}
// @Router /base/login [post]
export const login = (data) => {
  return service({
    url: "/base/login",
    method: "post",
    data: data,
  });
};

// @Summary 获取验证码
// @Produce  application/json
// @Param data body {username:"string",password:"string"}
// @Router /base/captcha [get]
export const captcha = () => {
  return service({
    url: "/base/captcha",
    method: "get",
  });
};
// @Summary 获取图片点击验证码
// @Produce  application/json
// @Param data body {"code": 0,"image_base64": "string","thumb_base64": "string","captcha_key": "string",}
// @Router /base/captcha/img [get]
export const captchaImg = () => {
  return service({
    url: "/base/captcha/img",
    method: "get",
  });
};

// @Summary 用户注册
// @Produce  application/json
// @Param data body {username:"string",password:"string"}
// @Router /base/resige [post]
export const register = (data) => {
  return service({
    url: "/user/admin_register",
    method: "post",
    data: data,
  });
};

// @Summary 修改密码
// @Produce  application/json
// @Param data body {username:"string",password:"string",newPassword:"string"}
// @Router /user/changePassword [post]
export const changePassword = (data) => {
  return service({
    url: "/user/changePassword",
    method: "post",
    data: data,
  });
};

// @Tags User
// @Summary 分页获取用户列表
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body modelInterface.PageInfo true "分页获取用户列表"
// @Success 200 {string} json "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /user/getUserList [get]
export const getUserList = (data) => {
  return service({
    url: "/user/getUserList",
    method: "get",
    params: data,
  });
};

// @Tags User
// @Summary 设置用户权限
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body api.SetUserAuth true "设置用户权限"
// @Success 200 {string} json "{"success":true,"data":{},"msg":"修改成功"}"
// @Router /user/setUserAuthority [post]
export const setUserAuthority = (data) => {
  return service({
    url: "/user/setUserAuthority",
    method: "post",
    data: data,
  });
};

// @Tags SysUser
// @Summary 删除用户
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body request.SetUserAuth true "删除用户"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"修改成功"}"
// @Router /user/deleteUser [delete]
export const deleteUser = (data) => {
  console.log(data);
  return service({
    url: `/user/deleteUser/${data.id}`,
    method: "delete",
  });
};

// @Tags SysUser
// @Summary 设置用户信息
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.SysUser true "设置用户信息"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"修改成功"}"
// @Router /user/setUserInfo [put]
export const setUserInfo = (data) => {
  return service({
    url: "/user/setUserInfo",
    method: "put",
    data: data,
  });
};

// @Tags SysUser
// @Summary 设置用户信息
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.SysUser true "设置用户信息"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"修改成功"}"
// @Router /user/setSelfInfo [put]
export const setSelfInfo = (data) => {
  return service({
    url: "/user/setSelfInfo",
    method: "put",
    data: data,
  });
};

// @Tags User
// @Summary 设置用户权限
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body api.setUserAuthorities true "设置用户权限"
// @Success 200 {string} json "{"success":true,"data":{},"msg":"修改成功"}"
// @Router /user/setUserAuthorities [post]
export const setUserAuthorities = (data) => {
  return service({
    url: "/user/setUserAuthorities",
    method: "post",
    data: data,
  });
};

// @Tags User
// @Summary 获取用户信息
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Success 200 {string} json "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /user/getUserInfo [get]
export const getUserInfo = () => {
  return service({
    url: "/user/getUserInfo",
    method: "get",
  });
};
// 重置密码
export const resetPassword = (data) => {
  return service({
    url: "/user/resetPassword",
    method: "post",
    data: data,
  });
};

// 获取密保
export const getProblemList = (data) => {
  return service({
    url: `/problem/getProblemList/${data.id}`,
    method: "get",
  });
};

// 设置密保
export const putProblem = (data) => {
  return service({
    url: "/problem/updateProblem",
    method: "put",
    data: data,
  });
};
// 获取是否有密保
export const isSettingProblem = ({ uid }) => {
  return service({
    url: `/problem/getIsSetting/${uid}`,
    method: "get",
  });
};
// 验证问题是否对
export const VerifyAnswer = (data) => {
  return service({
    url: "/problem/verifyAnswer",
    method: "post",
    data,
  });
};

// 获取user 人数
export const userCount = () => {
  return service({
    url: "/user/getUserCount",
    method: "get",
    params: {},
  });
};

// 获取ip的流量
export const getFlowmeter = () => {
  return service({
    url: "/user/getFlow",
    method: "get",
  });
};
