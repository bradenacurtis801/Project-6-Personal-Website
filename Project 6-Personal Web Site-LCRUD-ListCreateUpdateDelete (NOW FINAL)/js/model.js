class Visitor {
    constructor(id, firstName, lastName, address, city, state, zip, phone, email, surveyResponses, surveyComments){
       this.id = id;
       this.firstName = firstName;
       this.lastName = lastName;
       this.address = address;
       this.city = city;
       this.state = state;
       this.zip = zip;
       this.email = email;
       this.phone = phone; 
       this.surveyResponses = surveyResponses;
       this.surveyComments = surveyComments;
    }
    get fullName() { return `${this.firstName} ${this.lastName}` }; 
    get fullAddress() { return `${this.address}, ${this.city}, ${this.state}, ${this.zip}` };
    
}
let headers = ['ID', 'Name', 'Address', 'Phone', 'Email', 'Actions'];
 
 let visitors = [ 
  new Visitor(1,"Ken","Jenson","1234 W. Main St.","Mapleton","UT","84664","(801) 444-5555","ken@gmail.com",{google:true,yahoo:false,friend:true}, "notes"),
  new Visitor(2,"Ben","Jenson","1234 W. Main St.","Mapleton","UT","84664","(801) 444-5555","ben@gmail.com",{google:true,yahoo:true,friend:false}, "notes"),
  new Visitor(3,"Jen","Jenson","1234 W. Main St.","Mapleton","UT","84664","(801) 444-5555","ben@gmail.com",{google:true,yahoo:false,friend:true}, "notes"),
  new Visitor(4,"Shen","Jenson","1234 W. Main St.","Mapleton","UT","84664","(801) 444-5555","ben@gmail.com",{google:true,yahoo:true,friend:false}, "notes"),
  new Visitor(5,"Gwen","Jenson","1234 W. Main St.","Mapleton","UT","84664","(801) 444-5555","ben@gmail.com",{google:true,yahoo:false,friend:true}, "notes"),


];

let visitor_dic = {
  1: new Visitor(1,"Ken","Jenson","1234 W. Main St.","Mapleton","UT","84664","(801) 444-5555","ken@gmail.com",{google:true,yahoo:false,friend:true}, "notes"),
  2: new Visitor(2,"Ben","Jenson","1234 W. Main St.","Mapleton","UT","84664","(801) 444-5555","ben@gmail.com",{google:true,yahoo:true,friend:false}, "notes"),
  3: new Visitor(3,"Jen","Jenson","1234 W. Main St.","Mapleton","UT","84664","(801) 444-5555","ben@gmail.com",{google:true,yahoo:false,friend:true}, "notes"),
  4: new Visitor(4,"Shen","Jenson","1234 W. Main St.","Mapleton","UT","84664","(801) 444-5555","ben@gmail.com",{google:true,yahoo:true,friend:false}, "notes"),
  5: new Visitor(5,"Gwen","Jenson","1234 W. Main St.","Mapleton","UT","84664","(801) 444-5555","ben@gmail.com",{google:true,yahoo:false,friend:true}, "notes"),

}
 
 function modelAddVisitor(visitor) {


 }//adds new visitor object to your array}
 function modelDeleteVisitor(id) {}//removes visitor object with given 'id' from array}
 function findVisitor(id) {}//returns visitor object with given 'id' from array}
 function findVisitorIndex(id) {}//returns index in the array of the visitor object with given 'id'.  Handy when trying to delete an object}
 function modelUpdateVisitor(visitor) {}//finds and updates a visitor object a your array}   //Only for extra credit 'edit' function