import Vue from 'vue'
import Component from 'vue-class-component'
import {Prop as prop, Watch as watch} from 'vue-property-decorator'
import * as $ from 'jquery';

@Component({
    props: {
        selected:String,
    },
    data(){
        return {selected:''};
    }
})
export default class MyTestComponent extends Vue {
    @prop()
    options: { id: number,caption:string, name: string,src:string }[];
    onChange=function(){
        //:id="item.name+'_'+item.id" :townName="item.name" v-model="options" :towmImg="item.src"
        let selected = $("#townDetailsList option:selected").attr('townImg');
        let townName=$("#townDetailsList option:selected").attr('townName');
        $('#towmImage').attr('src',selected);

       $.ajax({
           method: "GET",
           url: "http://openweathermap.org/data/2.5/weather?q="+townName+",uk&appid=b6907d289e10d714a6e88b30761fae22",
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
    }
}