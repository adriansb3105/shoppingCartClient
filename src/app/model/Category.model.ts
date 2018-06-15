
export class Category{
	public name:String;
  public  deleted:boolean;
  constructor(name?:String,deleted?:boolean){
    this.deleted=deleted;
    this.name=name;
  }
	
}
