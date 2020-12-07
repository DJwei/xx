// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      msg:'DJwei',
      userInfo:{},//用户基本信息
  },
handleParent(){
  console.log('parent')
},
handlenChild(){
  console.log('Child')
},
//跳转至logs页面方法
toLogs(){
  wx. navigateTo({
    url: '/pages/logs/logs',
  })
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   console.log('onLoad()监听页面加载');
   debugger;
   //修改msg状态数据
  // console.log(this.data.msg)
    //setTimeout(() => {
      //this.setData({
        //msg:'djw'
      //})
      //console.log(this.data.msg)
    //},2000)
    //
    wx.getUserInfo({
      success:(res)=>{
        console.log(res);
        this.setData({
          userInfo:res.userInfo
        })
      },
      fail:(err)=>{
        console.log(err);
      }
     })
   },
 

   
   //获取用户信息的回调
   handleGetUserInfo(res){
     console.log(res)
     if(res.detail.userInfo){//说明用户点击了允许
    //修改userInfo的状态数据
    this.setData({
    userInfo:res.detail.userInfo
    })
  }
   },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('onReady()');
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('onShow()监听页面显示 执行多次');
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('onHide()');
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('onUnload()');
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})