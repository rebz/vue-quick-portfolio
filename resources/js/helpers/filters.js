function isArray(array) {
    return !(!(array instanceof Array) || !array.length)
}

function isObject(object) {
    return (object instanceof Object) && !(object instanceof Array) && !!Object.keys(object).length
}

export const filterTruthy = (object) => {

    if (object == null) {
        return {}
    }

    // const isValArray = isArray(val)
    // const isValObject = isObject(val)

    return object.filter(item => {

        console.info(item)



        //
        // const val = object[cur]
        // const isValArray = isArray(val)
        // const isValObject = isObject(val)
        //
        // if((isValObject || isValArray) || !!val) {
        //
        //     // console.log(`${cur}`)
        //     // console.log(isValArray)
        //     // console.log(isValObject)
        //
        //     if (isValArray) {
        //         console.info(`${cur} is Array`)
        //
        //     } else if (isValObject) {
        //         console.info(`${cur} is Object`)
        //
        //     } else {
        //         console.info(`${cur} is Truthy`)
        //
        //     }
        //
        //
        //     acc[cur] = val//isValArray ? filterTruthy(val, []) : isValObject ? filterTruthy(val) : val
        //     // acc[cur] = isValArray ? filterTruthy(val, []) : isValObject ? filterTruthy(val) : val
        //
        //     // acc[cur] = (typeof val === 'object') ? filterTruthy(val) : val
        // }
        // return acc

    })
}
