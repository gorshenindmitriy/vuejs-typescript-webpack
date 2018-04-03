export interface Town{
    id:Number;
    name:String;
    caption:String;
    src:String;
}

export interface WeatherData{
    weatherDesc: String;
    weatherDescImg: String;
    pressureVal: String;
    humidity: String;
    themperature: String;
    wingData: String;
    sunsetStart: String;
    sunsetEnd: String;
    selected:String;
}

export interface SelectedVal{
    name:String;
    townSrc:String;
}