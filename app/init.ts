import Vue from 'vue'
import MainComponent from './components/main/main.vue'
import DetailComponet from './components/details/details.vue'

class AppCore {
    private instance: Vue;

    private mainInit() {
        this.instance = new Vue({
            el: '#appContainer',
            render: h => h(MainComponent),
        })
    }
    /*private detailInit(){
        this.instance = new Vue({
            el:'#appContainer2',
            render:h=>h(DetailComponet)
        })
    }*/

    constructor() {
        this.mainInit();
        //this.detailInit();
    }
}

class DeatilsCore{
    private instance: Vue;
    private detailInit(){
        this.instance = new Vue({
            el:'#appContainer2',
            render:h=>h(DetailComponet)
        })
    }
    constructor() {
        this.detailInit();
    }
}
new AppCore();
new DeatilsCore();