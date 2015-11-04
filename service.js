/**
 * Created by medisoft-user on 11/4/2015.
 */


angular.module("myapp")


.service("dataSrevice",function(){

    var ref = new Firebase("https://malikasinger-practiceapp.firebaseio.com/");

    this.userList = ref.child("users");

});


