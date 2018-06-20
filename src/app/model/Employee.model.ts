
export class Employee{
    public employeeId: number;
    public email:String;
    public firstName:String;
    public lastName:String;
    public password:String;
    public employeeCode:String;
    public departament:String;
    public deleted:boolean;

    constructor(employeeId: number, email:String, firstName:String, lastName:String, password:String,
        employeeCode:String, departament:String, deleted:boolean){
        this.employeeId = employeeId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
        this.employeeCode = employeeCode;
        this.departament = departament;
        this.deleted = deleted;
    }  
}