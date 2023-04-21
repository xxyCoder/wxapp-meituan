// pages/mine/mine.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        avatar: '',
        username: '',
        phone:'',
        rice: 0,
        packet: 0,
        money: 0
    },
    // 请求用户信息
    getUserInfo: function() {
        wx.request({
          url: 'https://www.fastmock.site/mock/af6587caf8a88c7264fa3efd8a6ce6d7/meituan/mine',
          success: (res) => {
              this.setData({
                  avatar: res.data.avatar,
                  username: res.data.username,
                  phone: res.data.phone,
                  rice: res.data.rice,
                  packet: res.data.packet,
                  money: res.data.money
              });
          }
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.getUserInfo();
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})