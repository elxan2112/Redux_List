export const adding = (name, number) =>({
    type: 'fullAction',
    payload:{
    name: name,
    number: number}
})

export const clear = () =>({
    type: 'clearAction'
})