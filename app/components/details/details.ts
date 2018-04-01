import Vue from 'vue'
import Component from 'vue-class-component'
import MyTestComponent from '../townDetailsComponent/townDetailsComponent.vue'
import * as $ from 'jquery';

@Component({
    components: {
        myComponent: MyTestComponent
    }

})
export default class MainComponent extends Vue {
    public selected='';
    public options = [
        {id:1,caption:"Лондон",name:"London",src:"./app/img/towns/london.jpg"},
        {id:2,caption:"Манчестер",name:"Manchester",src:"./app/img/towns/manchester.jpg"},
        {id:3,caption:"Ливерпуль",name:"Liverpool",src:"./app/img/towns/liverpool.jpg"},
        {id:4,caption:"Бирмингем",name:"Birmingham",src:"./app/img/towns/birmingham.jpg"},
        {id:5,caption:"Рединг",name:"Reading",src:"./app/img/towns/reading.jpg"},
        {id:6,caption:"Бристоль",name:"Bristol",src:"./app/img/towns/bristol.jpg"},
        {id:7,caption:"Лестер",name:"Leicester",src:"./app/img/towns/leicester.jpg"},
        {id:8,caption:"Ноттингем",name:"Nottingham",src:"./app/img/towns/nottingham.jpg"},
        {id:9,caption:"Мидлсбро",name:"Middlesbrough",src:"./app/img/towns/middlesbrough.jpg"},
        {id:10,caption:"Саутгемптон",name:"Southampton",src:"./app/img/towns/southampton.jpg"}
    ];
}

$(function () {
   console.log($('#townDetailsList').val());
    var url_string = window.location.href;
    var url = new URL(url_string);
    var utm = url.searchParams.get("town");
    $("#townDetailsList option[townName=" + utm + "]").attr('selected', 'selected');
    var img = $("#townDetailsList option[townName=" + utm + "]").attr('townImg');
    $('#towmImage').attr('src',img);
    $.ajax({
        method: "GET",
        url: "http://openweathermap.org/data/2.5/weather?q="+utm+",uk&appid=b6907d289e10d714a6e88b30761fae22",
        dataType:'json',
        success: function(data) {
            console.log(data);
            //Погода
            $('#weatherDescImg').attr('src','http://openweathermap.org/img/w/'+data.weather[0].icon.toString() +'.png');
            $('#weatherDesc').text(data.weather[0].description);
            //Давление
            $('#pressureVal').text(data.main.pressure+' hpa');
            //Влажность
            $('#humidity').text(data.main.humidity+' %');
            //Температура Min/Max
            $('#themperature').text('Min: '+data.main.temp_min+' °C  Max: '+data.main.temp_max +' °C');
            //Скорость и направление ветра
            $('#wingData').text('скорость: '+data.wind.speed);

            let sunsetStart = new Date(data.sys.sunrise*1000);
            //Время восхода Солнца
            $('#sunsetStart').text(sunsetStart.getHours()+' : '+sunsetStart.getMinutes());
            let sunsetEnd = new Date(data.sys.sunset*1000);
            //Время захода Солнца
            $('#sunsetEnd').text(sunsetEnd.getHours()+' : '+sunsetEnd.getMinutes());
        }
    });
});
