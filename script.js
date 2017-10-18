/*
 * Created by h205p3 on 9/29/17.
 */

function sleep_in(weekday, vacation)
{
    if(weekday == false)
    {
        if(vacation == false)
        {
            return true;
        }
        else
        {
            return true;
        }
    }
    if(weekday == true)
    {
        if(vacation == true)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
}

function monkey_trouble(a_smile, b_smile)
{
    if(((a_smile == true) && (b_smile == true))||((a_smile == false) && (b_smile == false)))
    {
        return true;
    }
    else if((a_smile == true && b_smile == false)||(a_smile == false && b_smile == true))
    {
        return false;
    }
}

function string_times(string, n)
{

    var copyCopy = "";
    for(var i = 0; i < n; i++)
    {
        copyCopy += string;
    }
    return copyCopy;
}

function front_times(string, n)
{
    var takeFront = string[0];
    takeFront += string[1];
    if(string.length >= 3)
    {
        takeFront += string[2];
    }
    var final = "";
    if(n == 0 || string.length == 0)
    {
        return "";
    }
    for(var i = 0; i < n; i++)
    {
        final += takeFront;
    }
    return final;
}

function string_bits(x)
{
    var bit = "";
    for(var i = 0; i < x.length; i+=2)
    {
        bit += x[i];
    }
    return bit;
}

function caughtSpeeding(speed, birthday)
{

    var hiSpeed = 80;
    var loSpeed = 61;

    if(birthday == true)
    {
        hiSpeed += 5;
        loSpeed += 5;
    }
    if(speed >= loSpeed && speed <= hiSpeed)
    {
        return "1";
    }
    else if(speed > loSpeed && speed > hiSpeed)
    {
        return "2";
    }
    else if(speed < loSpeed)
    {
        return "0";
    }
}

function fizz_buzz(x)
{

    if(x % 3 === 0 && x % 5 === 0)
    {
        return "FizzBuzz";
    }
    else if(x % 5 === 0)
    {
        return "Buzz";
    }
    else if(x % 3 === 0)
    {
        return "Fizz";
    }
    else
    {
        return x + "!";
    }
}

function teaParty(x, y)
{
    if(x < 5 || y < 5)
    {
        return "0";
    }
    if(x * 2 <= y || y * 2 <= x)
    {
        return "2";
    }
    else if(x >= 5 && y >= 5)
    {
        return "1";
    }
}

function blackjack(x, y)
{
    if(21 - x <= 21 - y && 21 - x >= 0)
    {
        return x;
    }
    else if(21 - y >= 0)
    {
        return y;
    }
    else if(21 - x >= 0)
    {
        return x;
    }
    else
    {
        return 0;
    }

}

function loneSum(x, y, z)
{
    var xz = x - z;
    var yx = y - x;
    var zy = z - y;
    var xyz = y + x + z;

    if(x == y && y == z)
    {
        return "0";
    }
    else if(x == z)
    {
        return y;
    }
    else if(y == z)
    {
        return x;
    }
    else if(x == y)
    {
        return z;
    }
    else
    {
        return xyz;
    }

}











function tester()
{

    //document.getElementById("output").innerHTML = sleep_in(true, false);
    //document.getElementById("output").innerHTML = monkey_trouble(true, true);
    //document.getElementById("output").innerHTML = string_times("boujee ", 6);
    //document.getElementById("output").innerHTML = front_times("boujee ", 3);
    //document.getElementById("output").innerHTML = string_bits("boujee ");
    //document.getElementById("output").innerHTML = caughtSpeeding(60, false);

}

