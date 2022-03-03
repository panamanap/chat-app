import { useTypedSelector } from "./useTypedSelector";

export const useAuth = () => {
    const x = useTypedSelector(state => state.dialog)
}