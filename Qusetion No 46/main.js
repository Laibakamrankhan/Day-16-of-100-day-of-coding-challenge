var laptop = {
    make: "dell",
    model: "XPS 15",
    year: "2021",
    describe: function () {
        console.log("This laptop is ".concat(this.make, "  ").concat(this.model, " ").concat(this.year, "."));
    }
};
laptop.describe();
