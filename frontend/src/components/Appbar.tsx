import { Link } from "react-router-dom"
import { Avatar } from "./Avatar"

interface AppbarProp {
    authName: string
}

export const Appbar = ({authName}: AppbarProp) => {
    return (
        <div className="flex justify-between items-center px-10 border-b py-4 cursor-pointer">
            <Link to={"/blogs"}>
            <div>
                Medium
            </div> 
            </Link>
            <div className="flex justify-center items-baseline">
                <div>
                    <Link to={"/publish"}>
                        <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 ">
                            New Blog
                        </button>
                    </Link>
                </div>
                <div>
                    <Avatar names={authName.split(' ')} size="big" />
                </div>
            </div>
        </div>
    )
}