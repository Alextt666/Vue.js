// 请求地址： http://wthrcdn.etouch.cn/weather_mini
// 请求方法是：get
// 请求参数：city(城市名)
// 响应内容：天气信息

// 1.点击回车
// 2.查询数据
// 3.渲染数据

//绑定VUE
var app = new Vue({
    el:'#app',
    data:{
        city:'',
        weatherList:[]
    },
    methods:{
        getCity:function(){
            var that = this
            axios.get('http://wthrcdn.etouch.cn/weather_mini?city='+this.city)
            .then(function(response){
                // console.log(response.data.data.forecast);
                that.weatherList = response.data.data.forecast;
            })
            .catch(function(err){
                console.log(err);
            })
        },
        changeCity:function(city){
            this.city = city;
            this.getCity();
        }
    }
})