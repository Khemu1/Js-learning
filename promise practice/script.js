const myPromise = new Promise((fullfill, reject) => {
    let arr = [1, 2, 3, 4];
    if (arr.length === 4) {
        fullfill(arr);
    } else {
        reject(Error(`didn't meat the specs`));
    }
});
myPromise
    .then((fullfillValue) => {
        fullfillValue.length = 2;
        return fullfillValue; // this will send it the next function
    })
    .then((fullfillValue) => {
        fullfillValue.length = 1;
        return fullfillValue;
    })
    .then((fullfillValue) => console.log(fullfillValue))
    .catch((rejectValue) => console.log(rejectValue))
    .finally(() => console.log(`Done`));
// catch is used to find error and do somthing when it finds them and finally does somthing regardless of the state

// without using catch
const myPromise1 = new Promise((fulfill, reject) => {
    let arr = [1, 2, 3, 4];
    if (arr.length === 4) {
        fulfill(arr);
    } else {
        reject(Error(`didn't meet the specs`));
    }
});

myPromise1
    .then(
        (fulfillValue) => {
            fulfillValue.length = 2;
            return fulfillValue;
        },
        (rejectValue) => {
            console.log(rejectValue);
            return rejectValue; // Pass the rejection value to the next then
        }
    )
    .then((value) => {
        if (value instanceof Error) {
            console.log("Handling previously rejected promise:", value);
        } else {
            value.length = 1;
            console.log(value);
        }
    })
    .finally(() => console.log(`Done`));
