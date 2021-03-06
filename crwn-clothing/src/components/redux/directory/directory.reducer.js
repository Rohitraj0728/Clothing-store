const INITIAL_STATE = {
    sections : [
        {
            title: 'HATS',
            imageurl: 'https://i.ibb.co/cvpntL1/hats.png',
            id: 1
        },
        {
            title: 'JACKETS',
            imageurl: 'https://i.ibb.co/px2tCc3/jackets.png',
            id: 1
        },
        {
            title: 'SNEAKERS',
            imageurl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
            id: 1
        },
        {
            title: 'WOMENS',
            imageurl: 'https://i.ibb.co/GCCdy8t/womens.png',
            size: 'large',
            id: 1
        },
        {
            title: 'MENS',
            imageurl: 'https://i.ibb.co/R70vBrQ/men.png',
            size: 'large',
            id: 1
        }
       ]
};

const directoryReducer = (state = INITIAL_STATE , action) => {
    switch(action.type){
        default:
            return state; 
    }
};

export default directoryReducer;