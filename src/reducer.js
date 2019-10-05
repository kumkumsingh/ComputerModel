

const data = [
    {
        id: 1,
        name: "Ivel Z3",
        manufacturer: "Ivasim",
        year: 1969,
        origin: "Croatia"
    },
    {
        id: 2,
        name: "Bally Astrocade",
        manufacturer: "Bally Consumer Products",
        year: 1977,
        origin: "USA"
    },
    {
        id: 3,
        name: "Sord M200 Smart Home Computer",
        manufacturer: "Sord Computer Corporation",
        year: 1971,
        origin: "Japan"
    },
    {
        id: 4,
        name: "Commodore 64",
        manufacturer: "Commodore",
        year: 1982,
        origin: "USA"
    }
]
const reducer = (state = data, action = {}) => {
    switch (action.type) {
        case 'SELECTED-ITEM':
            return {
                ...action.payload
            }
        default:
            return state
    }
}

export default reducer