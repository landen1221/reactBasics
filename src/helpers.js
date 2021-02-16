function choice(items) {
    const itemIdx = Math.floor(Math.random()*items.length)
    return items[itemIdx]
}

function remove(items, item) {
    let idx = items.indexOf(item)
    if (idx>=0) {
        items.splice(idx, 1)
        return item
    }
}

export {choice, remove};