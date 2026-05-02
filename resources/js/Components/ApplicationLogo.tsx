export default function ApplicationLogo(props) {
    return (
        <div {...props} className={`font-accent text-xl font-extrabold flex items-center gap-1 ${props.className}`}>
            <span className="text-konoha-orange">Konoha</span>
            <span className="text-gray-600">Group</span>
        </div>
    );
}
