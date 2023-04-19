Page({
    data: {
        hotSearchWord: "塔斯汀·中国汉堡",
        hotWords: ["奶茶", "炸鸡", "水果", "水煮肉片", "蔬菜沙拉", "dq冰激凌"],
        turnData: [],
        slideData: ["津贴优惠", "跨天预定", "减配送费", "点评高分"],
        loading: true,
        foodData: [],
        searchFix: false,
        slideFix: false
    },
    // 获取轮播图数据
    getBannerData: function () {
        wx.request({
            url: 'https://www.fastmock.site/mock/af6587caf8a88c7264fa3efd8a6ce6d7/meituan/turnPic',
            dataType: "json",
            success: (res) => {
                this.setData({
                    turnData: res.data
                });
            },
            fail: (err) => {
                console.log(err);
            }
        })
    },
    // 展示弹出层
    showPopup: function () {
        this.setData({
            show: true
        });
        console.log(1);
    },
    onClose: function () {
        this.setData({
            show: false
        });
    },
    // 获取食物数据
    getFoodData: function () {
        wx.request({
            url: 'https://www.fastmock.site/mock/af6587caf8a88c7264fa3efd8a6ce6d7/meituan/food',
            dataType: "json",
            success: (res) => {
                this.setData({
                    foodData: res.data,
                    loading: false
                });
            }
        })
    },
    // 监听页面滚动
    onPageScroll(e) {
        let st = e.scrollTop;
        if (!this.data.searchFix && st >= 50) {
            this.setData({
                searchFix: true
            });
        }
        if (this.data.searchFix && st < 50) {
            this.setData({
                searchFix: false
            });
        }

        if (!this.data.slideFix && st >= 260) {
            this.setData({
                slideFix: true
            });
        }
        if (this.data.slideFix && st < 260) {
            this.setData({
                slideFix: false
            });
        }
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.getBannerData();
        this.getFoodData();
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
    onPullDownRefresh: function () {
        this.onRefresh();
    },
    onRefresh: function () {
        //导航条加载动画
        wx.showNavigationBarLoading();
        setTimeout(function () {
            wx.hideNavigationBarLoading();
            //停止下拉刷新
            wx.stopPullDownRefresh();
        }, 2000);
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