import axios from 'axios';
export const HTTP=axios.create({url:'http://openweathermap.org/data/2.5/weather'});