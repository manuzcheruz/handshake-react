import { AnyAction } from "redux"

export const toggleNightMode: () => AnyAction = () => {
    return {
        type: 'TOGGLE_NIGHT_MODE'
    }
}