
<template>
    <div>
        <table>
            <tr>
                <td>
                    Выберите город:
                </td>
                <td>
                    <select class="grid-list-item" id="townDetailsList" v-on:change.capture="onChange" v-model="selected">
                        <option v-for="item in options" :id="item.name+'_'+item.id" v-bind:value="{'name':item.name,'townSrc':item.src}" :townName="item.name" v-model="options" :townImg="item.src">{{item.caption}}</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td>
                    <span >{{selected.name}}</span>
                </td>
                <td>
                    <img :src="townImage" height="100px" width="200px"/>
                </td>
            </tr>
            <tr>
                <td><img  :src="weatherDescImg"/></td>
                <td>
                    <span >{{weatherDesc}}</span>
                </td>
            </tr>
            <tr>
                <td>Давление:</td>
                <td>
                    <span>{{pressureVal}}</span>
                </td>
            </tr>
            <tr>
                <td>Влажность:</td>
                <td>
                    <span >{{humidity}}</span>
                </td>
            </tr>
            <tr>
                <td>Темрература минимальная / температура максимальная:</td>
                <td>
                    <span >{{themperature}}</span>
                </td>
            </tr>
            <tr>
                <td>Скорость и направление ветра:</td>
                <td>
                    <span >{{wingData}}</span>
                </td>
            </tr>
            <tr>
                <td>Время восхода Солнца:</td>
                <td>
                    <span >{{sunsetStart}}</span>
                </td>
            </tr>
            <tr>
                <td>Время захода Солнца:</td>
                <td>
                    <span >{{sunsetEnd}}</span>
                </td>
            </tr>
        </table>
    </div>
</template>

<script src="./townDetailsComponent.ts" lang="ts"></script>
