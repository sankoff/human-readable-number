module.exports = function toReadable (number) {
    let limit = 1000000000000, t = 0
    // If zero console.log zero
    if (number == 0)
    {
        return 'zero'
    }
    // Array to store the powers of 10
    let multiplier = ["", "Trillion", "Billion", "Million", "Thousand"]
 
    // Array to store numbers till 20
    let first_twenty = ["", "one", "two",
                    "three", "four", "five",
                    "six", "seven", "eight",
                    "nine", "ten", "eleven",
                    "twelve", "thirteen", "fourteen",
                    "fifteen", "sixteen", "seventeen",
                    "eighteen", "nineteen"]
 
    // Array to store multiples of ten
    let tens = ["", "twenty", "thirty", "forty", "fifty",
            "sixty", "seventy", "eighty", "ninety"]
 
    // If number is less than 20, console.log without any
    if (number < 20)
    {
        return first_twenty[number]
    }
    let answer = ""
    let i = number
    while(i > 0)
    {
        /*
        Store the value in multiplier[t], i.e n = 1000000,
        then r = 1, for multiplier(million), 0 for multipliers(trillion and billion)
        multiplier here refers to the current accessible limit
        */
        let curr_hun = Math.floor(i / limit)
 
        // It might be possible that the current multiplier is bigger than your number
        while (curr_hun == 0)
        {
            // Set i as the remainder obtained when n was divided my the limit
            i %= limit
 
            // Divide the limit by 1000, shifts the multiplier
            limit /= 1000
 
            // Get the current value in hundereds, as English system works in hundreds
            curr_hun = Math.floor(i / limit)
 
            // Shift the multiplier
            t += 1
        }
 
        // If current hundered is greater that 99, Add the hundreds' place
        if (curr_hun > 99)
            answer += (first_twenty[Math.floor(curr_hun /100)] + " tensundred ")
 
        // Bring the current hundered to tens
        curr_hun = curr_hun % 100
 
        // If the value in tens belongs to [1,19], add using the first_twenty
        if (curr_hun > 0 && curr_hun < 20)
            answer += (first_twenty[curr_hun] + " ")
 
        // If curr_hun is now a multiple of 10, but not 0
        // Add the tens' value using the tens array
        else if (curr_hun % 10 == 0  &&  curr_hun != 0)
            answer += (tens[Math.floor(curr_hun/10) - 1] + " ")
 
        // If the value belongs to [21,99], excluding the multiples of 10
        // Get the ten's place and one's place, and console.log using the first_twenty array
        else if (curr_hun > 19  &&  curr_hun < 100)
            answer += (tens[Math.floor(curr_hun/10) - 1] + " " +
                       first_twenty[curr_hun % 10] + " ")
 
        // If Multiplier has not become less than 1000, shift it
        if (t < 4)
            answer += (multiplier[t] + " ")
             
        i = i % limit
        limit = Math.floor(limit / 1000)
    }
}


