import { SEARCH_TEXT_CHANGED } from '../constants'

const searchTextChanged = text => {
    return {
        type: SEARCH_TEXT_CHANGED,
        payload: text
    }
}

export default searchTextChanged