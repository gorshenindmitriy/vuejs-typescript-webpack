import Vue from 'vue'
import Component from 'vue-class-component'
import {Prop as prop, Watch as watch} from 'vue-property-decorator'
import {Town} from '../../classes/models/dataModels';

@Component({
    props: {
        selected:String,
        options:[]
    }
})
export default class MyTestComponent extends Vue {
    @prop() options: Town[];
}