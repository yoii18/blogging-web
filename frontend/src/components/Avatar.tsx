interface AvatarProp {
    names: string[],
    size: string    // "big" or "small"
}
export const Avatar = ({names, size}: AvatarProp) => {
    return (
        size === "big" ?
        <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full">
            <span className="font-medium text-gray-600">{`${names[0][0].toUpperCase()}${names[1][0].toUpperCase()}`}</span>
        </div>
        : <div className="relative inline-flex items-center justify-center w-7 h-7 overflow-hidden bg-gray-100 rounded-full">
            <span className="text-xs font-medium text-gray-600">{`${names[0][0].toUpperCase()}${names[1][0].toUpperCase()}`}</span>
        </div>
    )
}