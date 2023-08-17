import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {
    // name // by default this is undefined
    // age=30; // these are local properties these only available in particular class, can't access these properties outside this class
    // fullname ="salesforce india"
    // showData= true
    // details={
    //     name:"dummy",
    //     place:"india"
    // }
    // userList=["A","B","c"]
    // one way data binding
    fullname="Zero To Hero"

    // method
    getname(){
        // perform my logic 
    }

}