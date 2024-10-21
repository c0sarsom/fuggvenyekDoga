function isLeapYear(year) 
{
    if (year % 4 == 0) 
    {
        if (year % 400 == 0)
        {
            return true;
        }  
        else if (year % 100 == 0)
        {
            return false;
        }
        else
        {
            return true;
        }
    }
    else
    {
        return false;
    }
}

function threeRuls() 
{
    const element = [];
    let szabaly = 0;
    let szamlalo = 0;
    for (let i = 1; i <= 50; i++) 
    {
        if(i % 3 == 0 && szamlalo == 0)
        {
            if(szabaly == 2) { szabaly = 0; }
            else { szabaly++; }
            szamlalo = szabaly;
            
        }
        else if (i % 3 == 0)
        {
            szamlalo--;
            element.push(i);
        }
        else
        {
            element.push(i);
        }
    }
    return element
}

function divisors(number) 
{
    const oszthato = [];
    for (let index = 0; index <= number; index++) {
        if(number % index == 0)
        {
            oszthato.push(index);
        }
    }
    return oszthato
}

function cuboid(a, b, c) 
{
    if( a <= 0 || b <= 0 || c <= 0 )
    {
        return [0,0];
    }
    return [a*b*2 + b*c*2 + c*a*2, a*b*c]
}