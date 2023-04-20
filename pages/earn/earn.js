// pages/earn/earn.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        myRice: 0,
        diff: 0,
        convert: 0,
        imgUrl: '',
        day:0
    },
    // 获取米粒数据
    getRiceData: function() {
        wx.request({
          url: 'https://www.fastmock.site/mock/af6587caf8a88c7264fa3efd8a6ce6d7/meituan/rice',
          dataType: "json",
          success: (res) => {
              this.setData({
                  myRice: res.data.myRice,
                  diff: res.data.diff,
                  convert: res.data.convert,
                  imgUrl: res.data.imgUrl,
                  day: res.data.day
              });
          }
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.getRiceData();
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