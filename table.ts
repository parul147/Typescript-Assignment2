enum Roles {
  S = "Subscriber",
  SA = "Super_Admin",
  A = "Admin",
}

interface Row<T, U> {
  Edit<T>(id: string);
  DeleteButton<U>(id: number);
  SaveButton<T>(id: string);
  CancelButton<T>(id: string): void;
}
class Model<T, U> {
  id: U;
  FirstName: T;
  MiddleName: T;
  LastName: T;
  Email: T;
  PhoneNumber: T;
  Role: Roles;
  Address: T;
}

let json = [
  {
    id: 1,
    FirstName: "Christy",
    MiddleName: "Graze",
    LastName: "Parrish",
    Email: "Alex.2331@gmail.com",
    PhoneNumber: "782314564",
    Role: Roles.S,
    Address: "Street Pork, Los Angeles",
  },
  {
    id: 2,
    FirstName: "Shelby",
    MiddleName: "Green",
    LastName: "Wyatt",
    Email: "Wyattshelby123@gmail.com",
    PhoneNumber: "734314564",
    Role: Roles.A,
    Address: "Downtown, Boston",
  },
  {
    id: 3,
    FirstName: "Natalie ",
    MiddleName: "Crystal",
    LastName: "Vasquez",
    Email: "Vasquez1996@gmail.com",
    PhoneNumber: "8734314564",
    Role: Roles.A,
    Address: "Green Avenue, Chicago",
  },
  {
    id: 4,
    FirstName: "Katherine",
    MiddleName: "Petrova",
    LastName: "Peirce",
    Email: "evil1996@gmail.com",
    PhoneNumber: "9134314564",
    Role: Roles.SA,
    Address: "White Park, Manhattan",
  },
  {
    id: 5,
    FirstName: "Daniell ",
    MiddleName: "Reginald",
    LastName: "Castellano",
    Email: "Cast123@gmail.com",
    PhoneNumber: "993431452",
    Role: Roles.S,
    Address: "Avenue 16th, Ohio",
  },
];

var l = json.length;
var editedContent: string[] = [];
@FormatDate(new Date())
class jsonObject extends Model<string, number> implements Row<any, any> {
  id: number;
  FirstName: string;
  MiddleName: string;
  LastName: string;
  Email: string;
  PhoneNumber: string;
  Role: Roles;
  Address: string;

  Edit<T>(id: string): void {
    //console.log(id);
    var id_name = "Edit_Panel" + id;
    var id_name: string = id_name.toString();
    var id_name1 = "Save_Panel" + id;
    var id_name1: string = id_name1.toString();

    //console.log("id of cancel",id);
    var editPanel: HTMLElement = document.getElementById(
      id_name
    ) as HTMLElement;
    //console.log("edit panel",editPanel);
    var savePanel: HTMLElement = document.getElementById(
      id_name1
    ) as HTMLElement;
    //console.log("save panel",savePanel);
    if (editPanel.style.display == "block") {
      editPanel.style.display = "none";
      savePanel.style.display = "block";
      //console.log("display vlovk");
    }

    //console.log("idtupe",typeof(id));
    // return ;
    //console.log('id n',id);
    var currentrow: HTMLElement = document.getElementById(id) as HTMLElement;
    // console.log("currentrow",currentrow);
    currentrow.contentEditable = "true";
  }

  DeleteButton<U>(id: number): void {
    v = newObj;

    let newArray = json.filter((item: any) => {
      return item.id !== id;
    });

    json = newArray;

    // console.log("Debug2:newAray ", newArray)

    var temp = "";

    newArray.forEach((u: any) => {
      temp += "<tr  id=" + "row" + u.id + ">";
      temp += "<td>" + u.FirstName + "</td>";
      temp += "<td>" + u.MiddleName + "</td>";
      temp += "<td>" + u.LastName + "</td>";
      temp += "<td>" + u.Email + "</td>";
      temp += "<td>" + u.PhoneNumber + "</td>";
      temp += "<td>" + u.Role + "</td>";
      temp += "<td>" + u.Address + "</td>";
      temp +=
        "<td> <div class='options'><div id='Edit_Panelrow" +
        u.id +
        "' style='display:block'> <button class='btn btn-success' type=submit onclick=\"v.Edit('row" +
        u.id +
        "')\"  > Edit </button>  <button  class='btn btn-danger' type=submit onclick=\"v.DeleteButton(" +
        u.id +
        ")\"  > Delete </button></div><div id='Save_Panelrow" +
        u.id +
        "' style='display: none'><button  class='btn btn-primary' type=submit onclick=\"v.SaveButton(" +
        u.id +
        ")\"  > Save </button> <button  class='btn btn-warning' type=submit onclick=\"v.CancelButton(" +
        u.id +
        ')" > Cancel</button> </div></div></td></tr>';
    });

    display_table.innerHTML = temp;
  }

  SaveButton<T>(id: string): void {
    // console.log("argument of save button",id);
    var rowid = "row" + id;

    var selectedrow = document.getElementById(rowid);
    var selectedrowcontent = selectedrow.innerHTML;
    //console.log('select row content', selectedrowcontent);
    var idint = parseInt(id);
    editedContent[idint] = selectedrowcontent;

    var is_current = selectedrow.isContentEditable;
    if (is_current) {
      selectedrow.contentEditable = "false";
    }
    var id_name = "Edit_Panel" + rowid;
    var id_name1 = "Save_Panel" + rowid;
    var editPanel: HTMLElement = document.getElementById(
      id_name
    ) as HTMLElement;
    var savePanel: HTMLElement = document.getElementById(
      id_name1
    ) as HTMLElement;
    if (editPanel.style.display == "none") {
      editPanel.style.display = "block";
      savePanel.style.display = "none";
    }
  }

