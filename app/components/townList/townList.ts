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
    options: { id: number,caption:string, name: string }[];
    onClick = function(id:String){
        $('#townList a').removeClass('active');
        $('#'+id).addClass('active');
    }
}