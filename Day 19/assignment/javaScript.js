// JavaScript source code
var mayStudioPrice = 50
var mayApartmentPrice = 65
var juneStudioPrice = 75.20
var juneApartmentPrice = 68.70
var julyStudioPrice = 76
var julyApartmentPrice = 77

function price(month, numStays) {
    let finalPrice = {
        "Apartment": 0,
        "Studio": 0
    }

    if (month == 'October' || month == 'May') {
        if (numStays > 14) {

            let Sprice = mayStudioPrice * numStays;
            finalPrice.Studio = (Sprice) - (Sprice * (30 / 100));

            let Aprice = mayApartmentPrice * numStays;
            finalPrice.Apartment = (Aprice) - (Aprice * (10 / 100));

            return finalPrice;
        }
        else if (numStays >= 7) {
            let Sprice = mayStudioPrice * numStays;
            finalPrice.Studio = (Sprice) - ((Sprice) * (5 / 100));

            finalPrice.Apartment = mayApartmentPrice * numStays;
        }
        else {
            finalPrice.Apartment = mayStudioPrice * numStays;
            finalPrice.Apartment = mayApartmentPrice * numStays;
        }
        return finalPrice;
    }

    else if (month == 'June' || month == 'September') {

        if (numStays > 14) {

            let Sprice = juneStudioPrice * numStays;
            finalPrice.Studio = (Sprice) - ((Sprice) * (20 / 100));

            let Aprice = juneApartmentPrice * numStays;
            finalPrice.Apartment = (Aprice) - ((Aprice) * (10 / 100));

        }
        else {
            finalPrice.Studio = juneStudioPrice * numStays;
            finalPrice.Apartment = juneApartmentPrice * numStays;
        }
        return finalPrice;
    }

    if (month == 'July' || month == 'August') {

        finalPrice.Studio = julyStudioPrice * numStays;

        if (numStays >= 14) {
            let Aprice = julyApartmentPrice * numStays;
            finalPrice.Apartment = (Aprice) - ((Aprice) * (10 / 100));
        }
        else {
            finalPrice.Apartment = julyApartmentPrice * numStays;
        }
        return finalPrice;

    }

}
console.log(price("May", 15));
console.log(price("June", 14));
console.log(price("August", 20));