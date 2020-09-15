

'strict-user'

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
    this.daily = 0;
  
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
        this.daily+= cookie;
       totalPerHour[i]+=cookie;


    }
    totalPerHour[length-1]+=this.daily;
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




var seattle = new SalmonCookie(23, 65, 6.3, 'Seattle');
var tokyo = new SalmonCookie(23, 65, 6.3, 'Tokyo');
var dubai = new SalmonCookie(23, 65, 6.3, 'Dubai');
var paris = new SalmonCookie(23, 65, 6.3, 'Paris');
var lima = new SalmonCookie(23, 65, 6.3, 'Lima');
tableHead();


for (var i = 0; i < cookieStandLocation.length; i++) {
    cookieStandLocation[i].cusPerHour();
    cookieStandLocation[i].cookiePurchasedPerHour();
    cookieStandLocation[i].render();

}

tablefooter();

/*

var seattle = {
    name:'seattle',
    minCost:23
    ,maxCost:65,
    avg:6.3 ,
    custmerRaandom:[],


    seattleArr:[] ,

    customerPerHour : function() {
        for(var i=0;i<this.arr.length;i++){
    random =
   this.minCost+ (Math.random()*(this.maxCost-this.minCost));
   console.log(random);
   return this.custmerRaandom.push(random);
        }
},


    cookiePurchasedPerHour : function() {

   for (var i=0;i<this.arr.length;i++)
   {
   //var cusPerHour=this.customerPerHour();
  return this.seattleArr.push( this.custmerRaandom[i]*this.avg);
   console.log(this.seattleArr);

   }

    },

    summ : function()
   {
   var sum=0;
   for (var i=0;i<this.seattleArr.length;i++)
   {
   sum+=this.seattleArr[i] ;
   }
   return sum;

   }
   ,

   render :function()
   {
   var parent=document.getElementById('sales');
   var h2=document.createElement('h2');
   h2.textContent=this.name;
   parent.appendChild(h2);

   var ul=document.createElement('ul');
   parent.appendChild(ul);

   for(var i=0;i<arr.length;i++)
{
   var li=document.createElement('li');
   //li.textContent=this.arr[i]+'  '+seattleArr[i];
   li.textContent=arr[i]+" : "+this.seattleArr[i];
   ul.appendChild('li');
}

var li2=document.getElementById('total');
document.createElement('li');
li2.textContent=this.summ();
ul.appendChild(li2);

}};

seattle.customerPerHour();
seattle.cookiePurchasedPerHour();
seattle.render();






var tokyo = {

    minCost:3
    ,maxCost:24,
    avg:1.2 ,
    name:'tokyo',

    arr : ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'] ,

    tokyoArr:[] ,
    custmerRaandom:[],
    customerPerHour : function() {
      for(var i=0;i<this.arr.length;i++){
  random =
 this.minCost+ (Math.random()*(this.maxCost-this.minCost));
 console.log(random);
 return this.custmerRaandom.push(random);
      }
},


  cookiePurchasedPerHour : function() {

 for (var i=0;i<this.arr.length;i++)
 {
 //var cusPerHour=this.customerPerHour();
return this.tokyoArr.push( this.custmerRaandom[i]*this.avg);


 }

  },

  summ : function()
 {
 var sum=0;
 for (var i=0;i<this.tokyoArr.length;i++)
 {
 sum+=this.tokyoArr[i] ;
 }
 return sum;

 }
 ,

 render :function()
 {
 var parent=document.getElementById('sales');

 var h2=document.createElement('h2');
   h2.textContent=this.name;
   parent.appendChild(h2);

 var ul=document.createElement('ul');
 parent.appendChild(ul);

 for(var i=0;i<arr.length;i++)
{
 var li=document.createElement('li');
 //li.textContent=this.arr[i]+'  '+seattleArr[i];
 li.textContent=arr[i]+" : "+this.tokyoArr[i];
 ul.appendChild('li');
}

var li2=document.getElementById('total');
document.createElement('li');
li2.textContent=this.summ();
ul.appendChild(li2);
}};

tokyo.customerPerHour();
tokyo.cookiePurchasedPerHour();
tokyo.render();



var dubai = {

    minCost:11
    ,maxCost:38,
    avg:3.7 ,
    name:'dubai',

    arr : ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'] ,

    dubaiArr:[] ,

    custmerRaandom:[],

    customerPerHour : function() {
      for(var i=0;i<this.arr.length;i++){
  random =
 this.minCost+ (Math.random()*(this.maxCost-this.minCost));
 console.log(random);
 return this.custmerRaandom.push(random);
      }
},


  cookiePurchasedPerHour : function() {

 for (var i=0;i<this.arr.length;i++)
 {
 //var cusPerHour=this.customerPerHour();
return this.dubaiArr.push( this.custmerRaandom[i]*this.avg);


 }

  },

  summ : function()
 {
 var sum=0;
 for (var i=0;i<this.dubaiArr.length;i++)
 {
 sum+=this.dubaiArr[i] ;
 }
 return sum;

 }
 ,

 render :function()
 {
 var parent=document.getElementById('sales');

 var h2=document.createElement('h2');
   h2.textContent=this.name;
   parent.appendChild(h2);

 var ul=document.createElement('ul');
 parent.appendChild(ul);

 for(var i=0;i<arr.length;i++)
{
 var li=document.createElement('li');
 //li.textContent=this.arr[i]+'  '+seattleArr[i];
 li.textContent=arr[i]+" : "+this.dubaiArr[i];
 ul.appendChild('li');
}

var li2=document.getElementById('total');
document.createElement('li');
li2.textContent=this.summ();
ul.appendChild(li2);

}};

dubai.customerPerHour();
dubai.cookiePurchasedPerHour();
dubai.render();




var paris = {

    minCost:20
    ,maxCost:38,
    avg:2.3 ,
    name:'paris',


    arr : ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'] ,

    parisArr:[] ,

    custmerRaandom:[],

    customerPerHour : function() {
      for(var i=0;i<this.arr.length;i++){
  random =
 this.minCost+ (Math.random()*(this.maxCost-this.minCost));
 console.log(random);
 return this.custmerRaandom.push(random);
      }
},


  cookiePurchasedPerHour : function() {

 for (var i=0;i<this.arr.length;i++)
 {
 //var cusPerHour=this.customerPerHour();
return this.parisArr.push( this.custmerRaandom[i]*this.avg);


 }

  },

  summ : function()
 {
 var sum=0;
 for (var i=0;i<this.parisArr.length;i++)
 {
 sum+=this.parisArr[i] ;
 }
 return sum;

 }
 ,

 render :function()
 {
 var parent=document.getElementById('sales');

 var h2=document.createElement('h2');
   h2.textContent=this.name;
   parent.appendChild(h2);

 var ul=document.createElement('ul');
 parent.appendChild(ul);

 for(var i=0;i<arr.length;i++)
{
 var li=document.createElement('li');
 //li.textContent=this.arr[i]+'  '+seattleArr[i];
 li.textContent=arr[i]+" : "+this.parisArr[i];
 ul.appendChild('li');
}

var li2=document.getElementById('total');
document.createElement('li');
li2.textContent=this.summ();
ul.appendChild(li2);
}};

paris.customerPerHour();
paris.cookiePurchasedPerHour();
paris.render();



var lima = {

    minCost:2
    ,maxCost:16,
    avg:4.6 ,
    name:'lima',

    arr : ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'] ,

    limaArr: [] ,

    custmerRaandom:[],

    customerPerHour : function() {
      for(var i=0;i<this.arr.length;i++){
  random =
 this.minCost+ (Math.random()*(this.maxCost-this.minCost));
 console.log(random);
 return this.custmerRaandom.push(random);
      }
},


  cookiePurchasedPerHour : function() {

 for (var i=0;i<this.arr.length;i++)
 {
 //var cusPerHour=this.customerPerHour();
return this.limaArr.push( this.custmerRaandom[i]*this.avg);


 }

  },

  summ : function()
 {
 var sum=0;
 for (var i=0;i<this.limaArr.length;i++)
 {
 sum+=this.limaArr[i] ;
 }
 return sum;

 }
 ,

 render :function()
 {
 var parent=document.getElementById('sales');

 var h2=document.createElement('h2');
   h2.textContent=this.name;
   parent.appendChild(h2);

 var ul=document.createElement('ul');
 parent.appendChild(ul);

 for(var i=0;i<arr.length;i++)
{
 var li=document.createElement('li');
 //li.textContent=this.arr[i]+'  '+seattleArr[i];
 li.textContent=arr[i]+" : "+this.limaArr[i];
 ul.appendChild('li');
}

var li2=document.getElementById('total');
document.createElement('li');
li2.textContent=this.summ();
ul.appendChild(li2);
}};

lima.customerPerHour();
lima.cookiePurchasedPerHour();
lima.render();*/
