import Lottie, { LottieRefCurrentProps } from "lottie-react";
import { useEffect, useRef, useState } from "react";


interface AnimatedIconProps {
    style?: React.CSSProperties | undefined
    animatedIcon: any
    loop?: boolean
    oneTime?: boolean
    className?: string
}

const AnimatedIcon = ({ animatedIcon, style, className, loop = false, oneTime = false }: AnimatedIconProps) => {
    const iconRef = useRef<LottieRefCurrentProps>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        iconRef.current?.goToAndPlay(0, true);

    }, []);

    function onMouseEnter() {

        if (!isPlaying) {
            iconRef.current?.goToAndPlay(0, true);
            setIsPlaying(true);
        }
    }
    function onComplete() {
        setIsPlaying(false);
    }
    function oneTimeExecute() {
        iconRef.current?.goToAndStop(0, true);
    }

    return (
        <Lottie
            onMouseEnter={() => { !oneTime && !loop && onMouseEnter() }}
            onComplete={() => {
                !loop && onComplete()
                oneTime && oneTimeExecute()
            }}
            lottieRef={iconRef}
            loop={loop}
            style={style}
            className={className}
            animationData={animatedIcon}
        />
    );
};

export default AnimatedIcon;
