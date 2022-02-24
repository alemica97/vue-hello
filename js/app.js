//richiamo la Classe Vue e la salvo in app
const app = new Vue({
    //associo la classe Vue all'elemento del DOM che ha come id #app
    el : '#app',
    data : {
        message : 'Hello Vue!!',
        url : 'https://picsum.photos/200/300'
    }
});