const initState = {
    posts: [
        { id: 1, title: 'Simple test title 1', body: 'text body 1' },
        { id: 2, title: 'Simple test title 2', body: 'text body 2' },
        { id: 3, title: 'Simple test title 3', body: 'text body 3' },
        { id: 4, title: 'Simple test title 4', body: 'text body 4' }
    ]
}

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'DELETE_POST': 
            let newPost = state.posts.filter(post => {
                return post.id !== action.id
            })

            return {
                ...state,
                posts: newPost
            }
        case 'ADD_POST':
            console.log(action);
                // let addNew = 
                console.log()
                return {
                    posts: [action.data,...state.posts]
                }
        default:
            return state;
    }
}

export default rootReducer