interface IconProps {
    icon: string;
    alt?: string;
    size: string
    className?: string;
}

const Icon = ({ icon, alt, size, className }: IconProps) => {
    const sizeStyle = {
        width: size,
        height: size
    }
    return (
        <div className="d-flex align-items-center">
            <img src={icon} alt={alt} style={sizeStyle} className={className} />
        </div >
    );
}

export default Icon;