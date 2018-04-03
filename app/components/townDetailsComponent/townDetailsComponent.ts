import Vue, {VNode} from 'vue'
import Component from 'vue-class-component'
import {Prop as prop} from 'vue-property-decorator'
import axios from 'axios';
import {Town} from "../../classes/models/dataModels";

@Component({
    props: {
        options:[],
        weatherDesc: String,
        weatherDescImg: String,
        pressureVal: String,
        humidity: String,
        themperature: String,
        wingData: String,
        sunsetStart: String,
        sunsetEnd: String,
        townImage:String,
        selected:Object
    },
    propsData:{
        weatherDesc:'',
        weatherDescImg: '',
        pressureVal: '',
        humidity: '',
        themperature: '',
        wingData: '',
        sunsetStart: '',
        sunsetEnd: '',
        townImage:'',
        selected:{
            name:'',
            townSrc:''
        }
    },
    methods:{
        onChange:function(){
            const vm = this;
            console.log(vm);
            axios.get('http://openweathermap.org/data/2.5/weather?q='+vm.$props.selected.name+',uk&appid=b6907d289e10d714a6e88b30761fae22').then(response=>{
                let sunsetStart = new Date(response.data.sys.sunrise*1000);
                let sunsetEnd = new Date(response.data.sys.sunset*1000);
                vm.$props.weatherName = response.data.weather[0].description;
                vm.$props.townImage=vm.$props.selected.townSrc;
                vm.$props.weatherDescImg ='./app/img/weather/'+response.data.weather[0].icon.toString() +'.png';
                vm.$props.pressureVal =response.data.main.pressure+' hpa';
                vm.$props.humidity =response.data.main.humidity+' %';
                vm.$props.themperature='Min: '+response.data.main.temp_min+' °C  Max: '+response.data.main.temp_max +' °C';
                vm.$props.wingData='скорость: '+response.data.wind.speed;
                vm.$props.sunsetStart=sunsetStart.getHours()+' : '+sunsetStart.getMinutes();
                vm.$props.sunsetEnd=sunsetEnd.getHours()+' : '+sunsetEnd.getMinutes();
            }).catch(error=>{
                alert('При получении данных возникла ошибка');
                console.log(error);
            });
        },

    },beforeUpdate(){
        this.$emit('update:selected',{
            name:new URL(window.location.href).searchParams.get("town"),
            townSrc:'./app/img/towns/'+new URL(window.location.href).searchParams.get("town").toLowerCase()+'.jpg'
        });
    },data:{
        weatherDesc:'',
        weatherDescImg: '',
        pressureVal: '',
        humidity: '',
        themperature: '',
        wingData: '',
        sunsetStart: '',
        sunsetEnd: '',
        townImage:'',
        selected:{
            name:'',
            townSrc:''
        }
    }
})


export default class MyTestComponent extends Vue {
    @prop() weatherName:string;
    @prop() options:[Town];
    @prop() selected={
        name:new URL(window.location.href).searchParams.get("town"),
        townSrc:'./app/img/towns/'+new URL(window.location.href).searchParams.get("town").toLowerCase()+'.jpg'
    }
}
