
'strict use';


var arr = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var cookieStandLocation = [];
var totalPerHour = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];


var body = document.getElementById('sales');
var table = document.createElement('table');
body.appendChild(table);

function tableHead() {
    var head = document.createElement('tr');
    var th = document.createElement('th');
    head.appendChild(th);

    for (var i = 0; i < arr.length; i++) {
        var th = document.createElement('th');
        th.textContent = arr[i];
        head.appendChild(th);

    }
    th = document.createElement('th');
    th.textContent='Daily location';
    head.appendChild(th)
    table.appendChild(head);



}
function tablefooter() {
    var tr = document.createElement('tr');
    table.appendChild(tr);
    var td = document.createElement('td');
    td.textContent = "Total ";
    tr.appendChild(td);


    for (var j = 0; j < totalPerHour.length; j++) {
        var td = document.createElement('td');
        td.textContent = totalPerHour[j];
        tr.appendChild(td);

    
    }

   

}

function SalmonCookie(minCost, maxCost, avg, name) {
    this.minCost = minCost;
    this.maxCost = maxCost;
    this.avg = avg;
    this.daily=0;
  
    this.custmerRaandom = [];
    this.locationArr=[];
    this.name = name;
    cookieStandLocation.push(this);

}
SalmonCookie.prototype.cusPerHour = function () {

    var random;
    for (var i = 0; i < arr.length; i++) {
        random =
            this.minCost + Math.random() * (this.maxCost - this.minCost);
        console.log(random);
        this.custmerRaandom.push(random);
    }
};

SalmonCookie.prototype.cookiePurchasedPerHour = function () {
    var cookie;
    for (var i = 0; i < arr.length; i++) {
        //var cusPerHour=this.customerPerHour();
        cookie = Math.ceil(this.custmerRaandom[i] * this.avg);
        this.locationArr.push(cookie);
       // totalPerHour.push(cookie);
        this.daily=this.daily+cookie;
       totalPerHour[i]+=cookie;


    }
    totalPerHour[totalPerHour.length-1]+=this.daily;
};

SalmonCookie.prototype.render = function () {


    var tr = document.createElement('tr');
    table.appendChild(tr);
    var td = document.createElement('td');
    td.textContent = this.name;
    tr.appendChild(td);
    //table.appendChild(td);


    for (var i = 0; i < arr.length; i++) {
        td = document.createElement('td');
        td.textContent = this.locationArr[i];
        tr.appendChild(td);
    }


    td = document.createElement('td');
    td.textContent = this.daily;
    tr.appendChild(td);
   
}



//tableHead();
var seattle = new SalmonCookie(23, 65, 6.3, 'Seattle');
var tokyo = new SalmonCookie(3, 24, 1.2, 'Tokyo');
var dubai = new SalmonCookie(11, 38, 3.7, 'Dubai');
var paris = new SalmonCookie(20, 38, 2.3, 'Paris');
var lima = new SalmonCookie(2, 16, 4.6, 'Lima');


/*for (var i = 0; i < cookieStandLocation.length; i++) {
    cookieStandLocation[i].cusPerHour();
    cookieStandLocation[i].cookiePurchasedPerHour();
    cookieStandLocation[i].render();

}

tablefooter();*/




 var form=document.getElementById('addLocation');
 form.addEventListener('submit',function(event){
     event.preventDefault();

    var nam= event.target.name.value;
    console.log(typeof( nam));
    

    var mi=parseInt(event.target.min.value);
    console.log(typeof(mi) );
    //mi=Number(mi);

    var ma= parseInt(event.target.max.value);
    console.log(typeof(ma));
   // ma=Number(ma);

    var av=parseFloat(event.target.avg.value);
    console.log(typeof(av));
    //av=Number(av);
    

      var newLoc=new SalmonCookie(mi,ma,av,nam);
      newLoc.cusPerHour();
      newLoc.cookiePurchasedPerHour();
      newLoc.render();
     // table.innerHTML.tablefooter='';
      tablefooter();
      //table.innerHTML.tablefooter='';
    
 });

 



tableHead();
for (var i = 0; i < cookieStandLocation.length; i++) {
    cookieStandLocation[i].cusPerHour();
    cookieStandLocation[i].cookiePurchasedPerHour();
    cookieStandLocation[i].render();

}
//
table.innerHTML.tablefooter='';
//table.deleteRow(totalPerHour);