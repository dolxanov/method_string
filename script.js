// First exercise

// function Click(){

// let input = document.getElementById('input').value;
// let div = document.getElementById('div');
// div.textContent = input.length;
// }


// Second exercise

// function make_First() {
//     let input = document.getElementById('input').value;
//     let div = document.getElementById('div');
//     let words = input.charAt();
//     let combine = words.toUpperCase() + input.substr(1);

//     div.innerHTML =  combine


// }
function point() {

    let input = document.getElementById('input').value;
    let div = document.getElementById('div');
    let text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur dolores nesciunt laborum sapienaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'

    if (input.length > 100) {
        div.textContent = input.substring(0, 100) + '...'
        //    console.log(text.substring(0,100)+'...')
        // console.log(input.substring(0,100)+'...') 

    } else {
        alert('100-den azdir')
  
    }

    // console.log(point)

}





