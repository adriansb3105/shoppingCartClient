
export class Client{
    public clientId: number;
    public email:String;
    public firstName:String;
    public lastName:String;
    public password:String;
    public city:String;
    public postalCode:String;
    public telephone:String;
    public description:String;
    public deleted:boolean;

    constructor(email:String, firstName:String, lastName:String, password:String,
                city:String, postalCode:String, telephone:String, description:String){
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
        this.city = city;
        this.postalCode = postalCode;
        this.telephone = telephone;
        this.description = description;
    }  
}