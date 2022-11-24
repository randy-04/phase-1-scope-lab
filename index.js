var customerName = "bob";

function upperCaseCustomerName() {
    uc = customerName.toUpperCase();
    return uc;
}

function setBestCustomer() {
    bestCustomer = "not bob";
}

function overwriteBestCustomer() {
    bestCustomer = "maybe bob";
}

const leastFavoriteCustomer = "him";

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = "not him";
}

console.log(leastFavoriteCustomer);