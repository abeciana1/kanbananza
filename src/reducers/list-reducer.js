import { lists as defaultLists } from '../normalized-state'

const listsReducer = (lists = defaultLists, action) => {
    console.log(lists, action)
    return lists //! aka state
}

export default listsReducer