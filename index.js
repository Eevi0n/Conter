let count = 0


document.getElementById("increaseBtn").onclick = function()
{
    count += 1
    count = Number(count)

    document.getElementById("countLabel").innerHTML = count
}

document.getElementById("resetBtn").onclick = function()
{
    count = 0
    count = Number(count)

    document.getElementById("countLabel").innerHTML = count
}

document.getElementById("decreaseBtn").onclick = function()
{
    count -= 1
    count = Number(count)

    document.getElementById("countLabel").innerHTML = count
}