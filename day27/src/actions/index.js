const AddItem = (item) => {
    return {
        type: 'ADD_ITEM',
        payload: item
    }
}

const RemoveItem = (id) => {
    return {
        type: 'REMOVE_ITEM',
        payload: id
    }
}

export {
    AddItem,
    RemoveItem
}