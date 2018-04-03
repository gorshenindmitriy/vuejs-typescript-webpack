import Vue from 'vue'
import Component from 'vue-class-component'
import MyTestComponent from '../townList/townList.vue'
import {TownList} from '../../classes/const/Towns'

@Component({
    components: {
        myComponent: MyTestComponent
    }

})
export default class MainComponent extends Vue {
    public selected='';
    public options = TownList;
}
