<template>
    <div>
        <table>
            <tr>
                <td>
                    Выберите город:
                </td>
                <td>
                    <select class="grid-list-item" id="townDetailsList" v-on:change="onChange" v-model="selected">
                        <option v-for="item in options" :id="item.name+'_'+item.id" :townName="item.name" v-model="options" :townImg="item.src">{{item.caption}}</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td>
                    <span >{{selected}}</span>
                </td>
                <td>
                    <img id="towmImage" src="" height="100px" width="200px"/>
                </td>
            </tr>
            <tr>
                <td><img id="weatherDescImg" src=""/></td>
                <td>
                    <span id="weatherDesc"></span>
                </td>
            </tr>
            <tr>
                <td>Давление:</td>
                <td>
                    <span id="pressureVal"></span>
                </td>
            </tr>
            <tr>
                <td>Влажность:</td>
                <td>
                    <span id="humidity"></span>
                </td>
            </tr>
            <tr>
                <td>Темрература минимальная / температура максимальная:</td>
                <td>
                    <span id="themperature"></span>
                </td>
            </tr>
            <tr>
                <td>Скорость и направление ветра:</td>
                <td>
                    <span id="wingData"></span>
                </td>
            </tr>
            <tr>
                <td>Время восхода Солнца:</td>
                <td>
                    <span id="sunsetStart"></span>
                </td>
            </tr>
            <tr>
                <td>Время захода Солнца:</td>
                <td>
                    <span id="sunsetEnd"></span>
                </td>
            </tr>
        </table>
    </div>
</template>

<script src="./townDetailsComponent.ts" lang="ts"></script>
