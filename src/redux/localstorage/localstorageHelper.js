// import localstorage from 'localstorage';

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState) {
            var temp = JSON.parse(serializedState);
            return temp
        } else {
            return undefined;
        }

    } catch (err) {
        return err;
    }

}

export const saveState = (state) => {
    try {
        let stateCopy;
        if (state.userType) {
            stateCopy = { ...state }
        }
        else {
            stateCopy = {
                ...state,
            }
        }
        const serializedState = JSON.stringify(stateCopy);
        localStorage.setItem('state', serializedState);
    } catch (err) { }

}
