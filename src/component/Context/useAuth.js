import { useContext } from "react"
import { MyContext } from "./ContextCreate"

const useAuth = () => {
    return useContext(MyContext)
}
export default useAuth;