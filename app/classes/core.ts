import {WeatherData} from "./models/dataModels";
import axios from "axios";

export class Core {
    town: string;
    weatherData:WeatherData;
    constructor(townName:string){
        this.town=townName;
        this.weatherData={
            weatherDesc: '',
            weatherDescImg:'',
            pressureVal:'',
            humidity:'',
            themperature:'',
            wingData:'',
            sunsetStart:'',
            sunsetEnd:'',
            selected:''
        };
        axios.get('http://openweathermap.org/data/2.5/weather?q='+this.town+',uk&appid=b6907d289e10d714a6e88b30761fae22').then(response=>{
            let sunsetStart = new Date(response.data.sys.sunrise*1000);
            let sunsetEnd = new Date(response.data.sys.sunset*1000);
            this.weatherData.weatherDesc = response.data.weather[0].description;
            this.weatherData.weatherDescImg ='./app/img/weather/'+response.data.weather[0].icon.toString() +'.png';
            this.weatherData.pressureVal =response.data.main.pressure+' hpa';
            this.weatherData.humidity =response.data.main.humidity+' %';
            this.weatherData.themperature='Min: '+response.data.main.temp_min+' °C  Max: '+response.data.main.temp_max +' °C';
            this.weatherData.wingData='скорость: '+response.data.wind.speed;
            this.weatherData.sunsetStart=sunsetStart.getHours()+' : '+sunsetStart.getMinutes();
            this.weatherData.sunsetEnd=sunsetEnd.getHours()+' : '+sunsetEnd.getMinutes();
        });
    }
}
