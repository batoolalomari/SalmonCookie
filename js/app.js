

'use strict';


var arr= ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var seattle = {
    name: 'Seattle',
    minCost: 23
    , maxCost: 65,
    total:0,
    avg: 6.3,
    custmerRaandom: [],
   

    seattleArr: [],

    customerPerHour: function () {
        var random;
        for (var i = 0; i < arr.length; i++) {
           random =
                this.minCost + Math.random() * (this.maxCost - this.minCost);
            console.log(random);
            this.custmerRaandom.push(random);
        }
    },


    cookiePurchasedPerHour: function () {

        for (var i = 0; i < arr.length; i++) {
            //var cusPerHour=this.customerPerHour();
            this.seattleArr.push(Math.ceil( this.custmerRaandom[i] * this.avg));
            this.total += this.seattleArr[i];
            
            
           

        }

    },

    
    

    render: function () {
        var parent = document.getElementById('sales');
        var h2 = document.createElement('h2');
        h2.textContent = this.name;
        parent.appendChild(h2);

        var ul = document.createElement('ul');
        parent.appendChild(ul);

        for (var i = 0; i < arr.length; i++) {
            var li = document.createElement('li');
            //li.textContent=this.arr[i]+'  '+seattleArr[i];
            li.textContent = arr[i] + " : " + this.seattleArr[i]+' cokies';
            
           
            ul.appendChild(li);
        }

        var li2 =document.createElement('li');
        li2.textContent='Total =' +this.total;
        ul.appendChild(li2);

    }
};

seattle.customerPerHour();
seattle.cookiePurchasedPerHour();
seattle.render();






var tokyo = {

    minCost: 3
    , maxCost: 24,
    total:0,
    avg: 6.3,
    name:'Tokyo',
    custmerRaandom: [],
   

    tokyoArr: [],

    customerPerHour: function () {
        var random;
        for (var i = 0; i < arr.length; i++) {
           random =
                this.minCost + Math.random() * (this.maxCost - this.minCost);
            console.log(random);
            this.custmerRaandom.push(random);
        }
    },


    cookiePurchasedPerHour: function () {

        for (var i = 0; i < arr.length; i++) {
            //var cusPerHour=this.customerPerHour();
            this.tokyoArr.push(Math.ceil( this.custmerRaandom[i] * this.avg));
            this.total += this.tokyoArr[i];
            
            
           

        }

    },

    
    

    render: function () {
        var parent = document.getElementById('sales');
        var h2 = document.createElement('h2');
        h2.textContent = this.name;
        parent.appendChild(h2);

        var ul = document.createElement('ul');
        parent.appendChild(ul);

        for (var i = 0; i < arr.length; i++) {
            var li = document.createElement('li');
            //li.textContent=this.arr[i]+'  '+seattleArr[i];
            li.textContent = arr[i] + " : " + this.tokyoArr[i]+' cokies';
            
           
            ul.appendChild(li);
        }

        var li2 =document.createElement('li');
        li2.textContent='Total =' +this.total;
        ul.appendChild(li2);

    }
};

tokyo.customerPerHour();
tokyo.cookiePurchasedPerHour();
tokyo.render();



var dubai = {

    minCost: 11
    , maxCost: 38,
    avg: 3.7,
    name: 'Dubai',

    total:0,
    avg: 6.3,

    custmerRaandom: [],
    dubaiArr: [],

    customerPerHour: function () {
        var random;
        for (var i = 0; i < arr.length; i++) {
           random =
                this.minCost + Math.random() * (this.maxCost - this.minCost);
            console.log(random);
            this.custmerRaandom.push(random);
        }
    },


    cookiePurchasedPerHour: function () {

        for (var i = 0; i < arr.length; i++) {
            //var cusPerHour=this.customerPerHour();
            this.dubaiArr.push(Math.ceil( this.custmerRaandom[i] * this.avg));
            this.total += this.dubaiArr[i];
            
            
           

        }

    },

    
    

    render: function () {
        var parent = document.getElementById('sales');
        var h2 = document.createElement('h2');
        h2.textContent = this.name;
        parent.appendChild(h2);

        var ul = document.createElement('ul');
        parent.appendChild(ul);

        for (var i = 0; i < arr.length; i++) {
            var li = document.createElement('li');
            //li.textContent=this.arr[i]+'  '+seattleArr[i];
            li.textContent = arr[i] + " : " + this.dubaiArr[i]+' cokies';
            
           
            ul.appendChild(li);
        }

        var li2 =document.createElement('li');
        li2.textContent='Total =' +this.total;
        ul.appendChild(li2);

    }
};

dubai.customerPerHour();
dubai.cookiePurchasedPerHour();
dubai.render();




var paris = {

    minCost: 20
    , maxCost: 38,
    avg: 2.3,
    name: 'Paris',

    total:0,
    avg: 6.3,
    custmerRaandom: [],
    parisArr: [],

    customerPerHour: function () {
        var random;
        for (var i = 0; i < arr.length; i++) {
           random =
                this.minCost + Math.random() * (this.maxCost - this.minCost);
            console.log(random);
            this.custmerRaandom.push(random);
        }
    },


    cookiePurchasedPerHour: function () {

        for (var i = 0; i < arr.length; i++) {
            //var cusPerHour=this.customerPerHour();
            this.parisArr.push(Math.ceil( this.custmerRaandom[i] * this.avg));
            this.total += this.parisArr[i];
            
            
           

        }

    },

    
    

    render: function () {
        var parent = document.getElementById('sales');
        var h2 = document.createElement('h2');
        h2.textContent = this.name;
        parent.appendChild(h2);

        var ul = document.createElement('ul');
        parent.appendChild(ul);

        for (var i = 0; i < arr.length; i++) {
            var li = document.createElement('li');
            //li.textContent=this.arr[i]+'  '+seattleArr[i];
            li.textContent = arr[i] + " : " + this.parisArr[i]+' cokies';
            
           
            ul.appendChild(li);
        }

        var li2 =document.createElement('li');
        li2.textContent='Total =' +this.total;
        ul.appendChild(li2);

    }
};
paris.customerPerHour();
paris.cookiePurchasedPerHour();
paris.render();



var lima = {

    minCost: 2
    , maxCost: 16,
    avg: 4.6,
    name: 'Lima',

   

    limaArr: [],
    total:0,
    avg: 6.3,
    custmerRaandom: [],

    customerPerHour: function () {
        var random;
        for (var i = 0; i < arr.length; i++) {
           random =
                this.minCost + Math.random() * (this.maxCost - this.minCost);
            console.log(random);
            this.custmerRaandom.push(random);
        }
    },


    cookiePurchasedPerHour: function () {

        for (var i = 0; i < arr.length; i++) {
            //var cusPerHour=this.customerPerHour();
            this.limaArr.push(Math.ceil( this.custmerRaandom[i] * this.avg));
            this.total += this.limaArr[i];
            
            
           

        }

    },

    
    

    render: function () {
        var parent = document.getElementById('sales');
        var h2 = document.createElement('h2');
        h2.textContent = this.name;
        parent.appendChild(h2);

        var ul = document.createElement('ul');
        parent.appendChild(ul);

        for (var i = 0; i < arr.length; i++) {
            var li = document.createElement('li');
            //li.textContent=this.arr[i]+'  '+seattleArr[i];
            li.textContent = arr[i] + " : " + this.limaArr[i]+' cokies';
            
           
            ul.appendChild(li);
        }

        var li2 =document.createElement('li');
        li2.textContent='Total =' +this.total;
        ul.appendChild(li2);

    }
};

lima.customerPerHour();
lima.cookiePurchasedPerHour();
lima.render();
