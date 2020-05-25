export const updateObjectInArray = (items, itemId, objPropName, newObjProps) => {
    let arr =  items.map(item => {
        if (item[objPropName] === itemId) {
            return {...item, ...newObjProps}
        }
        return item
    })
    return arr
}