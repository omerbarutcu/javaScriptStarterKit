//1
//JavaScript ile istediğiniz kadar sayı parametre gönderebileceğiniz bir fonksiyon yazınız.
//Bu fonksiyona gönderdiğiniz her sayı için çıktı olarak asal olup olmadığını yazınız.
function findPrime(...numbers) {

    for (let i = 0; i < numbers.length; i++) {
        let number = 0;

        for (let j = 1; j <= numbers[i]-1; j++) {
            if (numbers[i] % j == 0) {
                number++;
            }
        }

        if (number == 1) {
            console.log(numbers[i] + " - is a prime")
        } else {
            console.log(numbers[i] + " - is not a prime")
        }
    }           
}

findPrime(24,69,83,5,17)

//2
//Parametre olarak girilen iki sayının arkadaş sayılar olup olmadığını bulan programı yazınız.
function isFriend(number1,number2) {
    let t1=0,t2=0
    for (let i = 0; i < number1; i++) {
        if (number1%i==0) {
            t1+=i
        }  
    }
    for (let i = 0; i < number2; i++) {
        if (number2%i==0) {
            t2+=i
        }    
    }
    if (t1==number2&&t2==number1) {
        console.log(number1+" and "+number2+" is friend.")
    }else{
        console.log(number1+" and "+number2+" is not friend")
    }
}
isFriend(1184,1210)

//3
//1000'e kadarki tüm mükemmel sayıları listeleyen programı yazınız.
function isPerfectNumber() {
    for (let i = 1; i <= 1000; i++) {
        let total=0
        for (let j = 1; j < i; j++) {
            if (i%j==0) {
               total+=j 
            }
        }
        if (total==i) {
            console.log(i + "- is perfect number")
        }   
    }
}
isPerfectNumber()

//4
//1000'e kadarki tüm asal sayıları listeleyen programı yazınız.
function isPrimeNumber() {
    for (let i = 0; i <= 1000; i++) {
        let number=0
        for (let j = 0; j < i; j++) {
            if (i%j==0) {
                number++
            }
        }
        if (number==1) {
            console.log(i + " - is a prime number") 
        }
    }
}
isPrimeNumber()






