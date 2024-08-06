let firstname, middlename, latename

document.getElementById("button_tombol").onclick = function(){
    firstname = document.getElementById("firstname").value
    middlename = document.getElementById("middlename").value
    latename = document.getElementById("latename").value
    bestname = firstname + " " + middlename + " " + latename

    console.log(bestname)
    document.getElementById("bestname").textContent = bestname
}