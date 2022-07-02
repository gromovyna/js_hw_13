let amount = 100;
let monday = [
  ['Write a tutorial',180],
  ['Some web development',120]
];
let tuesday = [
  ['Keep writing that tutorial',240],
  ['Some more web development',360],
   ['A whole lot of nothing',240]
];

let listBook = monday.concat(tuesday)
.map(
    function(item){
        item[1]/=60;
        return item
    }
)
.filter(
    function(item){
        return item[1]>2
    }
)
.map(
    function(item){
        let totalAmount = item[1] * amount;
        item.push(totalAmount);
        return item 
    }
)
.map(
    function(item){
        return `
        <tr>
            <td>Task name: ${item[0]}</td>
            <td>Task duration: ${item[1]}</td>
            <td>Task amount ${item[2]}</td>
        <tr/>
        `
    }
)
.join(" ")
document.write(`<table>${listBook}</table>`);