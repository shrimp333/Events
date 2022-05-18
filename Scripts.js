document.getElementById("hiddenHeader").addEventListener("mouseover" , function(){document.getElementById("hiddenHeader").innerHTML = "Goodbye Mars";});
document.getElementById("hiddenHeader").addEventListener("mouseout" , function(){document.getElementById("hiddenHeader").innerHTML = "Hello World";});
function helloWorld(){
    if (document.getElementById("hiddenHeader").style.visibility == 'visible')
        document.getElementById("hiddenHeader").style.visibility = 'hidden';
    else
        document.getElementById("hiddenHeader").style.visibility = 'visible'
}

function colorChanger(){
    if (document.getElementById("ColorChanger").style.backgroundColor === 'rgb(67, 143, 41)')
        document.getElementById("ColorChanger").style.backgroundColor = '#363a57'
    else
        document.getElementById("ColorChanger").style.backgroundColor = 'rgb(67, 143, 41)'
}

function enableColorChanger(){
    if (document.getElementById("color-button").disabled == true)
    {
        document.getElementById("color-button").disabled = false;
        document.getElementById("color-button").style.backgroundColor = '#75298f'
        document.getElementById("enabler").innerHTML = 'Click me to disable the color changer button';
    }
    else
    {
        document.getElementById("color-button").disabled = true;
        document.getElementById("color-button").style.backgroundColor = '#a88eb1'
        document.getElementById("enabler").innerHTML = 'Click me to enable the color changer button';
    }
}