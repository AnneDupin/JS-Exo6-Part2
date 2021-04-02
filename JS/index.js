function myMovie() {
    document.getElementById('image').src="./img/movie1_2.jpg";
}

function myOtherMovie() {
    document.getElementById('image').src="./img/movie3_2.jpg";
}

document.getElementById('image').addEventListener('mouseover', myMovie);
document.getElementById('image').addEventListener('mouseout', myOtherMovie);


