let laptop = {
    make : "dell",
    model : "XPS 15",
    year : "2021",
    describe:function() {
        console.log(`This laptop is ${this.make}  ${this.model} ${this.year}.`);
        
    }

}
laptop.describe()