  CancelButton<T>(id: string): void {
    // console.log("id",id);
    var intid = parseInt(id);
    // console.log("in cancel button");
    // console.log("intid",intid);
    // console.log(editedContent[intid]);
    var temp = "";
    var rowid = "row" + id;
    // console.log(rowid);
    var selectedrow1 = document.getElementById(rowid);
    var selectedrow1c = selectedrow1.innerHTML;
    //  console.log("cancel row",selectedrow1)

    var is_editable = selectedrow1.isContentEditable;
    if (is_editable) {
      selectedrow1.contentEditable = "false";
    }
    var i;
    for (i = 1; i <= jsoncopy.length; i++) {
      if (editedContent[i]) {
        temp += "<tr id='row" + i + "'>" + editedContent[i] + "</tr>";
      }
      if (!editedContent[i]) {
        var u = jsoncopy[i - 1];
        temp += "<tr  id=" + "row" + u.id + ">";
        temp += "<td >" + u.FirstName + "</td>";
        temp += "<td>" + u.MiddleName + "</td>";
        temp += "<td>" + u.LastName + "</td>";
        temp += "<td>" + u.Email + "</td>";
        temp += "<td>" + u.PhoneNumber + "</td>";
        temp += "<td>" + u.Role + "</td>";
        temp += "<td>" + u.Address + "</td>";
        temp +=
          "<td> <div class='options'><div id='Edit_Panelrow" +
          u.id +
          "' style='display:block'> <button class='btn btn-success' type=submit onclick=\"v.Edit('row" +
          u.id +
          "')\"  > Edit </button>  <button  class='btn btn-danger' type=submit onclick=\"v.DeleteButton(" +
          u.id +
          ")\"  > Delete </button></div><div id='Save_Panelrow" +
          u.id +
          "' style='display: none'><button  class='btn btn-primary' type=submit onclick=\"v.SaveButton(" +
          u.id +
          ")\"  > Save </button> <button  class='btn btn-warning' type=submit onclick=\"v.CancelButton(" +
          u.id +
          ')" > Cancel</button> </div></div></td></tr>';

        //  console.log("u.id",u.id);
      }
      //console.log(temp);
      display_table.innerHTML = temp;
    }

    var id_name = "Edit_Panel" + rowid;
    var id_name1 = "Save_Panel" + rowid;
    var editPanel: HTMLElement = document.getElementById(
      id_name
    ) as HTMLElement;
    var savePanel: HTMLElement = document.getElementById(
      id_name1
    ) as HTMLElement;
    if (editPanel.style.display == "none") {
      editPanel.style.display = "block";
      savePanel.style.display = "none";
    }
  }
}

let newObj = (<any>Object).assign(new jsonObject(), json);

let jsoncopy = json;
let display_table: HTMLElement = document.getElementById(
  "tabledata"
) as HTMLElement;
function showTable(): void {
  let display_none: boolean =
    document.getElementById("displaytable").style.display === "none";
  let refresh_button: HTMLElement = document.getElementById(
    "table2"
  ) as HTMLElement;
  let load_button: HTMLElement = document.getElementById(
    "table1"
  ) as HTMLElement;

  let display_block: HTMLElement = document.getElementById(
    "displaytable"
  ) as HTMLElement;

  if (display_none) {
    refresh_button.style.display = "block";
    load_button.style.display = "none";
    display_block.style.display = "block";
  } else {
    window.location.reload();
  }
}

if (json.length > 0) {
  var temp = "";

  var i;
  for (i = 0; i < 5; i++) {
    var u = newObj[i];
    var v = newObj;
    temp += "<tr  id=" + "row" + u.id + ">";
    temp += "<td >" + u.FirstName + "</td>";
    temp += "<td>" + u.MiddleName + "</td>";
    temp += "<td>" + u.LastName + "</td>";
    temp += "<td>" + u.Email + "</td>";
    temp += "<td>" + u.PhoneNumber + "</td>";
    temp += "<td>" + u.Role + "</td>";
    temp += "<td>" + u.Address + "</td>";
    temp +=
      "<td> <div class='options'><div id='Edit_Panelrow" +
      u.id +
      "' style='display:block'> <button class='btn btn-success' type=submit onclick=\"v.Edit('row" +
      u.id +
      "')\"  > Edit </button>  <button  class='btn btn-danger' type=submit onclick=\"v.DeleteButton(" +
      u.id +
      ")\"  > Delete </button></div><div id='Save_Panelrow" +
      u.id +
      "' style='display: none'><button  class='btn btn-primary' type=submit onclick=\"v.SaveButton(" +
      u.id +
      ")\"  > Save </button> <button  class='btn btn-warning' type=submit onclick=\"v.CancelButton(" +
      u.id +
      ')" > Cancel</button> </div></div></td></tr>';
  }
  // The line below will also give id
  // dynamically to the tables
  //table.id = i+1;

  //close loop
  display_table.innerHTML = temp;
}

var array = json;

function FormatDate(dt: any): any {
  return function (target: any, name: string, descriptor: PropertyDescriptor) {
    const dtm = document.getElementById("datetime") as HTMLInputElement;
    setInterval(function () {
      dtm.innerHTML = new Date().toLocaleString();
    }, 1000);
  };
}
